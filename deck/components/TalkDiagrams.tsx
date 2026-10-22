import { Fragment } from 'react';
import { Arrow, NodeBox } from 'beatdeck';
import { useDiagramMotion } from './useDiagramMotion';

/** Diagram coordinates are local to the fixed-size talk body. */
export function StateQuestions({ expanded }: { expanded: boolean }) {
  const motionRef = useDiagramMotion();
  const attack = { x: 0, y: 125, w: 430, h: 140 };
  const stun = { x: 850, y: 125, w: 430, h: 140 };
  return <div ref={motionRef} className={`talk-diagram talk-state-map${expanded ? ' is-expanded' : ''}`}>
    <div className="talk-label">ESTADOS · TRANSICIONES POR DEFINIR</div>
    <div className="talk-state-context">Idle · Movimiento · Muerte</div>
    <NodeBox rect={attack} on value="Ataque" />
    <Arrow from={attack} to={stun} on tone="ghost" label="¿El daño interrumpe?" ly={-24} />
    <NodeBox rect={stun} on tone="ghost" kind="Stun · aturdimiento" value="¿Transición permitida?" />
    <span className="game-state-token" data-motion="state" aria-hidden="true" />
    <span className="game-state-gate" aria-hidden="true">?</span>
    <p className="talk-state-gloss">Idle: reposo. La conexión es una pregunta, no una regla acordada.</p>
    {expanded ? <div className="talk-state-decisions">
      <div><span className="talk-label">PRIORIDADES</span><p>¿Qué input tiene prioridad<br />si llegan dos juntos?</p></div>
      <div><span className="talk-label">INTERRUPCIONES</span><p>¿Qué ocurre al pausar<br />o perder el foco?</p></div>
    </div> : null}
  </div>;
}

const CYCLE = ['Intención', 'Spec', 'Plan', 'Cambio pequeño', 'Verificación', 'Evidencia'];

export function WorkCycle({ step }: { step: number }) {
  const motionRef = useDiagramMotion();
  const decision = { x: 500, y: 380, w: 640, h: 140 };
  const positions = [
    { x: 0, y: 0, w: 480, h: 130 }, { x: 540, y: 0, w: 480, h: 130 },
    { x: 1080, y: 0, w: 480, h: 130 }, { x: 1080, y: 190, w: 480, h: 130 },
    { x: 540, y: 190, w: 480, h: 130 }, { x: 0, y: 190, w: 480, h: 130 },
  ];
  return <div ref={motionRef} className="talk-diagram talk-work-cycle">
    {CYCLE.map((name, index) => {
      const rect = positions[index];
      const visible = index < 3 || step >= 1;
      return <Fragment key={name}>
        {index > 0 ? <Arrow from={positions[index - 1]} to={rect} on={visible} delay={index * 180} /> : null}
        <NodeBox rect={rect} on={visible} kind={`0${index + 1}`} value={name} tone={index === (step === 0 ? 2 : 5) ? 'hot' : 'normal'} delay={index * 180} />
        {visible ? <span className="game-cycle-station" style={{ left: rect.x + rect.w - 30, top: rect.y + 16 }} data-motion="arrive" data-delay={step === 0 ? index * 220 : Math.max(0, index - 3) * 220} aria-hidden="true">◆</span> : null}
      </Fragment>;
    })}
    {step >= 2 ? <>
      <Arrow from={{ x: 240, y: 320 }} to={{ x: 240, y: 450 }} on head={false} tone="hot" />
      <Arrow from={{ x: 240, y: 450 }} to={{ x: 500, y: 450 }} on tone="hot" />
    </> : null}
    <NodeBox rect={decision} on={step >= 2} tone="hot" kind="Decisión humana" value="Aceptar, ajustar o detener." />
    {step >= 2 ? <>
      <Arrow from={{ x: 1140, y: 450 }} to={{ x: 1620, y: 450 }} on head={false} tone="ghost" />
      <Arrow from={{ x: 1620, y: 450 }} to={{ x: 1620, y: 55 }} on head={false} tone="ghost" />
      <Arrow from={{ x: 1620, y: 55 }} to={{ x: 1560, y: 55 }} on tone="ghost" />
      <Arrow from={{ x: 1620, y: 55 }} to={{ x: 1620, y: -28 }} on head={false} tone="ghost" />
      <Arrow from={{ x: 1620, y: -28 }} to={{ x: 780, y: -28 }} on head={false} tone="ghost" />
      <Arrow from={{ x: 780, y: -28 }} to={{ x: 780, y: 0 }} on tone="ghost" />
      <p className="talk-cycle-return">Si falla la evidencia o aparece información nueva:<br /><span className="accent">volver a la spec o al plan.</span></p>
    </> : null}
  </div>;
}

