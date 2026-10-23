/** Schematic of the proposed imitation game, not a reconstruction of an experiment. */
export function TuringSketch() {
  return <svg className="history-turing-sketch" viewBox="0 0 1000 320" role="img" aria-label="Juego de imitación: una máquina y una persona, ocultas tras una barrera, conversan por texto con un interlocutor que intenta identificar a la máquina.">
    <defs><marker id="turing-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 Z" fill="currentColor" /></marker></defs>
    <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
      <rect x="200" y="34" width="90" height="58" rx="5" /><path d="M 245 92 V 105 M 220 105 H 270 M 190 114 H 300" />
      <circle cx="755" cy="52" r="18" /><path d="M 725 106 V 92 Q 725 75 755 75 Q 785 75 785 92 V 106 M 711 71 V 118 H 799 V 71" />
      <path d="M 70 145 H 390 M 610 145 H 930" strokeDasharray="8 9" opacity=".45" />
      <path className="history-turing-routes" pathLength="1" d="M 245 120 V 170 L 455 219 M 755 120 V 170 L 515 219" strokeWidth="2" markerEnd="url(#turing-arrow)" />
      <rect x="220" y="126" width="50" height="37" rx="4" fill="var(--bg)" /><path d="M 230 136 H 260 M 230 145 H 253 M 230 154 H 257" strokeWidth="2" />
      <rect x="730" y="126" width="50" height="37" rx="4" fill="var(--bg)" /><path d="M 740 136 H 770 M 740 145 H 763 M 740 154 H 767" strokeWidth="2" />
      <circle cx="485" cy="240" r="19" /><path d="M 452 292 V 280 Q 452 264 485 264 Q 518 264 518 280 V 292 M 439 258 V 302 H 531 V 258" />
      <path className="history-turing-question" d="M 556 219 H 889 Q 901 219 901 231 V 262 Q 901 274 889 274 H 572 L 548 287 L 556 265 Z" strokeWidth="2" />
    </g>
    <g className="history-turing-packet history-turing-packet-left" fill="var(--bg)" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="230" y="135" width="30" height="22" rx="3" /><path d="M 236 142 H 254 M 236 150 H 250" />
    </g>
    <g className="history-turing-packet history-turing-packet-right" fill="var(--bg)" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="740" y="135" width="30" height="22" rx="3" /><path d="M 746 142 H 764 M 746 150 H 760" />
    </g>
    <g fill="currentColor" textAnchor="middle">
      <text x="245" y="22">MÁQUINA</text><text x="755" y="22">PERSONA</text>
      <text x="500" y="153" className="history-turing-barrier">SOLO TEXTO</text>
      <text className="history-turing-question" x="727" y="254">¿Quién es la máquina?</text>
      <text x="485" y="319" className="history-turing-observer">INTERLOCUTOR</text>
    </g>
  </svg>;
}
