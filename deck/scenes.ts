import type { SceneDef } from 'beatdeck';
import { SECTION_TITLES, SLIDES, slideSource } from './talk';
import { config } from './deck.config';

// Self-contained illustrations settle without advancing the speaker's position.
const ANIMATED_SLIDES = new Set(['1.1', '2.5', '3.3', '4.1', '4.5', '5.1', '6.1', '6.2', '7.1', '7.2', '7.3', '7.4', '7.7', '8.1', '9.1']);

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
      return slide.steps.map((name, step) => ({
        name: `${slide.id} · ${name}`,
        auto: ANIMATED_SLIDES.has(slide.id),
        ref: `docs/guion-parte-1.md · ${slide.id}`,
        source: screen,
        note: `Paso ${step + 1}/${slide.steps.length}: ${name}.${ANIMATED_SLIDES.has(slide.id) ? '\nIlustración animada breve, sin avance automático. Esperar a que termine antes de continuar. No es una grabación ni evidencia de una implementación.' : ''}\n\n${narration}`,
      }));
    }),
  ],
}));

export const TOTAL_BEATS = SCENES.reduce((n, scene) => n + scene.beats.length, 0);
