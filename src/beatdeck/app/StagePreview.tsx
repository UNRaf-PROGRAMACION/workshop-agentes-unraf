import { useLayoutEffect, useRef, useState } from 'react';
import { StageFrame } from './StageFrame';
import { STAGE_W } from './stage';

export function StagePreview() {
  const container = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useLayoutEffect(() => {
    const el = container.current!;
    const resize = () => setScale(el.clientWidth / STAGE_W);
    const observer = new ResizeObserver(resize);
    observer.observe(el);
    resize();
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={container} className="p-preview" role="img" aria-label="Diapositiva actual">
      <div ref={(el) => { if (el) el.inert = true; }}>
        {scale > 0 && <StageFrame scale={scale} />}
      </div>
    </div>
  );
}
