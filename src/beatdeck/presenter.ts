import { deck } from './engine';
import { flags } from './flags';
import type { DeckState } from './types';

/** Stage ⇄ presenter protocol over BroadcastChannel (same origin, no network). */
export type Msg =
  | ({ type: 'state'; fullscreen: boolean; sentAt: number } & DeckState<unknown>)
  | { type: 'hello' }
  | { type: 'cmd'; cmd: 'next' | 'prev' | 'home' | 'end' | 'blackout' }
  | { type: 'go'; scene: number; beat: number };

export function openChannel(): BroadcastChannel | null {
  try {
    return new BroadcastChannel(`beatdeck:${deck.def.id}`);
  } catch {
    return null;
  }
}

/** Stage side: publish every state change and obey commands from presenter windows. */
export function startStageSync(): () => void {
  const ch = openChannel();
  if (!ch) return () => {};
  let lastState: DeckState<unknown> | null = null;
  let lastFullscreen = false;
  const publish = (force = false) => {
    const s = deck.getState();
    const msg: Msg = {
      ...s, type: 'state',
      fullscreen: !!document.fullscreenElement, sentAt: Date.now(),
    };
    if (!force && s === lastState && msg.fullscreen === lastFullscreen) return;
    lastState = s;
    lastFullscreen = msg.fullscreen;
    ch.postMessage(msg);
  };
  const unsub = deck.subscribe(() => publish());
  const onFs = () => publish();
  document.addEventListener('fullscreenchange', onFs);
  // heartbeat: lets the presenter show "connected" and recover from a missed message
  const hb = setInterval(() => publish(true), 1000);
  ch.onmessage = (e: MessageEvent<Msg>) => {
    const m = e.data;
    if (m.type === 'hello') publish(true);
    else if (m.type === 'go') deck.go({ scene: m.scene, beat: m.beat });
    else if (m.type === 'cmd') {
      if (m.cmd === 'next') deck.next();
      else if (m.cmd === 'prev') deck.prev();
      else if (m.cmd === 'home') deck.home();
      else if (m.cmd === 'end') deck.end();
      else if (m.cmd === 'blackout') deck.toggleBlackout();
    }
  };
  publish(true);
  return () => {
    unsub();
    clearInterval(hb);
    document.removeEventListener('fullscreenchange', onFs);
    ch.close();
  };
}

export function openPresenterWindow() {
  if (flags.presenter) return;
  window.open(`${location.pathname}?view=presenter`, `beatdeck-presenter-${deck.def.id}`, 'width=1280,height=800');
}
