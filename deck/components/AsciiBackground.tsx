import { useEffect, useRef, useSyncExternalStore } from 'react';
import { flags, reducedMotion, STAGE_H, STAGE_W, useStagePixelRatio } from 'beatdeck';

// The reference's "ASCII" is a dithered square field, not a text texture.
const CELL = 12;
const CELLS = Array.from({ length: (STAGE_W / CELL) * (STAGE_H / CELL) }, (_, i) => {
  const x = i % (STAGE_W / CELL);
  const y = Math.floor(i / (STAGE_W / CELL));
  const hash = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return { x, y, noise: hash - Math.floor(hash) };
});

export function AsciiBackground({ active }: { active: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const ratio = useStagePixelRatio();
  const reduced = useSyncExternalStore(reducedMotion.subscribe, reducedMotion.get);

  useEffect(() => {
    const canvas = ref.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context || !active) return;
    canvas.width = Math.round(STAGE_W * ratio);
    canvas.height = Math.round(STAGE_H * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    const still = flags.capture || reduced;
    let frame = 0;
    let elapsed = 0;
    let previous: number | null = null;

    const draw = (seconds: number) => {
      context.clearRect(0, 0, STAGE_W, STAGE_H);
      // An autonomous attractor replaces the reference's pointer interaction.
      const pointerX = STAGE_W * (.6 + Math.sin(seconds * .19) * .24);
      const pointerY = STAGE_H * (.5 + Math.cos(seconds * .27) * .28);
      for (const { x, y, noise } of CELLS) {
        const px = x * CELL + CELL / 2;
        const py = y * CELL + CELL / 2;
        const dx = px - pointerX;
        const dy = py - pointerY;
        const distance = Math.hypot(dx, dy);
        const influence = Math.exp(-(distance * distance) / (230 * 230)) * .8;
        if (noise < .42 - influence * .3) continue;
        const radius = Math.hypot(x - 96, (y - 45) * .85);
        const wave = Math.sin(x * .18 + Math.sin(y * .11 + seconds * .34) * 2.2) * .55
          + Math.sin(radius * .24 - seconds * .58) * .45;
        const ripple = Math.sin(distance / 30 - seconds * 2) * influence * .16;
        const phase = Math.max(0, Math.min(1, (wave + ripple + .6) / 1.3));
        const waveShape = phase * phase * (3 - 2 * phase);
        const shape = waveShape + (1 - waveShape) * influence * .9;
        const size = Math.min(10.5, 2.4 + shape * 6.1 + noise * .5 + influence * 1.6);
        const driftX = (Math.sin(py * .012 + seconds * .82) + Math.sin(px * .009 - seconds * .47)) * 1.8;
        const driftY = (Math.cos(px * .011 + seconds * .72) + Math.sin(py * .008 - seconds * .5)) * 1.8;
        const flowX = px - dx * .33 * influence - dy * .065 * influence + driftX;
        const flowY = py - dy * .33 * influence + dx * .065 * influence + driftY;
        context.fillStyle = `rgba(255,179,64,${.06 + shape * .13 + noise * .035 + influence * .16})`;
        context.fillRect(flowX - size / 2, flowY - size / 2, size, size);
      }
    };

    const tick = (now: number) => {
      if (previous === null || now - previous >= 1000 / 30) {
        if (previous !== null) elapsed += Math.min(now - previous, 100);
        previous = now;
        draw(elapsed / 1000);
      }
      frame = requestAnimationFrame(tick);
    };
    const visibility = () => {
      cancelAnimationFrame(frame);
      previous = null;
      if (!document.hidden && !still) frame = requestAnimationFrame(tick);
    };

    draw(0);
    visibility();
    document.addEventListener('visibilitychange', visibility);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('visibilitychange', visibility);
    };
  }, [active, ratio, reduced]);

  return <canvas ref={ref} className="talk-ascii" aria-hidden="true" />;
}
