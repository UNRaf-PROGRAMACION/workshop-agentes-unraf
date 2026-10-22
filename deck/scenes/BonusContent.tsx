import griefImage from '../assets/duelo-kubler-ross.jpg';

export type BonusLayout = 'bonus-tips' | 'bonus-ego' | 'bonus-acceptance';

const TIPS = [
  ['¿Dónde guardo el diseño?', 'En un GDD vivo. Recomendamos Markdown o un formato editable.'],
  ['¿Quién lo actualiza?', 'Pedile al agente que registre las decisiones a medida que se aclaran las specs.'],
  ['¿Qué assets debe usar?', 'Incluí un anexo en el GDD: referencias, archivos, rutas y para qué usar cada asset.'],
];

const ACCEPTANCE = [
  ['Negación', '«Esto no puede hacer mi trabajo».'],
  ['Ira', '«Se equivoca; yo lo haría mejor».'],
  ['Negociación', '«Bueno, que haga solamente lo repetitivo».'],
  ['Depresión / desánimo', '«Entonces, ¿dónde queda mi valor?».'],
  ['Aceptación', '«Mi criterio sigue siendo clave; puedo construir con estas herramientas».'],
];

export function BonusContent({ layout, step }: { layout: BonusLayout; step: number }) {
  switch (layout) {
    case 'bonus-tips': return <>
      <div className="talk-tips-layout"><div className="talk-document talk-gdd-example">
        <div className="talk-label">GDD VIVO · ESTRUCTURA ILUSTRATIVA</div>
        <h2>Diseño del juego</h2>
        <div className="talk-gdd-section">Visión y reglas<span>Markdown o un formato editable.</span></div>
        {step >= 1 ? <div className="talk-gdd-section">Decisiones acordadas<span>Actualizar al aclarar las specs.</span></div> : null}
        {step >= 2 ? <div className="talk-gdd-section">Anexo de assets<span>Referencias · archivos · rutas · usos.</span></div> : null}
      </div><div className="talk-tip-explanation" key={step}><div className="talk-label">PREGUNTAS COMUNES · CRITERIOS · TIPS</div><h2>{TIPS[step][0]}</h2><p>{TIPS[step][1]}</p></div></div>
      {step >= 2 ? <p className="talk-takeaway">Decisiones claras → <span className="accent">implementar sin adivinar.</span></p> : null}
    </>;
    case 'bonus-ego': return step === 0 ? <>
      <h2 className="accent">¿Saben lo que es?</h2>
      <p className="talk-ego-definition">El ego del programador es creer que su valor está en cuánto código sabe escribir, en lugar de cuánto es capaz de <span className="accent">resolver, aprender y construir.</span></p>
    </> : step === 1 ? <>
      <div className="talk-label">CUANDO HABLAMOS DE UN LLM…</div>
      <ul className="talk-ego-objections">
        <li>«Se equivocan».</li>
        <li>«Generan código mediocre».</li>
        <li>«Nosotros lo haríamos mejor».</li>
      </ul>
    </> : <>
      <div className="talk-big talk-ego-value">NUESTRO VALOR NO ESTÁ<br />EN ESCRIBIR CÓDIGO.</div>
      <p className="talk-ego-responsibility">Está en saber <span className="accent">qué construir, cuándo, por qué<br />y con qué nivel de calidad.</span></p>
      <p>En cuestionar, revisar, decidir y asumir responsabilidad.</p>
    </>;
    case 'bonus-acceptance': return <>
      <div className="talk-acceptance-phases" aria-label="Reacciones ilustrativas, sin orden obligatorio">{ACCEPTANCE.map(([phase], index) => <span className={index === step ? 'is-current' : undefined} key={phase} aria-current={index === step ? 'step' : undefined}>{phase}</span>)}</div>
      <div className="talk-acceptance-focus" key={step}><div className="talk-label">{ACCEPTANCE[step][0]}</div><div className="talk-big">{ACCEPTANCE[step][1]}</div></div>
      <div className="talk-metaphor-note"><p>Es una metáfora: <span className="accent">no son etapas obligatorias ni lineales.</span></p><a className="talk-reference" href={griefImage} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()}>Ver infografía original · referencia complementaria ↗</a></div>
    </>;
  }
}
