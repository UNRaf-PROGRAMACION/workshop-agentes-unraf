import { Fragment, type ReactNode } from 'react';
import { Scene, useScene } from 'beatdeck';
import agentImage from '../../docs/media/2.2.png';
import unrafLogo from '../../docs/media/logounraf.png';
import { config } from '../deck.config';
import opencodeLogo from '../assets/opencode.svg';
import claudeCodeLogo from '../assets/claude-code.svg';
import codexLogo from '../assets/codex.svg';
import chatgptLogo from '../assets/chatgpt.svg';
import claudeLogo from '../assets/claude.svg';
import geminiLogo from '../assets/gemini.svg';
import v0Logo from '../assets/v0.svg';
import lovableLogo from '../assets/lovable.svg';
import replitLogo from '../assets/replit.svg';
import { locateSlide, SECTION_TITLES, type Layout } from '../talk';
import { BonusContent } from './BonusContent';
import { AsciiBackground } from '../components/AsciiBackground';
import { useTalkMotion } from '../components/useTalkMotion';
import { HarnessMap, JumpSketch, StateQuestions, WorkCycle } from '../components/TalkDiagrams';

const ASSISTANTS = [
  { name: 'ChatGPT', logo: chatgptLogo, monochrome: true },
  { name: 'Claude', logo: claudeLogo },
  { name: 'Gemini', logo: geminiLogo },
  { name: 'v0', logo: v0Logo },
  { name: 'Lovable', logo: lovableLogo },
  { name: 'Replit', logo: replitLogo },
];

