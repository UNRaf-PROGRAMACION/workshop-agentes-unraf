import source from '../docs/linea.md?raw';
import { config } from './deck.config';

export const HISTORY_ERAS = ['Los comienzos', 'Reglas y expertos', 'Aprender y jugar', 'Transformer', 'Copilotos y chat', 'Agentes'];

const entries = [...source.matchAll(/^### ([^\n]+)\n([\s\S]*?)(?=^## |^### |$(?![\s\S]))/gm)];

const milestones: readonly (readonly [string, string, string, number, string, ('winter' | 'chess' | 'vision' | 'transformer' | 'code')?])[] = [
  ['1943', 'Primera neurona artificial.', 'McCulloch y Pitts proponen un modelo matemático de neurona.', 0, '1943'],
  ['1950', '¿Pueden pensar las máquinas?', 'Alan Turing propone el juego de imitación.', 0, '1950'],
  ['1956', 'Nace el campo de la IA.', 'Un encuentro de investigadores en Dartmouth College, EE. UU., consolida la inteligencia artificial como campo de estudio.', 0, '1956'],
  ['1966', 'ELIZA: conversar con reglas.', 'Uno de los primeros chatbots simula conversaciones con patrones de texto.', 0, '1966'],
  ['1970–1980', 'Primer invierno de la IA.', 'Las expectativas superan las capacidades: caen el entusiasmo y la financiación.', 1, '1970–1980', 'winter'],
  ['1997', 'Deep Blue vence al campeón.', 'Una computadora derrota al campeón mundial de ajedrez, Garry Kasparov.', 2, '1997', 'chess'],
  ['2012', 'AlexNet: un salto en visión.', 'Redes profundas, datos y GPUs impulsan el reconocimiento de imágenes.', 2, '2012', 'vision'],
  ['2017', 'Transformer.', 'Una nueva base para los modelos de lenguaje.', 3, '2017', 'transformer'],
  ['2018', 'BERT: el contexto importa.', 'Un modelo de lenguaje que considera el contexto a ambos lados de una palabra.', 3, '2018', 'transformer'],
  ['2021', 'GitHub Copilot: IA al programar.', 'La IA llega al editor para sugerir líneas y funciones de código.', 4, '2021', 'code'],
  ['2022', 'ChatGPT.', 'Conversar con IA llega al público masivo.', 4, '2022'],
  ['Actualidad', 'Agentes.', 'De recibir respuestas a delegar tareas, con supervisión humana.', 5, '2025'],
];

const context: Record<string, string[]> = {
  '1966': ['1957'],
  '1970–1980': ['1980–1986', '1987–1993'],
  '2012': ['2006', '2014', '2016'],
  '2022': ['2020', '2023'],
  'Actualidad': ['2024'],
};

export const HISTORY = milestones.map(([year, title, summary, era, sourceYear, kind]) => {
  const entry = entries.find((item) => item[1].startsWith(`${sourceYear} —`));
  const copilotNote = year === '2021' ? `GitHub presenta la vista previa técnica de Copilot el 29 de junio de 2021, desarrollado con OpenAI y basado en Codex. Sugiere líneas y funciones a partir del código del editor: un gran hito de IA aplicada a programación, no todavía un agente autónomo. No confundir esta presentación inicial con su disponibilidad general en 2022. Fuente: ${config.references.copilot}` : undefined;
  const extra = (context[year] ?? []).map((date) => entries.find((item) => item[1].startsWith(`${date} —`))?.[0].trim()).filter(Boolean).join('\n\n');
  return {
    year, title, summary, era, kind,
    source: entry?.[0].trim() ?? summary,
    note: `${copilotNote ?? entry?.[2].trim() ?? summary}${year === '1950' ? '\n\nExplicar con el dibujo: máquina y persona ocultas tras una barrera, comunicación solo por texto e interlocutor que intenta distinguirlas. Si no logra hacerlo, la máquina supera la prueba (criterio simplificado). Turing propuso este escenario, no afirmar que realizó el experimento dibujado. Superar la prueba no demuestra conciencia.' : ''}${year === '2018' ? '\n\nEl foco de este paso es BERT y su representación bidireccional del contexto, no un chatbot generativo.' : ''}${extra ? `\n\nContexto opcional, sin pasos adicionales:\n${extra}` : ''}${year === '2012' ? '\n\nAlexNet no fue la primera IA en analizar imágenes: fue un avance decisivo.' : ''}${year === 'Actualidad' ? '\n\nNo afirmar lanzamientos de GPT-6 ni resultados del AI Index 2026: fuentes pendientes. Conectar con el pedido concreto de agregar un sistema de vidas.' : ''}`,
  };
});

export const HISTORY_STEPS = HISTORY.map((item) => `${item.year} · ${item.title}`);
