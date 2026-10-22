import { type ReactNode } from 'react';
import { LIFE_IMPACTS, useDiagramMotion } from './useDiagramMotion';

export function GamePanel({ className, children }: { className: string; children: ReactNode }) {
  const ref = useDiagramMotion();
  return <div ref={ref} className={`game-visual ${className}`}>{children}</div>;
}

/** An authored schematic, not a recording or a test of an actual game. */
export function LivesDemo({ step }: { step: number }) {
  const ref = useDiagramMotion();
  return <div ref={ref} className={`game-visual game-lives${step >= 2 ? ' is-compact' : ''}`}>
    <div className="game-demo-label">SIMULACIÓN DIDÁCTICA · NO ES EVIDENCIA DE UNA IMPLEMENTACIÓN</div>
    <div className="game-arena">
      <div className="game-life-meter"><span>VIDAS</span><strong className="game-life-value" aria-label="0 vidas">{[3, 2, 1, 0].map((value) => <span key={value} className={value === 0 ? 'is-final' : undefined} aria-hidden="true" data-motion={step === 0 ? 'life-value' : undefined} data-value={value}>{value}</span>)}</strong><div className="game-hearts" aria-hidden="true">{LIFE_IMPACTS.map((impact) => <span key={impact} data-motion={step === 0 ? 'heart' : undefined} data-impact={impact}>♥</span>)}</div></div>
      <svg className="game-character" width="120" height="140" viewBox="0 0 60 70" aria-hidden="true"><path d="M18 4H42V28H50V50H40V66H28V50H20V66H8V32H18Z" fill="currentColor" /><path d="M32 12H38V18H32Z" fill="var(--bg)" /></svg>
      {step === 0 ? LIFE_IMPACTS.map((impact) => <span className="game-damage" key={impact} data-motion="damage" data-delay={impact - 400} aria-hidden="true">◆</span>) : null}
      {step === 1 ? <><span className="game-damage is-blocked" data-motion="damage" aria-hidden="true">◆</span><span className="game-boundary" data-motion="arrive" aria-hidden="true" /><div className="game-blocked-label" data-motion="arrive">Nuevo daño<br /><strong>Se ignora.</strong></div></> : null}
      <div className="game-defeat" data-motion={step === 0 ? 'defeat' : undefined} data-delay={LIFE_IMPACTS[2]}><span>DERROTA</span><strong>Una sola vez.</strong></div>
      <div className="game-ground" aria-hidden="true" />
    </div>
    <div className="game-life-sequence" aria-label="Secuencia: 3, 2, 1, 0 vidas. Daño adicional: 0 vidas."><span>3</span><i>→</i><span>2</span><i>→</i><span>1</span><i>→</i><span className="accent">0</span>{step >= 1 ? <><i>→</i><span className="accent">0</span><small>Sin repetir derrota.</small></> : null}</div>
  </div>;
}

export function OpeningGame({ step }: { step: number }) {
  const ref = useDiagramMotion();
  return <div ref={ref} className="game-visual game-opening" aria-label="Sistema de vidas todavía por definir">
    <div className="game-demo-label">SISTEMA POR DEFINIR</div>
    <div className="game-unknown-lives" data-motion="arrive"><span>♥</span><strong>?</strong></div>
    <div className="game-mini-player" aria-hidden="true"><span /><span /><span /></div>
    <div className="game-opening-rule" data-motion="arrive" aria-hidden="true" />
    <p>{step === 0 ? 'El pedido no define las reglas.' : '¿Qué debería pasar?'}</p>
  </div>;
}

export function ContextInventory() {
  const ref = useDiagramMotion();
  return <div ref={ref} className="game-visual game-context">
    <div className="game-demo-label">VENTANA DE CONTEXTO · CAPACIDAD FINITA</div>
    <div className="game-context-slots">{['Instrucciones', 'Archivos leídos', 'Conversación', 'Resultados'].map((label, index) => <div key={label} className="game-context-piece" data-motion="select" data-delay={index * 160}><strong>{label}</strong></div>)}</div>
    <p>Todos comparten la misma ventana.</p>
    <div className="game-demo-label">CAPACIDAD COMPARTIDA · SIN CUOTAS RESERVADAS NI PROPORCIONES CUANTITATIVAS</div>
  </div>;
}
