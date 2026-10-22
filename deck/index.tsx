import { defineDeck } from 'beatdeck';
import '../themes/neutral.css';
import '../themes/agent-ready.css';
import './deck.css';
import './game-visuals.css';
import { config } from './deck.config';
import { SCENES } from './scenes';
import { TalkScene } from './scenes/TalkScene';

function Stage() {
  return <>{SCENES.map((scene, index) => <TalkScene key={scene.id} index={index} />)}</>;
}

export default defineDeck({
  id: 'desarrollo-guiado-por-agentes-parte-1',
  title: config.title,
  lang: 'es',
  scenes: SCENES,
  Stage,
  Chrome: null,
  isBlack: ({ scene, beat }) => scene === 0 && beat === 0,
  fonts: ['400 36px "Inter Variable"', '700 80px "Roboto Condensed Variable"', '800 100px "Roboto Condensed Variable"', '400 32px "JetBrains Mono Variable"'],
  // No QR until the speaker supplies a real destination.
});
