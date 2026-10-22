import { Fragment, type ReactNode } from 'react';
import { Scene, useScene } from 'beatdeck';
import agentImage from '../../docs/media/2.2.png';
import unrafLogo from '../../docs/media/logounraf.png';
import { config } from '../deck.config';
import opencodeLogo from '../assets/opencode.svg';
import claudeCodeLogo from '../assets/claude-code.svg';
import codexLogo from '../assets/codex.svg';
import { locateSlide, SECTION_TITLES, type Layout } from '../talk';

function List({ items }: { items: string[] }) {
  return <ul className="talk-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function Flow({ items }: { items: string[] }) {
  return <div className="talk-flow">{items.map((item, i) => <Fragment key={item}>
    {i > 0 ? <span className="talk-flow-arrow" aria-hidden="true">→</span> : null}
    <div className="talk-flow-node">{item}</div>
  </Fragment>)}</div>;
}

function Columns({ left, right }: { left: ReactNode; right: ReactNode }) {
  return <div className="talk-columns"><div className="talk-column">{left}</div><div className="talk-column">{right}</div></div>;
}

function Rows({ items }: { items: [string, string][] }) {
  return <div className="talk-rows">{items.map(([label, value]) => <div className="talk-row" key={label}>
    <span>{label}</span><span className="muted">{value}</span>
  </div>)}</div>;
}

