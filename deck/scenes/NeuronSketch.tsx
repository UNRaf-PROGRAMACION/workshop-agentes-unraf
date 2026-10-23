/** Simplified threshold-neuron concept, not the full 1943 model. */
export function NeuronSketch() {
  return <svg className="history-neuron-sketch" viewBox="0 0 1000 300" role="img" aria-label="Neurona artificial simplificada: recibe varias señales, evalúa si alcanzan un umbral y produce una salida binaria, cero o uno.">
    <defs><marker id="neuron-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" fill="currentColor" /></marker></defs>
    <g fill="currentColor" textAnchor="middle" className="history-neuron-labels">
      <text x="130" y="30">SEÑALES</text><text x="475" y="30">NEURONA ARTIFICIAL</text><text x="845" y="30">SALIDA</text>
    </g>
    <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
      <path className="history-neuron-input" pathLength="1" d="M 153 83 H 230 L 396 125 M 153 155 H 392" markerEnd="url(#neuron-arrow)" />
      <path d="M 153 227 H 230 L 396 185" markerEnd="url(#neuron-arrow)" opacity=".3" />
      <circle cx="130" cy="83" r="22" fill="currentColor" fillOpacity=".2" /><circle cx="130" cy="155" r="22" fill="currentColor" fillOpacity=".2" />
      <circle cx="130" cy="227" r="22" opacity=".3" />
      <circle className="history-neuron-threshold" cx="475" cy="155" r="80" fill="currentColor" fillOpacity=".06" />
      <path className="history-neuron-axon" pathLength="1" d="M 558 155 H 752" markerEnd="url(#neuron-arrow)" />
      <rect x="770" y="111" width="150" height="88" rx="8" />
    </g>
    <g fill="currentColor" textAnchor="middle">
      <text x="475" y="147" className="history-neuron-question">¿Supera</text><text x="475" y="182" className="history-neuron-question">el umbral?</text>
      <text x="845" y="171" className="history-neuron-output">0 / 1</text>
      <text x="845" y="237" className="history-neuron-labels">NO / SÍ</text>
    </g>
  </svg>;
}
