import { useLayoutEffect, useRef, useSyncExternalStore } from 'react';
import { flags, reducedMotion, useScene } from 'beatdeck';

/** Animate toward the authored final frame; never use animation as story state. */
export function useDiagramMotion() {
  const root = useRef<HTMLDivElement>(null);
  const { here, entry, dir } = useScene();
  const reduced = useSyncExternalStore(reducedMotion.subscribe, reducedMotion.get);

  useLayoutEffect(() => {
    if (!here || dir !== 'forward' || reduced || flags.capture || !root.current) return;
    const animations: Animation[] = [];
    root.current.querySelectorAll<HTMLElement | SVGElement>('[data-motion]').forEach((element) => {
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
        case 'heart':
          frames = [{ opacity: 1, transform: 'scale(1)' }, { opacity: 1, transform: 'scale(1.2)', offset: .6 }, { opacity: .12, transform: 'scale(1)' }];
          duration = 300;
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
          duration = 520;
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
      animations.push(element.animate(frames, { duration, delay, easing: element.dataset.motion === 'jump' ? 'linear' : 'cubic-bezier(.22,1,.36,1)', fill: 'backwards' }));
    });
    return () => animations.forEach((animation) => animation.cancel());
  }, [here, entry, dir, reduced]);

  return root;
}