function Content({ layout, step, id }: { layout: Layout; step: number; id: string }) {
  switch (layout) {
    case 'opening': return <>
      <div data-exact className="talk-big" style={{ fontSize: 130 }}>Agregá un sistema <br />de vidas.</div>
      {step >= 1 ? <div style={{ marginTop: 65 }}><Flow items={['¿Cuántas vidas?', '¿Qué cuenta como daño?', '¿Qué pasa con cero?']} /></div> : null}
    </>;
    case 'assistant': return <Columns left={<>
      <h2>Un asistente responde.</h2><p>Un chat donde podés hacer preguntas y recibir respuestas.</p>
      <List items={['Explicame esta función.', '¿Qué significa este error?', 'Dame un ejemplo de movimiento.']} />
    </>} right={<div className="talk-photo">TODO · Foto del asistente</div>} />;
    case 'agent': return <div className="talk-agent-layout">
      <div>{[['Modelo', 'LLM · genera y propone'], ['Instrucciones', 'prompts · orientan y limitan'], ['Herramientas', 'tools · leen, editan, ejecutan']].map(([name, detail], i) => <Fragment key={name}>
        {i > 0 ? <div className="talk-plus">+</div> : null}<div className="talk-formula">{name}<small>{detail}</small></div>
      </Fragment>)}</div>
      <img className="talk-agent-image" src={agentImage} width={1913} height={1040} alt="Captura de OpenCode: conversación, contexto y herramientas conectadas." />
    </div>;
    case 'compare': return <Columns left={<>
      <div className="talk-label">ASISTENTE</div><h2>Preguntás.<br />Recibís respuestas.</h2>
      <List items={id === '2.3' ? ['Le compartís el contexto del proyecto.'] : ['Le compartís información.', 'Aplicás sus propuestas.']} />
    </>} right={<>
      <div className="talk-label">AGENTE</div>
      {id === '2.3' ? <div className="talk-big" style={{ fontSize: 82 }}>¿Qué cambia?</div> : <>
        <h2>Conversás.<br />Puede actuar.</h2><List items={['Busca y lee archivos.', 'Crea, edita, mueve o elimina archivos.']} />
      </>}
    </>} />;
    case 'repository': return <>
      <p style={{ fontSize: 43 }}>La información disponible para trabajar sobre una tarea.</p>
      <div className="talk-clues" style={{ marginTop: 55 }}><div className="talk-repo">/ nuestro-videojuego<br /><span className="muted">codebase / repositorio</span></div>
        <div className="talk-chips">{['Documentación', 'Código', 'Escenas', 'Reglas', 'Pruebas'].map((x) => <span key={x}>{x}</span>)}</div>
      </div>
    </>;
    case 'equation': return <>
      <div className="talk-equation">ASISTENTE = CHAT</div>
      {step >= 1 ? <div className="talk-equation accent">AGENTE = CHAT,<br />PERO QUE ACCIONA</div> : null}
    </>;
    case 'prompt': return <Columns left={<>
      <div className="talk-label">LO QUE PEDÍS</div><h2>Agregá enemigos<br />que persigan<br />al jugador.</h2>
    </>} right={step >= 1 ? <><div className="talk-label">LO QUE NECESITA SABER</div><List items={[
      '¿Cómo se mueve el jugador?', '¿Qué sistema de enemigos existe?', '¿Qué reglas define el diseño?', '¿Qué archivos puede modificar?', '¿Cómo comprobamos que funciona?',
    ]} /></> : <p className="muted">El pedido expresa una intención.<br />Todavía faltan decisiones.</p>} />;
    case 'clues': return <Rows items={[
      ['GDD y documentación', 'Qué queremos construir.'], ['Código y escenas', 'Cómo funciona hoy.'],
      ['Reglas del proyecto', 'Cómo debemos trabajar.'], ['Pruebas', 'Cómo comprobamos los cambios.'], ['Decisiones previas', 'Qué acordamos y por qué.'],
    ]} />;
    case 'window': return <>
      <h2>Ventana de contexto</h2><p>Cantidad limitada de información que el modelo<br />puede considerar durante una interacción.</p>
      <div className="talk-window"><div className="talk-label">INFORMACIÓN DISPONIBLE</div><div className="talk-window-items">
        {['Instrucciones', 'Archivos leídos', 'Conversación', 'Resultados'].map((x) => <span key={x}>{x}</span>)}
      </div></div>
      {step >= 1 ? <p style={{ marginTop: 35 }}><span className="accent">Tokens</span> → capacidad de contexto, latencia y costo.</p> : null}
    </>;
    case 'flow': return <>
      <div style={{ marginTop: 65 }}><Flow items={id === '4.1' ? ['Prompt', 'Generación', 'Prueba', 'Otro prompt'] : ['Playtest', 'Hallazgo', 'Spec', 'Código', 'Verificación']} /></div>
      <div style={{ marginTop: 100 }} className="talk-big">{id === '4.1' ? 'Hacé que funcione.' : 'Iterar con intención.'}</div>
    </>;
    case 'mind': return step === 0 ? <div className="talk-big" style={{ fontSize: 84 }}>Si queremos controlar<br />mejor el cambio,<br /><span className="accent">necesitamos definirlo.</span></div> : <>
      <div className="talk-big" style={{ fontSize: 145 }}>LA IA NO LEE<br />TU MENTE.</div>
    </>;
    case 'explore': return <Columns left={<><div className="talk-label">PARA EXPLORAR</div><List items={[
      'Un prototipo de una tarde.', 'Explorar una mecánica.', 'Aprender con ejemplos.', 'Probar una idea descartable.',
    ]} /></>} right={step >= 1 ? <><div className="talk-label">CUANDO EL PROYECTO CRECE</div><List items={[
      'Requisitos contradictorios.', 'Decisiones fuera del contexto.', 'Cambios más difíciles de revisar.',
    ]} /></> : <h2>Probar rápido.<br />Aprender.<br />Descartar.</h2>} />;
    case 'broken': return step === 0 ? <List items={['El personaje se mueve raro.', 'El nivel pierde consistencia.', 'Los enemigos no hacen lo esperado.']} /> : <>
      <div className="talk-big" style={{ fontSize: 98 }}>PEDÍS UN ARREGLO.<br /><span className="accent">ARREGLA UNA COSA<br />Y ROMPE OTRA.</span></div>
    </>;
    case 'fixes': return <div className="talk-stack">
      <div className="talk-fix" style={{ width: 320 }}>FIX</div>
      {step >= 1 ? <div className="talk-fix" style={{ width: 590 }}>OTRO FIX</div> : null}
      {step >= 2 ? <><div className="talk-fix" style={{ width: 820 }}>OTRO FIX MÁS</div><div className="talk-fix base">¿QUÉ QUERÍAMOS HACER?</div></> : null}
    </div>;
    case 'sdd': return <>
      <div style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: 60 }}><div className="talk-big accent" style={{ fontSize: 155 }}>SDD</div><div>
        <h2>Spec-Driven Development</h2><p className="muted">Desarrollo guiado por especificaciones.</p></div></div>
      <p style={{ fontSize: 39, marginTop: 45 }}>Definir el cambio esperado antes de implementarlo<br />y comprobar el resultado contra esa definición.</p>
      {step >= 1 ? <div style={{ marginTop: 55 }}><Flow items={['Intención', 'Spec', 'Plan', 'Código', 'Evidencia']} /></div> : null}
    </>;
    case 'spec': return <Rows items={[
      ['Objetivo', 'Qué problema resuelve.'], ['Alcance', 'Qué cambia y qué queda afuera.'], ['Reglas y restricciones', 'Qué debe cumplirse.'],
      ['Criterios de aceptación', 'Qué esperamos observar.'], ['Evidencia', 'Cómo vamos a comprobarlo.'],
    ]} />;
    case 'life-compare': return <div className="talk-vs-layout">
      <div><div className="talk-label">ANTES · VIBE CODING</div><p className="talk-vague">Agregá un sistema de vidas y que el jugador pierda cuando se quede sin vidas.</p>
        {step >= 1 ? <div style={{ marginTop: 35 }}>{['¿Cuántas vidas?', '¿Cuánto daño?', '¿Puede quedar en negativo?', '¿Qué pasa después de perder?'].map((x) => <p className="talk-question" key={x}>{x}</p>)}</div> : null}
      </div>
      <div className="talk-vs">VS</div>
      <div><div className="talk-label">DESPUÉS · AGENTE CON SDD</div>{step >= 2 ? <div className="talk-document">
        <p><strong>Feature: vidas y derrota</strong></p>
        {['Inicio: 3 vidas.', 'Cada daño válido resta 1.', 'Las vidas nunca bajan de 0.', 'Con 0, activar derrota una sola vez.', 'Tras la derrota, ignorar nuevo daño.', 'Fuera: animaciones y balance.', 'Verificar: 3 → 2 → 1 → 0 → 0.', 'Una derrota + comprobación visual.'].map((x) => <div className="talk-spec-line" key={x}>{x}</div>)}
      </div> : <div style={{ paddingTop: 120 }} className="muted"><p>La misma intención.</p><p>¿Qué falta definir?</p></div>}</div>
    </div>;
    case 'lives': return <>
      <div className="talk-lives">{['3 ♥', '2 ♥', '1 ♥', '0 ♥', 'DERROTA'].map((x, i) => <Fragment key={x}>{i ? <span className="arrow">→</span> : null}<span className={i === 4 ? 'accent' : ''}>{x}</span></Fragment>)}</div>
      {step >= 1 ? <p style={{ marginBottom: 40 }}>Nuevo daño → <span className="accent">0 ♥ · Sin repetir derrota</span></p> : null}
      {step >= 2 ? <Rows items={[
        ['Vidas no negativas', 'Prueba de lógica.'], ['Una única derrota', 'Prueba de eventos o integración.'], ['Señal de derrota visible', 'Comprobación visual.'],
      ]} /> : null}
    </>;
    case 'parameters': return <>
      <div className="talk-big" style={{ fontSize: 92 }}>NO MÁS VALORES<br />SIN EXPLICACIÓN.</div>
      <div className="talk-chips" style={{ marginTop: 70 }}>{['Velocidad', 'Gravedad', 'Tiempos', 'Tolerancias', 'Cantidad de enemigos'].map((x) => <span key={x}>{x}</span>)}</div>
      {step >= 1 ? <p className="accent">Parámetros acordados, configurables y localizables.</p> : null}
    </>;
    case 'feel': return <>
      <h2>Que el salto se sienta bien.</h2>
      {step >= 1 ? <><div className="talk-label">HIPÓTESIS ILUSTRATIVA PARA PROBAR</div><div className="talk-numbers">
        <div className="talk-number">0,1 s<small>Coyote time</small></div><div className="talk-number">0,35 s<small>Tiempo hasta el ápice</small></div>
      </div></> : <p className="muted">Una intención subjetiva.<br />¿Cómo la convertimos en algo comprobable?</p>}
      {step >= 2 ? <p className="accent" style={{ fontSize: 38 }}>Playtest → ¿produce la sensación buscada?</p> : null}
    </>;
    case 'states': return <>
      <div style={{ fontSize: 48, lineHeight: 1.5 }}><div>JUGANDO <span className="accent">↔</span> PAUSA</div><div>JUGANDO <span className="accent">→</span> DERROTA</div></div>
      {step >= 1 ? <div style={{ marginTop: 40 }}><List items={[
        '¿Qué pasa al perder el foco?', '¿Qué pasa con dos entradas simultáneas?', '¿Se recibe daño durante la pausa?', '¿Qué ocurre después de perder?',
      ]} /></div> : null}
    </>;
    case 'roles': return <Rows items={[
      ['GDD · Visión del juego', 'Fantasía, pilares, bucle, mecánicas y tono.'],
      ['SPEC · Una pieza implementable', 'Objetivo, reglas, alcance y aceptación.'],
      ['PLAN · La ruta técnica', 'Cómo realizar el cambio en este repositorio.'],
    ]} />;
    case 'platform': return <>
      <h2>¿Dónde tiene que funcionar?</h2><div className="talk-chips">{['Móvil', 'Escritorio', 'Táctil', 'Orientación', 'Rendimiento', 'Tamaño de build'].map((x) => <span key={x}>{x}</span>)}</div>
      {step >= 1 ? <div style={{ marginTop: 85 }}><Flow items={['Reglas estables del proyecto', 'Specs de cada cambio', 'Verificaciones']} /></div> : null}
    </>;
    case 'harness': return <>
      <div className="talk-label">HARNESS</div><p style={{ fontSize: 38 }}>Reglas, instrucciones, herramientas y verificaciones<br />que encuadran el trabajo del agente.</p>
      {step >= 1 ? <div style={{ marginTop: 40 }}><Rows items={[
        ['AGENTS.md', 'Cómo trabajar en este repositorio.'], ['Skills', 'Procesos para tareas concretas.'], ['Specs y planes', 'Qué cambio estamos realizando.'], ['Pruebas y comandos', 'Cómo comprobarlo.'],
      ]} /></div> : null}
    </>;
    case 'evidence': return <>
      <div className="talk-big" style={{ fontSize: 94 }}>{step === 0 ? 'YA ESTÁ ARREGLADO.' : '¿QUÉ LO DEMUESTRA?'}</div>
      {step >= 1 ? <div className="talk-chips" style={{ marginTop: 60 }}>{['Diff', 'Pruebas', 'Build', 'Ejecución', 'Capturas', 'Playtest'].map((x) => <span key={x}>{x}</span>)}</div> : null}
      {step >= 2 ? <div style={{ marginTop: 55 }}><p className="accent">Prueba manual reproducible</p><p>Pasos · Esperado · Observado · Limitaciones</p></div> : null}
    </>;
    case 'safety': return <>
      <h2>Más autonomía → más límites y observabilidad.</h2><List items={[
        'No compartir secretos ni datos personales.', 'Revisar herramientas, scripts y skills externas.',
        'Detenerse ante ambigüedades o acciones destructivas.', 'Pedir aprobación antes de publicar o salir del alcance.',
      ]} />
    </>;
    case 'cycle': return <>
      <div className="talk-cycle-row"><Flow items={['Intención', 'Spec', 'Plan']} /></div>
      {step >= 1 ? <div className="talk-cycle-row"><Flow items={['Cambio pequeño', 'Verificación', 'Evidencia']} /></div> : null}
      {step >= 2 ? <div><h2 className="accent">DECISIÓN HUMANA</h2><p>Aceptar, ajustar o detener.</p></div> : null}
    </>;
    case 'closing': return <div className="talk-closing-layout"><div>{step === 0 ? <>
      <div className="talk-big" style={{ fontSize: 86 }}>CONTEXTO<br />LÍMITES<br />EVIDENCIA<br /><span className="accent">DECISIÓN HUMANA</span></div>
    </> : <>
      <p className="muted">No solamente: ¿la IA escribió código?</p><div className="talk-big" style={{ fontSize: 82 }}>¿Podemos explicar<br />qué cambió y con qué<br /><span className="accent">evidencia lo aceptamos?</span></div>
    </>}</div><aside className="talk-tools" aria-label="Herramientas de programación con IA">
      <div className="talk-tool talk-tool-featured"><img className="talk-tool-monochrome" src={opencodeLogo} width={88} height={88} alt="" /><span>OpenCode</span></div>
      <div className="talk-tool"><img src={claudeCodeLogo} width={64} height={64} alt="" /><span>Claude Code</span></div>
      <div className="talk-tool"><img src={codexLogo} width={64} height={64} alt="" /><span>Codex</span></div>
      <p className="talk-tools-more">y muchos más…</p>
    </aside></div>;
  }
}

