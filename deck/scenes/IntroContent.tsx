import panoramaImage from '../../docs/Panorama de Inteligencia Artificial.png';
import mapImage from '../../docs/Mapa de Inteligencias Computacionales.png';

const APPLICATIONS = [
  { area: 'Aprendizaje automático', example: 'Agentes que aprenden a jugar.', x: 607, y: 125, target: 100 },
  { area: 'Lenguaje natural · chatbots', example: 'Conversaciones con personajes.', x: 682, y: 457, target: 285 },
  { area: 'Reconocimiento de patrones', example: 'Análisis de comportamientos de jugadores.', x: 714, y: 372, target: 470 },
  { area: 'Gaming controlado por pensamiento', example: 'Interfaces cerebro-computadora · uso experimental.', x: 215, y: 457, target: 535 },
];

export function IntroContent({ layout, step }: { layout: 'ai-definition' | 'ai-panorama' | 'ai-map'; step: number }) {
  if (layout === 'ai-definition') return step === 0 ? <div className="talk-ai-question">
    <div className="talk-big">Cuando decimos <span className="accent">IA…</span><br />¿en qué piensan?</div>
    <p className="muted">Arranquemos por lo que ya conocemos.</p>
  </div> : <div className="talk-ai-definition">
    <p>Un campo de la computación que desarrolla sistemas capaces de realizar tareas como:</p>
    <div className="talk-ai-capabilities">Reconocer patrones.<br />Interpretar lenguaje.<br /><span className="accent">Aprender. Tomar decisiones.</span></div>
  </div>;

  if (layout === 'ai-panorama') return <div className="talk-ai-layout">
    <div className="talk-ai-image">
      <img src={panoramaImage} width={1448} height={1086} alt="Panorama tecnológico de inteligencia artificial: aprendizaje automático, redes neuronales, lenguaje natural, robótica y otras áreas." />
      <svg className="talk-ai-links" viewBox="0 0 900 675" aria-hidden="true">
        {APPLICATIONS.map(({ area, x, y, target }, index) => {
          const endpoint = step >= 4 ? 100 + index * 145 : target;
          return step >= index + 1 ? <g key={area} className={step === index + 1 ? 'is-focus' : ''}>
          <circle cx={x} cy={y} r="39" />
          <path d={index === 3 ? `M ${x} ${y + 39} V 655 H 870 V ${endpoint} H 900` : `M ${x + 39} ${y} H 845 V ${endpoint} H 900`} />
          <circle cx="895" cy={endpoint} r="5" className="talk-ai-dot" />
        </g> : null;
        })}
      </svg>
    </div>
    <aside className="talk-ai-applications">
      <div className="talk-label">DEL PANORAMA AL VIDEOJUEGO</div>
      {step === 0 ? <div className="talk-ai-invitation"><h2>Mucho más<br />que un chat.</h2><p className="muted">¿Dónde aparece en los juegos?</p></div> : null}
      {APPLICATIONS.map(({ area, example }, index) => step >= index + 1 ? <div key={area} className={`talk-ai-application${step === index + 1 ? ' is-focus' : ''}`}>
        <span className="talk-ai-number">0{index + 1}</span>
        <div><h2>{area}</h2><p>{example}</p></div>
      </div> : null)}
    </aside>
  </div>;

  return <div className="talk-ai-layout">
    <div className="talk-ai-image"><img src={mapImage} width={1448} height={1086} alt="Mapa de inteligencias computacionales: aprendizaje de máquina, sistemas expertos, inteligencia computacional, interfaces inteligentes e inteligencia artificial distribuida, dentro de las ciencias de la computación." /></div>
    <aside className="talk-ai-map-copy">
      <div className="talk-label">CIENCIAS DE LA COMPUTACIÓN</div>
      {step === 0 ? <><h2>Muchos enfoques.<br /><span className="accent">No una sola receta.</span></h2><p>Sistemas expertos, aprendizaje automático, redes neuronales, agentes…</p><p className="muted">No son lo mismo ni son categorías aisladas.</p></> : <><h2>Hoy enfocamos<br />una parte<br /><span className="accent">del panorama.</span></h2><p>Agentes que nos ayudan a desarrollar.</p><p className="muted">Pasemos a un pedido concreto para nuestro videojuego.</p></>}
    </aside>
  </div>;
}