export function HarnessMap() {
  const motionRef = useDiagramMotion();
  const agent = { x: 610, y: 140, w: 420, h: 150 };
  const sources = [
    { name: 'AGENTS.md', detail: 'Cómo trabajar en este repositorio.', rect: { x: 0, y: 0, w: 480, h: 150 } },
    { name: 'Skills', detail: 'Procesos para tareas concretas.', rect: { x: 1160, y: 0, w: 480, h: 150 } },
    { name: 'Specs y planes', detail: 'Qué cambio estamos realizando.', rect: { x: 0, y: 280, w: 480, h: 150 } },
    { name: 'Pruebas y comandos', detail: 'Cómo comprobarlo.', rect: { x: 1160, y: 280, w: 480, h: 150 } },
  ];
  return <div ref={motionRef} className="talk-diagram talk-harness-map">
    {sources.map(({ name, detail, rect }) => <Fragment key={name}>
      <Arrow from={name === 'Pruebas y comandos' ? agent : rect} to={name === 'Pruebas y comandos' ? rect : agent} on tone={name === 'Pruebas y comandos' ? 'hot' : 'ghost'} />
      <NodeBox rect={rect} on kind={name} value={detail} />
    </Fragment>)}
    <NodeBox rect={agent} on tone="hot" kind="Agente" value="Trabajo sobre la tarea" />
    <div className="game-harness-label">HARNESS · EL ENTORNO COMPLETO</div>
    <div className="game-harness-caption" data-motion="arrive" data-delay="800"><span>Orientar el trabajo.</span><span className="accent">Comprobar el resultado.</span></div>
  </div>;
}

/** Schematic, not a measured trajectory or an additional gameplay rule. */
export function JumpSketch() {
  const motionRef = useDiagramMotion();
  return <div ref={motionRef} className="game-visual game-jump"><figure className="talk-jump-sketch">
    <svg width="720" height="290" viewBox="0 0 720 290" role="img" aria-label="Esquema de salto: margen después del borde y ascenso hasta el ápice. Sin escala.">
      <path d="M20 230 H220 V270 M560 230 H700" fill="none" stroke="var(--ink-3)" strokeWidth="3" />
      <path d="M220 230 H300" fill="none" stroke="var(--amber)" strokeWidth="5" strokeDasharray="8 8" />
      <path d="M300 230 Q405 -90 560 230" fill="none" stroke="var(--accent)" strokeWidth="4" pathLength="1" strokeDasharray="1" strokeDashoffset="0" data-motion="draw" />
      <circle cx="418" cy="70" r="8" fill="var(--accent)" />
      <path d="M418 88 V230" stroke="var(--hair-strong)" strokeWidth="2" strokeDasharray="6 8" />
      <text x="50" y="180" fill="var(--amber)" fontSize="25" fontFamily="var(--font-sans)">Coyote time · 0,1 s</text>
      <text x="450" y="50" fill="var(--accent)" fontSize="25" fontFamily="var(--font-sans)">Ápice · 0,35 s</text>
      <g className="game-jump-player" data-motion="jump" aria-hidden="true"><path d="M-10 -28H10V-10H16V0H-16V-10H-10Z" fill="var(--ink)" /><path d="M2 -22H7V-17H2Z" fill="var(--bg)" /></g>
    </svg>
    <figcaption>Animación ralentizada, sin escala espacial ni temporal.<br />Valores ilustrativos: comprobarlos y evaluar jugando.</figcaption>
  </figure></div>;
}