function Foot({ layout, step, id }: { layout: Layout; step: number; id: string }): ReactNode {
  if (layout === 'opening' && step >= 2) return 'Pedir código no es lo mismo que definir un cambio.';
  if (layout === 'agent') return 'Agente de desarrollo ≠ NPC o IA de gameplay. Las acciones dependen de sus permisos.';
  if (layout === 'repository' && step >= 1) return 'Tener acceso a la carpeta no significa haber leído todo.';
  if (layout === 'compare' && id === '2.5' && step >= 1) return 'Puede actuar según sus herramientas y permisos. Poder hacerlo no significa estar autorizado.';
  if (layout === 'clues' && step >= 1) return 'Más contexto no siempre es mejor contexto. Excluir secretos e información irrelevante.';
  if (layout === 'window' && step >= 1) return 'Conservar decisiones en archivos y trabajar con tareas pequeñas, no depender de un chat interminable.';
  if (layout === 'mind' && step >= 1) return 'Lo que no definís queda abierto a interpretación.';
  if (layout === 'explore' && step >= 1) return 'Son riesgos, no resultados inevitables. La revisión y el alcance importan.';
  if (layout === 'fixes' && step >= 2) return 'Más prompts no reemplazan una definición compartida.';
  if (layout === 'sdd') return 'No reemplaza diseño, pruebas, revisión ni seguridad. Ayuda a conectarlos.';
  if (layout === 'spec') return step >= 1 ? 'Pequeña. Concreta. Revisable. Supuestos y preguntas abiertas: visibles, no escondidos.' : 'Un contrato revisable para un cambio pequeño.';
  if (layout === 'life-compare') return 'Valores ilustrativos para este ejemplo; deben acordarse para el juego real.';
  if (layout === 'lives' && step >= 2) return 'Cumplir la regla ≠ garantizar una buena experiencia. Balance y claridad requieren playtest.';
  if (layout === 'parameters' && step >= 1) return 'Si un valor importa para el diseño, hagámoslo explícito y localizable.';
  if (layout === 'feel' && step >= 2) return 'Los parámetros se verifican; la experiencia se evalúa jugando.';
  if (layout === 'states' && step >= 1) return 'Definir casos borde ayuda a prevenir errores. No elimina todos los bugs.';
  if (layout === 'flow' && id === '7.4' && step >= 1) return 'Registrar qué cambia y por qué. La spec acompaña la iteración, no congela el diseño.';
  if (layout === 'roles' && step >= 1) return 'Dos sombreros: primero decidís como diseñador; después planificás la implementación.';
  if (layout === 'platform' && step >= 1) return 'Escribir restricciones no garantiza su cumplimiento: también hay que verificarlas.';
  if (layout === 'harness') return 'No acumular archivos: resolver ambigüedades reales y facilitar la verificación.';
  if (layout === 'evidence' && step >= 1) return 'Revisar el diff y la evidencia antes de aceptar el cambio.';
  if (layout === 'safety' && step >= 1) return 'Uso académico: comprender, explicar y declarar la asistencia cuando corresponda.';
  if (layout === 'cycle' && step >= 2) return 'Si falla la evidencia o aparece información nueva, volver a la spec o al plan.';
  if (layout === 'closing') return step === 0 ? 'OpenCode: la herramienta del workshop, no el método.' : 'Próximo paso: aplicar este ciclo a un proyecto existente.';
  return null;
}

