import script from '../docs/guion-parte-1.md?raw';

export type Layout = 'opening' | 'assistant' | 'agent' | 'compare' | 'repository' | 'equation' |
  'prompt' | 'clues' | 'window' | 'flow' | 'mind' | 'explore' | 'broken' | 'fixes' |
  'sdd' | 'spec' | 'life-compare' | 'lives' | 'parameters' | 'feel' | 'states' |
  'roles' | 'design' | 'platform' | 'harness' | 'evidence' | 'safety' | 'cycle' | 'closing' |
  'bonus-tips' | 'bonus-ego' | 'bonus-acceptance';

interface Slide {
  id: string;
  title: string;
  layout: Layout;
  steps: string[];
}

export const SLIDES: Slide[][] = [
  [{ id: '1.1', title: 'Un pedido. Muchas decisiones.', layout: 'opening', steps: ['El pedido', 'Las decisiones pendientes', 'Definir antes de pedir'] }],
  [
    { id: '2.1', title: '¿Qué es un asistente?', layout: 'assistant', steps: ['Un asistente responde'] },
    { id: '2.2', title: 'Un agente puede actuar.', layout: 'agent', steps: ['Modelo + instrucciones + herramientas'] },
    { id: '2.3', title: 'Asistente vs. agente', layout: 'compare', steps: ['Antes: ¿qué cambia?'] },
    { id: '2.4', title: '¿Qué es el contexto?', layout: 'repository', steps: ['La información disponible', 'Acceso no significa lectura'] },
    { id: '2.5', title: 'De responder a actuar.', layout: 'compare', steps: ['Responder vs. actuar', 'Herramientas y permisos'] },
    { id: '2.6', title: 'La diferencia, en una frase', layout: 'equation', steps: ['Asistente = chat', 'Agente = chat que acciona'] },
  ],
  [
    { id: '3.1', title: 'El prompt no es todo el contexto', layout: 'prompt', steps: ['Lo que pedís', 'Lo que necesita saber'] },
    { id: '3.2', title: 'Las pistas están en el proyecto.', layout: 'clues', steps: ['Las pistas del repositorio', 'Relevante, no todo'] },
    { id: '3.3', title: 'El contexto tiene un límite', layout: 'window', steps: ['Ventana de contexto', 'Tokens y decisiones persistentes'] },
  ],
  [
    { id: '4.1', title: 'Vibe coding: pedir, probar, ajustar.', layout: 'flow', steps: ['Pedir, probar, ajustar'] },
    { id: '4.2', title: 'Definir antes de implementar', layout: 'mind', steps: ['Controlar mejor el cambio', 'La IA no lee tu mente'] },
    { id: '4.3', title: 'Rápido para explorar', layout: 'explore', steps: ['Dónde ayuda', 'Cuando el proyecto crece'] },
    { id: '4.4', title: '¿Les pasó?', layout: 'broken', steps: ['Síntomas conocidos', 'Arregla una cosa y rompe otra'] },
    { id: '4.5', title: 'Un fix sobre otro fix', layout: 'fixes', steps: ['Fix', 'Otro fix', '¿Qué queríamos hacer?'] },
  ],
  [
    { id: '5.1', title: 'Definir el cambio. Después, construir.', layout: 'sdd', steps: ['Qué es SDD', 'De la intención a la evidencia'] },
    { id: '5.2', title: '¿Qué contiene una spec?', layout: 'spec', steps: ['Un contrato de cambio', 'Pequeña, concreta, revisable'] },
  ],
  [
    { id: '6.1', title: 'Misma intención. Distinta precisión.', layout: 'life-compare', steps: ['Antes: el prompt vago', 'Las decisiones abiertas', 'Después: con SDD'] },
    { id: '6.2', title: 'De la regla a la evidencia', layout: 'lives', steps: ['Vidas y derrota', 'Un nuevo daño', 'Qué demuestra cada evidencia'] },
  ],
  [
    { id: '7.1', title: 'Parámetros con intención.', layout: 'parameters', steps: ['No números mágicos', 'Configurar para facilitar el tuning'] },
    { id: '7.2', title: 'Del game feel a una hipótesis.', layout: 'feel', steps: ['La intención y sus reglas', 'Una hipótesis de salto', 'Evaluar el game feel en playtest'] },
    { id: '7.3', title: 'Estados claros. Transiciones explícitas.', layout: 'states', steps: ['Máquinas de estados', 'Interrupciones y prioridades'] },
    { id: '7.4', title: 'Del playtest al cambio trazable.', layout: 'flow', steps: ['Del hallazgo al cambio', 'Ajustar y volver a evaluar'] },
    { id: '7.5', title: 'Visión, feature y ruta técnica.', layout: 'roles', steps: ['Visión, feature y ruta técnica', 'Ejemplo: sistema de reaparición'] },
    { id: '7.6', title: 'Diseñar no es implementar.', layout: 'design', steps: ['Dos roles, incluso en un equipo indie', 'Primero la experiencia del jugador'] },
    { id: '7.7', title: 'La plataforma también define las reglas.', layout: 'platform', steps: ['Condiciones de la plataforma', 'Incluirlas y verificarlas'] },
  ],
  [
    { id: '8.1', title: 'Diseñar el entorno del agente.', layout: 'harness', steps: ['Qué es un harness', 'Reglas, procesos y verificaciones'] },
    { id: '8.2', title: 'Convencer no es demostrar.', layout: 'evidence', steps: ['Ya está arreglado', '¿Qué lo demuestra?', 'Prueba manual reproducible'] },
    { id: '8.3', title: 'Más autonomía exige más control', layout: 'safety', steps: ['Límites y observabilidad', 'Comprender lo que entregamos'] },
  ],
  [
    { id: '9.1', title: 'El ciclo completo', layout: 'cycle', steps: ['Intención, spec y plan', 'Cambio y evidencia', 'Decisión humana'] },
    { id: '9.2', title: 'El criterio va más allá de la herramienta.', layout: 'closing', steps: ['Las habilidades transferibles', 'La pregunta que nos llevamos'] },
  ],
  [
    { id: '10.1', title: 'Tips para trabajar con agentes.', layout: 'bonus-tips', steps: ['Un GDD vivo', 'Actualizar las decisiones', 'Assets y referencias explícitas'] },
    { id: '10.2', title: 'Soltá tu fucking ego de programador', layout: 'bonus-ego', steps: ['¿Saben lo que es?', 'Las objeciones al LLM', 'Nuestro valor no está en escribir código'] },
    { id: '10.3', title: 'Adoptar IA: la metáfora del duelo.', layout: 'bonus-acceptance', steps: ['Negación', 'Ira', 'Negociación', 'Depresión / desánimo', 'Aceptación'] },
  ],
];

export const SECTION_TITLES = [
  'Apertura', 'Asistente y agente', 'Contexto', 'Vibe coding', 'SDD',
  'Vidas y derrota', 'SDD en videojuegos', 'Control y seguridad', 'Hacia la práctica', 'Bonus',
];

const sourceSections = new Map(
  [...script.matchAll(/^### (\d+\.\d+) — ([^\n]+)\n([\s\S]*?)(?=^## |^### |$(?![\s\S]))/gm)]
    .map((match) => [match[1], match[3].trim()] as const),
);

export function slideSource(id: string) {
  const section = sourceSections.get(id);
  if (!section) throw new Error(`Falta el guion de la slide ${id}`);
  const [screen, narration] = section.split('**Narración:**');
  if (!narration) throw new Error(`Falta la narración de la slide ${id}`);
  return { screen: screen.replace('**En pantalla:**', '').trim(), narration: narration.trim() };
}

export function locateSlide(scene: number, beat: number) {
  let start = 0;
  for (const slide of SLIDES[scene]) {
    if (beat < start + slide.steps.length) return { slide, step: beat - start };
    start += slide.steps.length;
  }
  return { slide: SLIDES[scene][0], step: 0 };
}