function List({ items }: { items: string[] }) {
  return <ul className="talk-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function Flow({ items, focus }: { items: string[]; focus?: number }) {
  return <div className="talk-flow">{items.map((item, i) => <Fragment key={item}>
    {i > 0 ? <span className="talk-flow-arrow" aria-hidden="true">→</span> : null}
    <div className={`talk-flow-node${i === focus ? ' is-focus' : ''}`}>{item}</div>
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
    case 'bonus-tips':
    case 'bonus-ego':
    case 'bonus-reference':
    case 'bonus-acceptance': return <BonusContent layout={layout} step={step} />;
    case 'opening': return <>
      <div data-exact className="talk-big">Agregá un sistema<br /><span className="accent">de vidas.</span></div>
      {step >= 1 ? <div className="talk-opening-questions">{['¿Cuántas vidas?', '¿Qué cuenta como daño?', '¿Qué pasa con cero?'].map((question) => <div key={question}>{question}</div>)}</div> : null}
      {step >= 2 ? <p className="talk-takeaway">Pedir código no es lo mismo que <span className="accent">definir un cambio.</span></p> : null}
    </>;
    case 'assistant': return <Columns left={<>
      <h2>Un asistente responde.</h2><p>Un chat donde podés hacer preguntas y recibir respuestas.</p>
      <div className="talk-chat-example"><div className="talk-label">PREGUNTÁS</div><h2>¿Qué significa<br />este error?</h2><div className="talk-label">RECIBÍS UNA RESPUESTA</div><p>Vos trasladás la propuesta al proyecto.</p></div>
      <p className="talk-small muted">También: «Explicame esta función».<br />«Dame un ejemplo de movimiento».</p>
    </>} right={<><div className="talk-label">INTERFACES CONOCIDAS</div><div className="talk-assistants" aria-label="Herramientas conocidas con interfaces de conversación">
      {ASSISTANTS.map(({ name, logo, monochrome }) => <div className="talk-assistant" key={name}>
        <img className={monochrome ? 'talk-tool-monochrome' : undefined} src={logo} width={96} height={96} alt="" />
        <span>{name}</span>
      </div>)}
    </div><p className="talk-small muted">La capacidad de actuar depende de<br />las herramientas y los permisos disponibles.</p></>} />;
    case 'agent': return <div className="talk-agent-layout">
      <div>{[['Modelo', 'LLM · genera y propone'], ['Instrucciones', 'prompts · orientan y limitan'], ['Herramientas', 'tools · leen, editan, ejecutan']].map(([name, detail], i) => <Fragment key={name}>
        {i > 0 ? <div className="talk-plus">+</div> : null}<div className="talk-formula">{name}<small>{detail}</small></div>
      </Fragment>)}</div>
      <div className="talk-agent-evidence"><div className="talk-label">OpenCode · INTERFAZ REAL</div><div className="talk-agent-crop"><img className="talk-agent-image" src={agentImage} width={1913} height={1040} alt="Detalle de la captura original de OpenCode: conversación y panel de contexto con herramientas conectadas. No muestra una edición ejecutada." /></div><p className="talk-small muted">Conversación + contexto + herramientas conectadas.<br />La captura muestra la interfaz, no una acción ejecutada.</p></div>
    </div>;
    case 'compare': return id === '2.3' ? <div className="talk-audience-question">
      <p>Ambos pueden conversar.<br />Al asistente le compartís el contexto del proyecto.</p>
      <div className="talk-big">Un agente…<br /><span className="accent">¿qué cambia?</span></div>
    </div> : <>
      <Columns left={<>
      <div className="talk-label">ASISTENTE</div><h2>Preguntás.<br />Recibís respuestas.</h2>
      <List items={['Le compartís información.', 'Aplicás sus propuestas.']} />
    </>} right={<>
      <div className="talk-label">AGENTE</div>
      <h2>Conversás.<br />Puede actuar.</h2><List items={['Busca y lee archivos.', 'Crea, edita, mueve o elimina archivos.']} />
    </>} />
      {step >= 1 ? <p className="talk-takeaway">Poder hacerlo <span className="accent">no significa estar autorizado.</span></p> : null}
    </>;
    case 'repository': return <>
      <p>La información disponible para trabajar sobre una tarea.</p>
      <div className="talk-context-selection"><div><div className="talk-repo">/ nuestro-videojuego<br /><span className="muted">codebase / repositorio</span></div><div className="talk-chips">{['Documentación', 'Código', 'Escenas', 'Reglas', 'Pruebas'].map((x) => <span key={x}>{x}</span>)}</div></div>
        <div className="talk-selection-arrow" aria-hidden="true">→</div>
        <div className="talk-context-read"><div className="talk-label">BUSCAR Y LEER</div><h2>Lo relevante<br />para la tarea.</h2><p>No toda la carpeta.</p></div>
      </div>
      {step >= 1 ? <p className="talk-takeaway">Tener acceso <span className="accent">no significa haber leído todo.</span></p> : null}
    </>;
    case 'equation': return <>
      <div className="talk-equation">Asistente = chat.</div>
      {step >= 1 ? <div className="talk-equation accent">Agente = chat,<br />pero que acciona.</div> : null}
    </>;
    case 'prompt': return <Columns left={<>
      <div className="talk-label">LO QUE PEDÍS</div><h2>Agregá enemigos<br />que persigan<br />al jugador.</h2>
    </>} right={step >= 1 ? <div className="talk-prompt-context">{[
      ['PROYECTO ACTUAL', '¿Cómo se mueve el jugador?', '¿Qué sistema de enemigos existe?'],
      ['REGLAS Y LÍMITES', '¿Qué reglas define el diseño?', '¿Qué archivos puede modificar?'],
      ['EVIDENCIA', '¿Cómo comprobamos que funciona?'],
    ].map(([label, ...questions]) => <div key={label}><div className="talk-label">{label}</div>{questions.map((question) => <p key={question}>{question}</p>)}</div>)}</div> : <p className="muted">El pedido expresa una intención.<br />Todavía faltan decisiones.</p>} />;
    case 'clues': return <><Rows items={[
      ['GDD y documentación', 'Qué queremos construir.'], ['Código y escenas', 'Cómo funciona hoy.'],
      ['Reglas del proyecto', 'Cómo debemos trabajar.'], ['Pruebas', 'Cómo comprobamos los cambios.'], ['Decisiones previas', 'Qué acordamos y por qué.'],
    ]} />{step >= 1 ? <p className="talk-takeaway">Más contexto no siempre es <span className="accent">mejor contexto.</span></p> : null}</>;
    case 'window': return <>
      <p>Cantidad limitada de información que el modelo<br />puede considerar durante una interacción.</p>
      <div className="talk-window"><div className="talk-label">VENTANA DE CONTEXTO · CAPACIDAD FINITA</div><div className="talk-window-items">
        {['Instrucciones', 'Archivos leídos', 'Conversación', 'Resultados'].map((x) => <span key={x}>{x}</span>)}
      </div></div>
      <p className="talk-window-caption">Todos comparten la misma ventana. Esquema sin proporciones cuantitativas.</p>
      {step >= 1 ? <><div className="talk-token-notes"><div><strong>Tokens</strong><span>Unidades de texto que procesa el modelo.</span></div><div><strong>Capacidad</strong><span>Información que puede considerar.</span></div><div><strong>Latencia y costo</strong><span>También importan al trabajar.</span></div></div><p className="talk-takeaway">Decisiones en archivos. <span className="accent">Tareas pequeñas.</span></p></> : null}
    </>;
    case 'flow': return <>
      <Flow items={id === '4.1' ? ['Prompt', 'Generación', 'Prueba', 'Otro prompt'] : ['Playtest', 'Hallazgo', 'Spec', 'Código', 'Verificación']} focus={id === '4.1' ? undefined : step === 0 ? 1 : 2} />
      <div className="talk-loop-back">↶ {id === '4.1' ? 'Probar el resultado y ajustar el pedido.' : 'Volver a jugar y evaluar el balance.'}</div>
      {id === '4.1' ? <div className="talk-big talk-flow-summary">Hacé que funcione.</div> : <div className="talk-flow-summary">
        <h2>Una habilidad domina el combate.<br />La curva de dificultad resulta frustrante.</h2>
        {step >= 1 ? <p className="accent">Revisar daño, cooldowns o spawn.<br />Registrar la intención y volver a evaluar el balance.</p> : null}
      </div>}
    </>;
    case 'mind': return step === 0 ? <div className="talk-big">Si queremos controlar<br />mejor el cambio,<br /><span className="accent">necesitamos definirlo.</span></div> : <>
      <div className="talk-big talk-mind-statement">La IA no lee<br /><span className="accent">tu mente.</span></div>
    </>;
    case 'explore': return <Columns left={<><div className="talk-label">PARA EXPLORAR</div><List items={[
      'Un prototipo de una tarde.', 'Explorar una mecánica.', 'Aprender con ejemplos.', 'Probar una idea descartable.',
    ]} /></>} right={step >= 1 ? <><div className="talk-label">CUANDO EL PROYECTO CRECE</div><List items={[
      'Requisitos contradictorios.', 'Decisiones fuera del contexto.', 'Cambios más difíciles de revisar.',
    ]} /></> : <h2>Probar rápido.<br />Aprender.<br />Descartar.</h2>} />;
    case 'broken': return step === 0 ? <List items={['El personaje se mueve raro.', 'El nivel pierde consistencia.', 'Los enemigos no hacen lo esperado.']} /> : <>
      <div className="talk-big">Pedís un arreglo.<br /><span className="accent">Arregla una cosa<br />y rompe otra.</span></div>
    </>;
    case 'fixes': return <div className="talk-stack">
      <div className="talk-fix" style={{ width: 320 }}>FIX</div>
      {step >= 1 ? <div className="talk-fix" style={{ width: 590 }}>OTRO FIX</div> : null}
      {step >= 2 ? <><div className="talk-fix" style={{ width: 820 }}>OTRO FIX MÁS</div><div className="talk-fix base">¿QUÉ QUERÍAMOS HACER?</div></> : null}
    </div>;
    case 'sdd': return <>
      {step === 0 ? <><div className="talk-sdd-intro"><div className="talk-big accent">SDD</div><div>
        <h2>Spec-Driven Development</h2><p className="muted">Desarrollo guiado por especificaciones.</p></div></div>
      <p>Definir el cambio esperado antes de implementarlo<br />y comprobar el resultado contra esa definición.</p></> : <>
        <h2>De la intención<br /><span className="accent">a la evidencia.</span></h2>
        <div className="talk-sdd-flow"><Flow items={['Intención', 'Spec', 'Plan', 'Código', 'Evidencia']} focus={4} /></div>
        <p className="talk-takeaway">Comprobar el resultado <span className="accent">contra lo que definimos.</span></p>
      </>}
    </>;
    case 'spec': return <><Rows items={step === 0 ? [
      ['Objetivo', 'Qué problema resuelve.'], ['Alcance', 'Qué cambia y qué queda afuera.'], ['Reglas y restricciones', 'Qué debe cumplirse.'],
      ['Criterios de aceptación', 'Qué esperamos observar.'], ['Evidencia', 'Cómo vamos a comprobarlo.'],
    ] : [
      ['Objetivo', 'Feature: vidas y derrota.'], ['Alcance', 'Fuera: animaciones y balance.'],
      ['Reglas y restricciones', 'Inicio: 3 vidas. Cada daño válido resta 1.'],
      ['Criterios de aceptación', 'Vidas no negativas. Una única derrota.'],
      ['Evidencia', '3 → 2 → 1 → 0 → 0 + comprobación visual.'],
    ]} />{step >= 1 ? <p className="talk-takeaway">Pequeña. Concreta. <span className="accent">Revisable.</span></p> : null}</>;
    case 'life-compare': return <div className="talk-vs-layout">
      <div><div className="talk-label">ANTES · VIBE CODING</div><p className="talk-vague">Agregá un sistema de vidas y que el jugador pierda cuando se quede sin vidas.</p>
        {step >= 1 ? <div className="talk-open-decisions">{['¿Cuántas vidas?', '¿Cuánto daño?', '¿Puede quedar en negativo?', '¿Qué pasa después de perder?'].map((x, index) => <p className="talk-question" key={x}><span className="talk-decision-key">{String.fromCharCode(65 + index)}</span>{x}</p>)}</div> : null}
      </div>
      <div className="talk-vs">VS</div>
      <div><div className="talk-label">DESPUÉS · AGENTE CON SDD</div>{step >= 2 ? <div className="talk-document">
        <p><strong>Feature: vidas y derrota</strong></p>
        <div className="talk-spec-rules">{[
          ['A', 'Inicio: 3 vidas.'], ['B', 'Cada daño válido resta 1.'], ['C', 'Las vidas nunca bajan de 0.'],
          ['D', 'Con 0, activar derrota una sola vez.'], ['D', 'Tras la derrota, ignorar nuevo daño.'],
        ].map(([key, rule]) => <div className="talk-spec-line" key={rule}><span className="talk-decision-key">{key}</span>{rule}</div>)}</div>
        <div className="talk-spec-scope"><strong>ALCANCE</strong><span>Fuera: animaciones y balance.</span></div>
        <div className="talk-spec-scope"><strong>EVIDENCIA</strong><span>3 → 2 → 1 → 0 → 0.<br />Una derrota + comprobación visual.</span></div>
      </div> : <div style={{ paddingTop: 120 }} className="muted"><p>La misma intención.</p><p>¿Qué falta definir?</p></div>}</div>
    </div>;
    case 'lives': return <>
      <div className="talk-lives">{['3 ♥', '2 ♥', '1 ♥', '0 ♥', 'DERROTA'].map((x, i) => <Fragment key={x}>{i ? <span className="arrow">→</span> : null}<span className={i === 4 ? 'accent' : ''}>{x}</span></Fragment>)}</div>
      {step >= 1 ? <div className="talk-damage-boundary"><span>Nuevo daño</span><span aria-hidden="true">→</span><strong>0 ♥</strong><span>Sin repetir derrota</span></div> : null}
      {step >= 2 ? <Rows items={[
        ['Vidas no negativas', 'Prueba de lógica.'], ['Una única derrota', 'Prueba de eventos o integración.'], ['Señal de derrota visible', 'Comprobación visual.'],
      ]} /> : null}
    </>;
    case 'parameters': return <>
      <div className="talk-big">Gameplay,<br /><span className="accent">no números mágicos.</span></div>
      <div className="talk-chips">{['Velocidad', 'Gravedad', 'Cooldowns', 'Daño', 'Spawn de enemigos'].map((x) => <span key={x}>{x}</span>)}</div>
      {step >= 1 ? <><Flow items={['Spec: qué ajustar', 'Plan: dónde centralizarlo', 'Tuning: probar y ajustar']} focus={2} /><p className="talk-small muted">Ejemplo en Unity: ScriptableObjects para facilitar el tuning.</p></> : null}
    </>;
    case 'feel': return <>
      <h2>«Que el salto se sienta responsivo».</h2>
      {step >= 1 ? <><div className="talk-label">HIPÓTESIS ILUSTRATIVA PARA PROBAR</div><div className="talk-jump-layout"><div className="talk-numbers">
        <div className="talk-number">0,1 s<small>Coyote time</small></div><div className="talk-number">0,35 s<small>Tiempo hasta el ápice</small></div>
      </div><JumpSketch /></div></> : <Rows items={[
        ['Coyote time', 'Margen para saltar tras dejar una plataforma.'],
        ['Jump buffering', 'Recordar un salto pulsado antes de aterrizar.'],
        ['Control aéreo', 'Cuánto control conservamos durante el salto.'],
      ]} />}
      {step >= 2 ? <p className="accent" style={{ fontSize: 38 }}>Playtest → ¿logramos el game feel buscado?</p> : null}
    </>;
    case 'states': return <StateQuestions expanded={step >= 1} />;
    case 'roles': return <><div className="talk-document-levels">{[
      ['GDD', 'Game Design Document', 'Visión, pilares, core loop, mecánicas y tono.'],
      ['SPEC', 'Una feature concreta', 'Comportamiento, alcance y criterios de aceptación.'],
      ['PLAN', 'La ruta técnica', 'Cómo realizar el cambio en este repositorio.'],
    ].map(([name, label, detail], index) => <div className="talk-document-level" key={name}><span className="talk-level-name">{name}</span><div><h2>{label}</h2><p>{detail}</p></div>{index < 2 ? <span className="talk-level-down" aria-hidden="true">↓</span> : null}</div>)}</div>
      {step >= 1 ? <p className="talk-takeaway">De la visión a una feature: <span className="accent">sistema de reaparición.</span></p> : null}</>;
    case 'design': return <><div className="talk-shared-feature">UNA MISMA FEATURE · DOS TIPOS DE DECISIÓN</div><Columns left={<>
      <div className="talk-label">GAME DESIGN</div><h2>Qué experiencia<br />buscamos.</h2>
      <p>Necesidades del jugador.<br />Reglas de gameplay.</p>
    </>} right={<>
      <div className="talk-label">IMPLEMENTACIÓN</div><h2>Cómo construirla<br />en este proyecto.</h2>
      <p>Solución técnica.<br />Integración con el código existente.</p>
      {step >= 1 ? <p className="accent">Una comodidad técnica no es,<br />por sí sola, una decisión de diseño.</p> : null}
    </>} /></>;
    case 'platform': return <>
      <h2>¿Dónde tiene que funcionar?</h2><div className="talk-chips">{['Input táctil', 'Resolución', 'Orientación', 'Presupuesto de rendimiento', 'Tamaño de build'].map((x) => <span key={x}>{x}</span>)}</div>
      {step >= 1 ? <><div className="talk-platform-flow"><Flow items={['Reglas estables del proyecto', 'Specs de cada cambio', 'Verificaciones']} focus={2} /></div><p className="talk-takeaway">Comprobarlo <span className="accent">en la plataforma de destino.</span></p></> : null}
    </>;
    case 'harness': return <>
      {step === 0 ? <><div className="talk-label">HARNESS</div><div className="talk-big">El agente no trabaja<br /><span className="accent">en el vacío.</span></div><p className="talk-harness-definition">Reglas, instrucciones, herramientas y verificaciones<br />que encuadran su trabajo.</p></> : <HarnessMap />}
    </>;
    case 'evidence': return <>
      <div className="talk-big">{step === 0 ? 'Ya está arreglado.' : '¿Qué lo demuestra?'}</div>
      {step >= 1 ? <div className="talk-chips" style={{ marginTop: 60 }}>{['Diff', 'Pruebas', 'Build', 'Ejecución', 'Capturas', 'Playtest'].map((x) => <span key={x}>{x}</span>)}</div> : null}
      {step >= 2 ? <div className="talk-manual-evidence"><div className="talk-label">PRUEBA MANUAL REPRODUCIBLE · QUÉ REGISTRAR</div><div className="talk-evidence-fields">{['Pasos', 'Esperado', 'Observado', 'Limitaciones'].map((label) => <div key={label}>{label}</div>)}</div><p className="talk-small muted">Es una estructura de registro, no un resultado de prueba.</p></div> : null}
    </>;
    case 'safety': return <>
      {step === 0 ? <div className="talk-safety-groups">{[
        ['PROTEGER', 'No compartir secretos ni datos personales.'],
        ['REVISAR', 'Revisar herramientas, scripts y skills externas.'],
        ['DETENERSE', 'Ante ambigüedades o acciones destructivas.'],
        ['PEDIR APROBACIÓN', 'Antes de publicar o salir del alcance.'],
      ].map(([label, text]) => <div key={label}><div className="talk-label">{label}</div><p>{text}</p></div>)}</div> : <><div className="talk-big">Comprender<br /><span className="accent">lo que entregamos.</span></div><p className="talk-takeaway">Comprender, explicar y declarar la asistencia<br />cuando corresponda.</p></>}
    </>;
    case 'cycle': return <WorkCycle step={step} />;
    case 'closing': return step >= 2 ? <div className="talk-practice-transition"><div><div className="talk-label">AHORA, A LA PRÁCTICA</div><h2>Una herramienta.<br /><span className="accent">El mismo criterio.</span></h2><p>Aplicar este ciclo a un proyecto existente.</p></div><aside className="talk-tools" aria-label="Herramientas de programación con IA">
      <div className="talk-tool talk-tool-featured"><img className="talk-tool-monochrome" src={opencodeLogo} width={88} height={88} alt="" /><span>OpenCode</span></div>
      <div className="talk-tool"><img src={claudeCodeLogo} width={64} height={64} alt="" /><span>Claude Code</span></div>
      <div className="talk-tool"><img src={codexLogo} width={64} height={64} alt="" /><span>Codex</span></div>
      <p className="talk-tools-more">y muchos más…</p>
    </aside></div> : <div className="talk-closing-layout"><div>{step === 0 ? <>
      <div className="talk-big talk-closing-statement">Contexto.<br />Límites.<br />Evidencia.<br /><span className="accent">Decisión humana.</span></div>
    </> : <>
      <p className="muted">No solamente: ¿la IA escribió código?</p><div className="talk-big talk-closing-question">¿Podemos explicar<br />qué cambió y con qué<br /><span className="accent">evidencia lo aceptamos?</span></div>
    </>}</div></div>;
  }
}

function Foot({ layout, step, id }: { layout: Layout; step: number; id: string }): ReactNode {
  if (layout === 'bonus-tips') return 'El GDD conserva las decisiones; las specs concretan cada cambio.';
  if (layout === 'bonus-ego') return <a className="talk-reference" href={config.references.programmerEgo} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()}>Lectura recomendada: «El ego del programador» · LinkedIn ↗</a>;
  if (layout === 'bonus-acceptance') return <a className="talk-reference" href={config.references.grief} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()}>Referencia de la metáfora: Psicopedia · psicopedia.org/7691/ ↗</a>;
  if (layout === 'bonus-reference') return <a className="talk-reference" href={config.references.grief} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()}>Fuente de la infografía original: Psicopedia · psicopedia.org/7691/ ↗</a>;
  if (layout === 'agent') return 'Agente de desarrollo ≠ NPC o IA de gameplay. Las acciones dependen de sus permisos.';
  if (layout === 'compare' && id === '2.5' && step >= 1) return 'Las acciones dependen de las herramientas y los permisos disponibles.';
  if (layout === 'clues' && step >= 1) return 'Excluir secretos e información irrelevante. Usar información actualizada y confiable.';
  if (layout === 'window' && step >= 1) return 'Conservar decisiones en archivos y trabajar con tareas pequeñas, no depender de un chat interminable.';
  if (layout === 'mind' && step >= 1) return 'Lo que no definís queda abierto a interpretación.';
  if (layout === 'explore' && step >= 1) return 'Son riesgos, no resultados inevitables. La revisión y el alcance importan.';
  if (layout === 'fixes' && step >= 2) return 'Más prompts no reemplazan una definición compartida.';
  if (layout === 'sdd') return 'No reemplaza diseño, pruebas, revisión ni seguridad. Ayuda a conectarlos.';
  if (layout === 'spec') return step >= 1 ? 'Valores ilustrativos. Supuestos y preguntas abiertas: visibles, no escondidos.' : 'Un contrato revisable para un cambio pequeño.';
  if (layout === 'life-compare') return 'Valores ilustrativos para este ejemplo; deben acordarse para el juego real.';
  if (layout === 'lives' && step >= 2) return 'Cumplir la regla ≠ garantizar una buena experiencia. Balance y claridad requieren playtest.';
  if (layout === 'parameters' && step >= 1) return 'Tuning: ajustar parámetros, probar el resultado y volver a iterar.';
  if (layout === 'feel' && step >= 2) return 'Los parámetros se verifican; la experiencia se evalúa jugando.';
  if (layout === 'states' && step >= 1) return 'La spec define transiciones, interrupciones y prioridades. No elimina todos los bugs.';
  if (layout === 'flow' && id === '7.4' && step >= 1) return 'Cada cambio de balance responde a un hallazgo. La spec acompaña la iteración, no congela el diseño.';
  if (layout === 'roles') return step >= 1 ? 'El GDD conserva la visión; la spec no lo reemplaza ni lo convierte automáticamente en código.' : 'Core loop: ciclo principal de acciones del jugador.';
  if (layout === 'design' && step >= 1) return 'En un equipo indie podés cumplir ambos roles: separar las decisiones sigue siendo útil.';
  if (layout === 'platform' && step >= 1) return 'Escribir restricciones no garantiza su cumplimiento: también hay que verificarlas.';
  if (layout === 'harness') return 'No acumular archivos: resolver ambigüedades reales y facilitar la verificación.';
  if (layout === 'evidence' && step >= 1) return 'Revisar el diff y la evidencia antes de aceptar el cambio.';
  if (layout === 'safety' && step >= 1) return 'Usar un agente no reemplaza asumir responsabilidad por el resultado.';
  if (layout === 'closing' && step >= 2) return 'OpenCode: la herramienta del workshop, no el método.';
  return null;
}