function TalkSceneBody({ index }: { index: number }) {
  const { here, b } = useScene();
  if (index === 0 && b <= 0) return null;
  if (index === 0 && b === 1) return <div className="talk-page talk-cover" style={{ visibility: here ? 'visible' : 'hidden' }}>
    <h1>Workshop:<br /><span>Programación Agéntica</span></h1>
    <p>{config.author}</p>
    <img src={unrafLogo} width={1200} height={188} alt="UNRaf · Licenciatura en Producción de Videojuegos y Entretenimiento Digital" />
  </div>;
  const { slide, step } = locateSlide(index, Math.max(0, b - (index === 0 ? 2 : 0)));
  // Every scene layer remains mounted. Each slide is a pure function of scene + beat.
  return <div className="talk-page" style={{ visibility: here ? 'visible' : 'hidden' }}>
    <header className="talk-heading"><div className="talk-kicker">PARTE 1 / {slide.id} / {SECTION_TITLES[index]}</div><h1>{slide.title}</h1></header>
    <main className="talk-body"><Content layout={slide.layout} id={slide.id} step={step} /></main>
    <footer className="talk-foot"><Foot layout={slide.layout} id={slide.id} step={step} /></footer>
  </div>;
}

export function TalkScene({ index }: { index: number }) {
  return <Scene index={index}><TalkSceneBody index={index} /></Scene>;
}
