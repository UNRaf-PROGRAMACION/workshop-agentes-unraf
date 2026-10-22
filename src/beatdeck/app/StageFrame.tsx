import { deck, useDeck } from '../engine';
import { DefaultChrome } from './DefaultChrome';
import { StageScale } from './stage';

/** Shared audience/preview rendering; navigation belongs to the host, not the frame. */
export function StageFrame({ scale, ox = 0, oy = 0 }: { scale: number; ox?: number; oy?: number }) {
  const def = deck.def;
  const d = useDeck((st) => ({
    black: !!def.isBlack?.(st) || st.blackout,
    cut: !!def.isCut?.(st) || st.blackout,
  }));
  const { Stage, Overlay } = def;
  const Chrome = def.Chrome === undefined ? DefaultChrome : def.Chrome;

  return (
    <div className={`stage${d.black ? ' abs-black' : ''}`}
      style={{ transform: `translate(${ox}px,${oy}px) scale(${scale})` }}>
      <StageScale.Provider value={scale}><Stage /></StageScale.Provider>
      {Chrome && <Chrome black={d.black} />}
      <div className="layer" style={{ background: '#000', opacity: d.cut ? 1 : 0 }} />
      {Overlay && <Overlay />}
    </div>
  );
}
