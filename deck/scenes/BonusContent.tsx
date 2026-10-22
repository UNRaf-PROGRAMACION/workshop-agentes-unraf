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
      <div className="talk-label">PREGUNTAS COMUNES · CRITERIOS · TIPS</div>
      <div className="talk-bonus-tips">{TIPS.slice(0, step + 1).map(([question, answer]) =>
        <div className="talk-row" key={question}><span>{question}</span><span className="muted">{answer}</span></div>,
      )}</div>
      {step >= 2 ? <p className="accent talk-bonus-tip-result">Decisiones claras → el agente puede implementar sin adivinar.</p> : null}
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
    case 'bonus-acceptance': return <div className="talk-acceptance-layout">
      <ol className="talk-acceptance-list">{ACCEPTANCE.slice(0, step + 1).map(([phase, explanation]) =>
        <li key={phase}><strong>{phase}</strong><span>{explanation}</span></li>,
      )}</ol>
      <img className="talk-grief-image" src={griefImage} width={896} height={1200} alt="Infografía de Psicopedia: etapas del proceso de pérdida según E. Kübler-Ross; negación, ira, negociación, depresión y aceptación." />
    </div>;
  }
}
