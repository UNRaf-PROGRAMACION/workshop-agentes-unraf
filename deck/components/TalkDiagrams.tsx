import { Fragment } from 'react';
import { Arrow, NodeBox } from 'beatdeck';

/** Diagram coordinates are local to the fixed-size talk body. */
export function StateQuestions({ expanded }: { expanded: boolean }) {
  const attack = { x: 0, y: 125, w: 430, h: 140 };
  const stun = { x: 850, y: 125, w: 430, h: 140 };
  return <div className="talk-diagram talk-state-map">
    <div className="talk-label">ESTADOS · TRANSICIONES POR DEFINIR</div>
    <div className="talk-state-context">Idle · Movimiento · Muerte</div>
    <NodeBox rect={attack} on value="Ataque" />
    <Arrow from={attack} to={stun} on tone="ghost" label="¿El daño interrumpe?" ly={-24} />
    <NodeBox rect={stun} on tone="ghost" kind="Stun · aturdimiento" value="¿Transición permitida?" />
    <p className="talk-state-gloss">Idle: reposo. La conexión es una pregunta, no una regla acordada.</p>
    {expanded ? <div className="talk-state-decisions">
      <div><span className="talk-label">PRIORIDADES</span><p>¿Qué input tiene prioridad<br />si llegan dos juntos?</p></div>
      <div><span className="talk-label">INTERRUPCIONES</span><p>¿Qué ocurre al pausar<br />o perder el foco?</p></div>
    </div> : null}
  </div>;
}

const CYCLE = ['Intención', 'Spec', 'Plan', 'Cambio pequeño', 'Verificación', 'Evidencia'];

export function WorkCycle({ step }: { step: number }) {
  const decision = { x: 500, y: 220, w: 640, h: 120 };
  return <div className="talk-diagram talk-work-cycle">
    {CYCLE.map((name, index) => {
      const rect = { x: index * 280, y: 0, w: 240, h: 140 };
      const visible = index < 3 || step >= 1;
      return <Fragment key={name}>
        {index > 0 ? <Arrow from={{ x: (index - 1) * 280, y: 0, w: 240, h: 140 }} to={rect} on={visible} /> : null}
        <NodeBox rect={rect} on={visible} value={name} tone={index === 5 ? 'hot' : 'normal'} />
      </Fragment>;
    })}
    {step >= 2 ? <Arrow from={{ x: 1520, y: 150 }} to={{ x: 1160, y: 280 }} on tone="hot" /> : null}
    <NodeBox rect={decision} on={step >= 2} tone="hot" kind="Decisión humana" value="Aceptar, ajustar o detener." />
    {step >= 2 ? <>
      <Arrow from={{ x: 820, y: 350 }} to={{ x: 820, y: 450 }} on head={false} tone="ghost" />
      <Arrow from={{ x: 820, y: 450 }} to={{ x: 400, y: 450 }} on head={false} tone="ghost" />
      <Arrow from={{ x: 400, y: 450 }} to={{ x: 400, y: 150 }} on tone="ghost" />
      <p className="talk-cycle-return">Si falla la evidencia o aparece información nueva:<br /><span className="accent">volver a la spec o al plan.</span></p>
    </> : null}
  </div>;
}

export function HarnessMap() {
  const agent = { x: 610, y: 140, w: 420, h: 150 };
  const sources = [
    { name: 'AGENTS.md', detail: 'Cómo trabajar en este repositorio.', rect: { x: 0, y: 0, w: 480, h: 150 } },
    { name: 'Skills', detail: 'Procesos para tareas concretas.', rect: { x: 1160, y: 0, w: 480, h: 150 } },
    { name: 'Specs y planes', detail: 'Qué cambio estamos realizando.', rect: { x: 0, y: 280, w: 480, h: 150 } },
    { name: 'Pruebas y comandos', detail: 'Cómo comprobarlo.', rect: { x: 1160, y: 280, w: 480, h: 150 } },
  ];
  return <div className="talk-diagram talk-harness-map">
    {sources.map(({ name, detail, rect }) => <Fragment key={name}>
      <Arrow from={rect} to={agent} on head={false} />
      <NodeBox rect={rect} on kind={name} value={detail} />
    </Fragment>)}
    <NodeBox rect={agent} on tone="hot" kind="Harness" value="Trabajo del agente" />
  </div>;
}

/** Schematic, not a measured trajectory or an additional gameplay rule. */
export function JumpSketch() {
  return <figure className="talk-jump-sketch">
    <svg width="720" height="290" viewBox="0 0 720 290" role="img" aria-label="Esquema de salto: margen después del borde y ascenso hasta el ápice. Sin escala.">
      <path d="M20 230 H220 V270 M560 230 H700" fill="none" stroke="var(--ink-3)" strokeWidth="3" />
      <path d="M220 230 H300" fill="none" stroke="var(--amber)" strokeWidth="5" strokeDasharray="8 8" />
      <path d="M300 230 Q405 -90 560 230" fill="none" stroke="var(--accent)" strokeWidth="4" />
      <circle cx="418" cy="70" r="8" fill="var(--amber)" />
      <path d="M418 88 V230" stroke="var(--hair-strong)" strokeWidth="2" strokeDasharray="6 8" />
    </svg>
    <figcaption>Del borde al salto · del despegue al ápice.<br />Esquema sin escala; valores ilustrativos para probar.</figcaption>
  </figure>;
}
