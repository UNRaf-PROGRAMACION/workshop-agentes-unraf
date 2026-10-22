import script from '../docs/guion-parte-1.md?raw';

export type Layout = 'opening' | 'assistant' | 'agent' | 'compare' | 'repository' | 'equation' |
  'prompt' | 'clues' | 'window' | 'flow' | 'mind' | 'explore' | 'broken' | 'fixes' |
  'sdd' | 'spec' | 'life-compare' | 'lives' | 'parameters' | 'feel' | 'states' |
  'roles' | 'platform' | 'harness' | 'evidence' | 'safety' | 'cycle' | 'closing';

interface Slide {
  id: string;
  title: string;
  layout: Layout;
  steps: string[];
}

export const SLIDES: Slide[][] = [
  [{ id: '1.1', title: 'Agregá un sistema de vidas.', layout: 'opening', steps: ['El pedido', 'Las decisiones pendientes', 'Definir antes de pedir'] }],
  [
    { id: '2.1', title: '¿Qué es un asistente?', layout: 'assistant', steps: ['Un asistente responde'] },
    { id: '2.2', title: '¿Qué es un agente de programación?', layout: 'agent', steps: ['Modelo + instrucciones + herramientas'] },
    { id: '2.3', title: 'Asistente vs. agente', layout: 'compare', steps: ['Antes: ¿qué cambia?'] },
    { id: '2.4', title: '¿Qué es el contexto?', layout: 'repository', steps: ['La información disponible', 'Acceso no significa lectura'] },
    { id: '2.5', title: 'Asistente vs. agente: ahora sí', layout: 'compare', steps: ['Responder vs. actuar', 'Herramientas y permisos'] },
    { id: '2.6', title: 'La diferencia, en una frase', layout: 'equation', steps: ['Asistente = chat', 'Agente = chat que acciona'] },
  ],
  [
    { id: '3.1', title: 'El prompt no es todo el contexto', layout: 'prompt', steps: ['Lo que pedís', 'Lo que necesita saber'] },
    { id: '3.2', title: 'Nuestro proyecto tiene las pistas', layout: 'clues', steps: ['Las pistas del repositorio', 'Relevante, no todo'] },
    { id: '3.3', title: 'El contexto tiene un límite', layout: 'window', steps: ['Ventana de contexto', 'Tokens y decisiones persistentes'] },
  ],
  [
    { id: '4.1', title: 'Vibe coding: explorar una idea', layout: 'flow', steps: ['Pedir, probar, ajustar'] },
    { id: '4.2', title: 'Definir antes de implementar', layout: 'mind', steps: ['Controlar mejor el cambio', 'La IA no lee tu mente'] },
    { id: '4.3', title: 'Rápido para explorar', layout: 'explore', steps: ['Dónde ayuda', 'Cuando el proyecto crece'] },
    { id: '4.4', title: '¿Les pasó?', layout: 'broken', steps: ['Síntomas conocidos', 'Arregla una cosa y rompe otra'] },
    { id: '4.5', title: 'Un fix sobre otro fix', layout: 'fixes', steps: ['Fix', 'Otro fix', '¿Qué queríamos hacer?'] },
  ],
  [
    { id: '5.1', title: 'SDD: hacer explícito el cambio', layout: 'sdd', steps: ['Qué es SDD', 'De la intención a la evidencia'] },
    { id: '5.2', title: '¿Qué contiene una spec?', layout: 'spec', steps: ['Un contrato de cambio', 'Pequeña, concreta, revisable'] },
  ],
  [
    { id: '6.1', title: 'La misma intención. Dos formas de pedirla.', layout: 'life-compare', steps: ['Antes: el prompt vago', 'Las decisiones abiertas', 'Después: con SDD'] },
    { id: '6.2', title: 'De la regla a la evidencia', layout: 'lives', steps: ['Vidas y derrota', 'Un nuevo daño', 'Qué demuestra cada evidencia'] },
  ],
  [
    { id: '7.1', title: 'Parámetros explícitos', layout: 'parameters', steps: ['No más valores sin explicación', 'Explícitos y localizables'] },
    { id: '7.2', title: 'Del game feel a una hipótesis', layout: 'feel', steps: ['Una intención subjetiva', 'Parámetros que podemos probar', 'La experiencia requiere playtest'] },
    { id: '7.3', title: 'Estados y reglas en todas partes', layout: 'states', steps: ['Estados y transiciones', 'Los casos borde'] },
    { id: '7.4', title: 'El diseño cambia después del playtest', layout: 'flow', steps: ['Iterar con intención', 'Registrar qué cambia y por qué'] },
    { id: '7.5', title: 'GDD, spec y plan', layout: 'roles', steps: ['Cada uno cumple un papel', 'Dos sombreros'] },
    { id: '7.6', title: 'Las restricciones también son diseño', layout: 'platform', steps: ['Dónde tiene que funcionar', 'Reglas y verificación'] },
  ],
  [
    { id: '8.1', title: 'El entorno de trabajo también se diseña', layout: 'harness', steps: ['Qué es un harness', 'Reglas, procesos y verificaciones'] },
    { id: '8.2', title: 'Una respuesta convincente no es evidencia', layout: 'evidence', steps: ['Ya está arreglado', '¿Qué lo demuestra?', 'Prueba manual reproducible'] },
    { id: '8.3', title: 'Más autonomía exige más control', layout: 'safety', steps: ['Límites y observabilidad', 'Comprender lo que entregamos'] },
  ],
  [
    { id: '9.1', title: 'El ciclo completo', layout: 'cycle', steps: ['Intención, spec y plan', 'Cambio y evidencia', 'Decisión humana'] },
    { id: '9.2', title: 'Lo importante no es memorizar una herramienta', layout: 'closing', steps: ['Las habilidades transferibles', 'La pregunta que nos llevamos'] },
  ],
];

export const SECTION_TITLES = [
  'Apertura', 'Asistente y agente', 'Contexto', 'Vibe coding', 'SDD',
  'Vidas y derrota', 'SDD en videojuegos', 'Control y seguridad', 'Hacia la práctica',
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
