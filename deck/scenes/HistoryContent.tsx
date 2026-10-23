import { flags, useScene } from 'beatdeck';
import { HISTORY, HISTORY_ERAS } from '../history';
import './history.css';

function HistoryMark({ kind }: { kind: 'chess' | 'vision' | 'transformer' | 'code' }) {
  return <svg className="history-mark" viewBox="0 0 180 140" aria-hidden="true">
    {kind === 'chess' ? <>
      <path d="M 52 118 H 128 L 120 99 H 60 Z M 67 91 L 74 62 L 59 39 L 75 47 L 90 25 L 105 47 L 121 39 L 106 62 L 113 91 Z" fill="currentColor" />
      <path d="M 50 130 H 130" stroke="currentColor" strokeWidth="4" />
    </> : kind === 'code' ? <>
      <rect x="15" y="15" width="150" height="110" rx="6" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M 15 38 H 165 M 61 58 L 43 76 L 61 94 M 119 58 L 137 76 L 119 94 M 100 53 L 80 101" fill="none" stroke="currentColor" strokeWidth="4" />
      <circle cx="29" cy="27" r="3" fill="currentColor" /><circle cx="41" cy="27" r="3" fill="currentColor" opacity=".5" />
    </> : kind === 'transformer' ? <>
      {[35, 90, 145].map((x) => <g key={x}>
        {[35, 90, 145].map((target) => <path key={target} d={`M ${x} 40 L ${target} 100`} fill="none" stroke="currentColor" strokeWidth={target === 90 ? 3 : 1.5} opacity={target === 90 ? .85 : .25} />)}
        <rect x={x - 15} y="12" width="30" height="28" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x={x - 15} y="100" width="30" height="28" rx="5" fill="currentColor" fillOpacity={x === 90 ? .3 : .08} stroke="currentColor" strokeWidth={x === 90 ? 3 : 2} />
      </g>)}
    </> : <>
      <rect x="12" y="12" width="156" height="116" rx="2" fill="none" stroke="currentColor" opacity=".4" />
      <path d="M 15 112 L 58 66 L 94 94 L 124 51 L 165 110" fill="none" stroke="currentColor" strokeWidth="2" opacity=".5" />
      <circle cx="52" cy="42" r="12" fill="currentColor" opacity=".4" />
      <path d="M 32 61 V 24 H 72 M 32 49 V 61 H 72 V 24 M 102 106 V 42 H 145 V 106 Z" fill="none" stroke="currentColor" strokeWidth="3" />
    </>}
  </svg>;
}

export function HistoryContent({ step }: { step: number }) {
  const { dir } = useScene();
  const current = HISTORY[Math.min(step, HISTORY.length - 1)];

  return <div className={`history-world${dir === 'forward' && !flags.capture ? ' has-motion' : ''}${current.kind === 'winter' ? ' is-winter' : ''}`}>
    <ol className="history-eras" aria-label="Etapas de la evolución de la IA">
      {HISTORY_ERAS.map((era, index) => <li key={era} className={index === current.era ? 'is-current' : index < current.era ? 'is-past' : ''} aria-current={index === current.era ? 'step' : undefined}>{era}</li>)}
    </ol>
    <div className="history-detail" key={step}>
      <div className="history-date"><span className={`history-year${current.year.length > 4 ? ' is-range' : ''}`}>{current.year}</span>
        {current.kind === 'chess' || current.kind === 'vision' || current.kind === 'transformer' || current.kind === 'code' ? <HistoryMark kind={current.kind} /> : null}
      </div>
      <div className="history-copy"><h2>{current.title}</h2><p>{current.summary}</p></div>
    </div>
    <div className="history-line" aria-hidden="true">
      <div className="history-line-base" />
      <div className="history-line-progress" style={{ width: `${step / (HISTORY.length - 1) * 100}%` }} />
      <span className="history-light" style={{ left: `${step / (HISTORY.length - 1) * 100}%` }} />
      {HISTORY.map((item, index) => <div key={item.year} className={`history-node${index === step ? ' is-current' : index < step ? ' is-past' : ''}`} style={{ left: `${index / (HISTORY.length - 1) * 100}%` }}><span className="history-node-dot" /><span>{item.year}</span></div>)}
    </div>
  </div>;
}
