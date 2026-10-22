// Exercise P in development too: React StrictMode replays effect setup/cleanup there.
import assert from 'node:assert/strict';
import { mkdirSync } from 'node:fs';
import { launchBrowser, settle, startServer } from './lib.mjs';

const { base, stop } = await startServer({ dev: true, port: 4175 });
let browser;
try {
  browser = await launchBrowser();
  const context = await browser.newContext();
  const errors = [];
  context.setDefaultTimeout(10000);
  context.on('page', (page) => page.on('pageerror', (error) => {
    errors.push(error.message);
    console.error(`[pageerror] ${error.message}`);
  }));
  const stage = await context.newPage();
  await stage.goto(`${base}#1.1`);
  await stage.waitForSelector('.stage');
  const openPresenter = async () => {
    const popup = stage.waitForEvent('popup');
    await stage.keyboard.press('p');
    const presenter = await popup;
    await presenter.waitForSelector('.p-ok');
    return presenter;
  };
  let presenter = await openPresenter();
  await presenter.waitForSelector('.p-preview .stage');
  const expectPreview = async () => {
    const heading = await stage.locator('.talk-page h1:visible').innerText();
    await presenter.waitForFunction((text) => [...document.querySelectorAll('.p-preview h1')]
      .some((el) => el.checkVisibility({ visibilityProperty: true }) && el.innerText === text), heading);
    await settle(presenter);
    const size = await presenter.locator('.p-preview').boundingBox();
    assert.ok(size.width > 100 && Math.abs(size.width / size.height - 16 / 9) < 0.01, 'preview keeps the stage aspect ratio');
  };
  await presenter.keyboard.press('PageDown');
  await stage.waitForURL('**/#1.2');
  await presenter.locator('.p-pos').first().filter({ hasText: '1.2' }).waitFor();
  await expectPreview();
  await presenter.keyboard.press('PageUp');
  await stage.waitForURL('**/#1.1');
  await presenter.waitForSelector('.p-preview .stage.abs-black');
  await presenter.getByRole('button', { name: 'resync', exact: true }).click();
  await presenter.reload();
  await presenter.waitForSelector('.p-ok');
  await presenter.keyboard.press('PageDown');
  await stage.waitForURL('**/#1.2');
  await presenter.close();
  presenter = await openPresenter();
  await presenter.locator('.p-pos').first().filter({ hasText: '1.2' }).waitFor();
  await expectPreview();
  await presenter.locator('button[title^="03.3 "]').click();
  await stage.waitForURL('**/#3.3');
  await expectPreview();
  const timer = await stage.evaluate(() => localStorage.getItem('beatdeck:desarrollo-guiado-por-agentes-parte-1:timer-start'));
  await presenter.keyboard.press('b');
  await presenter.waitForSelector('.p-preview .stage.abs-black');
  assert.equal(await stage.locator('.stage.abs-black').count(), 1, 'blackout reaches both stage and preview');
  await presenter.keyboard.press('b');
  await presenter.waitForFunction(() => !document.querySelector('.p-preview .stage.abs-black'));
  await stage.evaluate(async () => {
    const { deck } = await import('/src/beatdeck/engine.ts');
    deck.go({ scene: 2, beat: 3 });
  });
  await stage.waitForURL('**/#3.4');
  await presenter.locator('.p-pos').first().filter({ hasText: '3.4' }).waitFor();
  await expectPreview();
  assert.equal(await presenter.evaluate(() => localStorage.getItem('beatdeck:desarrollo-guiado-por-agentes-parte-1:timer-start')), timer, 'preview does not reset the presentation timer');
  await presenter.setViewportSize({ width: 1600, height: 1000 });
  await expectPreview();
  mkdirSync('artifacts/verify-presenter', { recursive: true });
  await presenter.screenshot({ path: 'artifacts/verify-presenter/presenter.png', fullPage: true });
  assert.deepEqual(errors, [], 'presenter must open and reconnect without browser errors');
  console.log('✓ Presenter: P, preview, next/prev, scene jumps, blackout, stage-driven sync, resize, timer, reload and reopen (development StrictMode)');
} finally {
  await browser?.close();
  stop();
}
