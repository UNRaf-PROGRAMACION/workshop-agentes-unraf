import type { SceneDef } from 'beatdeck';
import { SECTION_TITLES, SLIDES, slideSource } from './talk';
import { config } from './deck.config';

export const SCENES: SceneDef[] = SLIDES.map((slides, scene) => ({
  id: String(scene + 1).padStart(2, '0'),
  title: SECTION_TITLES[scene],
  beats: [
    ...(scene === 0 ? [
      { name: 'En espera', note: 'Un clic muestra la portada.', ref: 'docs/guion-parte-1.md' },
      { name: 'Portada', source: `${config.title}\n${config.author}`, note: 'Presentar el workshop y a sus expositores. Un clic inicia la parte 1.', ref: 'Pedido de portada · docs/media/logounraf.png' },
    ] : []),
    ...slides.flatMap((slide) => {
      const { screen, narration } = slideSource(slide.id);
      return slide.steps.map((name, step) => ({
        name: `${slide.id} · ${name}`,
        ref: `docs/guion-parte-1.md · ${slide.id}`,
        source: screen,
        note: `Paso ${step + 1}/${slide.steps.length}: ${name}.\n\n${narration}`,
      }));
    }),
  ],
}));

export const TOTAL_BEATS = SCENES.reduce((n, scene) => n + scene.beats.length, 0);
