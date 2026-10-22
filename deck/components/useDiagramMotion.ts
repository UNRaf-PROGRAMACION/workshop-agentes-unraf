import { useLayoutEffect, useRef, useSyncExternalStore } from 'react';
import { flags, reducedMotion, useScene } from 'beatdeck';

/** Animate toward the authored final frame; never use animation as story state. */
export function useDiagramMotion() {
  const root = useRef<HTMLDivElement>(null);
  const seen = useRef(new WeakMap<Element, string>());
  const { here, entry, dir } = useScene();
  const reduced = useSyncExternalStore(reducedMotion.subscribe, reducedMotion.get);

  useLayoutEffect(() => {
    if (!here || !root.current) {
      seen.current = new WeakMap();
      return;
    }
    const animations: Animation[] = [];
    root.current.querySelectorAll<HTMLElement | SVGElement>('[data-motion]').forEach((element) => {
      const signature = `${element.dataset.motion}|${element.dataset.distance ?? ''}|${element.textContent}`;
      const changed = seen.current.get(element) !== signature;
      seen.current.set(element, signature);
      if (!changed || dir !== 'forward' || reduced || flags.capture) return;
      const delay = Number(element.dataset.delay ?? 0);
      let frames: Keyframe[];
      let duration = 700;
      switch (element.dataset.motion) {
        case 'draw':
          frames = [{ strokeDashoffset: '1' }, { strokeDashoffset: '0' }];
          break;
        case 'arrive':
          frames = [{ opacity: 0, transform: 'translateY(18px) scale(.92)' }, { opacity: 1, transform: 'none' }];
          break;
        case 'life-value': {
          const value = Number(element.dataset.value);
          frames = [
            { opacity: value === 3 ? 1 : 0, offset: 0, easing: 'steps(1, end)' },
            ...LIFE_IMPACTS.map((time, index) => ({ opacity: value === 2 - index ? 1 : 0, offset: time / LIFE_DURATION, easing: 'steps(1, end)' })),
            { opacity: value === 0 ? 1 : 0, offset: 1 },
          ];
          duration = LIFE_DURATION;
          break;
        }
        case 'heart':
          frames = [{ opacity: 1, offset: 0, easing: 'steps(1, end)' }, { opacity: .12, offset: Number(element.dataset.impact) / LIFE_DURATION }, { opacity: .12, offset: 1 }];
          duration = LIFE_DURATION;
          break;
        case 'defeat':
          frames = [{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'none' }];
          duration = 300;
          break;
        case 'damage':
          frames = [
            { opacity: 0, transform: 'translateX(-340px)', offset: 0 },
            { opacity: 1, transform: 'translateX(-340px)', offset: .1 },
            { opacity: 1, transform: 'translateX(0)', offset: .8 },
            { opacity: 0, transform: 'translateX(0)', offset: 1 },
          ];
          duration = 500;
          break;
        case 'jump':
          frames = [{ transform: 'translate(220px, 230px)', offset: 0 }, { transform: 'translate(300px, 230px)', offset: .18 }];
          for (let i = 1; i <= 20; i++) {
            const t = i / 20;
            const x = (1 - t) ** 2 * 300 + 2 * (1 - t) * t * 405 + t ** 2 * 560;
            const y = (1 - t) ** 2 * 230 - 2 * (1 - t) * t * 90 + t ** 2 * 230;
            frames.push({ transform: `translate(${x}px, ${y}px)`, offset: .18 + .82 * t });
          }
          duration = 1800;
          break;
        case 'state':
          frames = [{ transform: 'translateX(-360px)' }, { transform: 'translateX(0)' }];
          duration = 1200;
          break;
        case 'route':
          frames = [{ transform: `translateX(-${element.dataset.distance ?? 1400}px)`, opacity: 0 }, { transform: 'translateX(0)', opacity: 1 }];
          duration = 1400;
          break;
        case 'select':
          frames = [{ opacity: 0, transform: 'translate(-50px, 18px)' }, { opacity: 1, transform: 'none' }];
          duration = 900;
          break;
        default: return;
      }
      const linear = ['jump', 'damage', 'heart', 'life-value'].includes(element.dataset.motion ?? '');
      animations.push(element.animate(frames, { duration, delay, easing: linear ? 'linear' : 'cubic-bezier(.22,1,.36,1)', fill: 'backwards' }));
    });
    return () => animations.forEach((animation) => animation.cancel());
  }, [here, entry, dir, reduced]);

  return root;
}

// Impact occurs at 80% of each 500 ms flight. All feedback shares these boundaries.
export const LIFE_IMPACTS = [400, 1100, 1800] as const;
const LIFE_DURATION = 2100;
