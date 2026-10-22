// Exercise P in development too: React StrictMode replays effect setup/cleanup there.
import assert from 'node:assert/strict';
import { launchBrowser, startServer } from './lib.mjs';

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
  await presenter.keyboard.press('PageDown');
  await stage.waitForURL('**/#1.2');
  await presenter.locator('.p-pos').first().filter({ hasText: '1.2' }).waitFor();
  await presenter.keyboard.press('PageUp');
  await stage.waitForURL('**/#1.1');
  await presenter.getByRole('button', { name: 'resync', exact: true }).click();
  await presenter.reload();
  await presenter.waitForSelector('.p-ok');
  await presenter.keyboard.press('PageDown');
  await stage.waitForURL('**/#1.2');
  await presenter.close();
  presenter = await openPresenter();
  await presenter.locator('.p-pos').first().filter({ hasText: '1.2' }).waitFor();
  assert.deepEqual(errors, [], 'presenter must open and reconnect without browser errors');
  console.log('✓ Presenter: P, connection, next/prev, resync