function TalkSceneBody({ index }: { index: number }) {
  const { here, b } = useScene();
  const motionRef = useTalkMotion();
  if (index === 0 && b <= 0) return null;
  if (index === 0 && b === 1) return <div ref={motionRef} className="talk-page talk-cover" style={{ visibility: here ? 'visible' : 'hidden' }}>
    <AsciiBackground active={here && b === 1} />
    <div className="talk-cover-content">
      <div className="talk-kicker">Workshop</div>
      <h1>Programación <span>Agéntica</span></h1>
      <p>{config.author}</p>
      <div className="talk-cover-rule" aria-hidden="true" />
      <img src={unrafLogo} width={1200} height={188} alt="UNRaf · Licenciatura en Producción de Videojuegos y Entretenimiento Digital" />
    </div>
  </div>;
  const { slide, step } = locateSlide(index, Math.max(0, b - (index === 0 ? 2 : 0)));
  // Every scene layer remains mounted. Each slide is a pure function of scene + beat.
  const foot = Foot({ layout: slide.layout, id: slide.id, step });
  return <div ref={motionRef} className={`talk-page talk-layout-${slide.layout} talk-step-${step}`} style={{ visibility: here ? 'visible' : 'hidden' }}>
    <header key={`heading-${slide.id}`} className="talk-heading"><div className="talk-kicker">{SECTION_TITLES[index]}</div><h1>{slide.title}</h1></header>
    <main key={slide.id} className="talk-body"><Content layout={slide.layout} id={slide.id} step={step} /></main>
    {foot ? <footer className="talk-foot">{foot}</footer> : null}
  </div>;
}

export function TalkScene({ index }: { index: number }) {
  return <Scene index={index}><TalkSceneBody index={index} /></Scene>;
}
