import type { SceneDef } from 'beatdeck';
import { SECTION_TITLES, SLIDES, slideSource } from './talk';
import { config } from './deck.config';
import { HISTORY } from './history';

// Self-contained illustrations settle without advancing the speaker's position.
const ANIMATED_SLIDES = new Set(['1.1', '2.5', '3.3', '4.1', '4.5', '5.1', '6.1', '6.2', '7.1', '7.2', '7.3', '7.4', '7.7', '8.1', '9.1', '10.6']);

export const SCENES: SceneDef[] = SLIDES.map((slides, scene) => ({
  id: String(scene + 1).padStart(2, '0'),
  title: SECTION_TITLES[scene],
  beats: [
    ...(scene === 0 ? [
      { name: 'En espera', auto: true, note: 'Fondo ASCII ambiental, sin texto. Un clic muestra la portada.', ref: 'Pedido de fondo ASCII en espera · docs/guion-parte-1.md' },
      { name: 'Portada', auto: true, source: `${config.title}\n${config.author}`, note: 'Presentar el workshop y a sus expositores. Fondo ambiental autónomo; un clic abre la pregunta sobre inteligencia artificial.', ref: 'Pedido de portada · docs/media/logounraf.png' },
    ] : []),
    ...slides.flatMap((slide) => {
      const { screen, narration } = slideSource(slide.id);
      return slide.steps.map((name, step) => {
        const history = slide.layout === 'ai-history' ? HISTORY[step] : undefined;
        const animated = ANIMATED_SLIDES.has(slide.id) || Boolean(history && (
          history.year === '1943' || history.year === '1950' || (history.kind && history.kind !== 'winter')
        ));
        return {
          name: `${slide.id} · ${name}`,
          auto: animated,
          ref: slide.layout === 'ai-history' ? 'docs/linea.md · evolución de la IA' : `docs/guion-parte-1.md · ${slide.id}`,
          source: slide.layout === 'ai-history' ? HISTORY[step]?.source ?? screen : screen,
          note: `Paso ${step + 1}/${slide.steps.length}: ${name}.${animated ? '\nIlustración animada breve, sin avance automático. Esperar a que termine antes de continuar. No es una grabación ni evidencia de una implementación.' : ''}\n\n${slide.layout === 'ai-history' ? HISTORY[step]?.note ?? narration : narration}`,
        };
      });
    }),
  ],
}));

export const TOTAL_BEATS = SCENES.reduce((n, scene) => n + scene.beats.length, 0);
