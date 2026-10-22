import { defineDeck } from 'beatdeck';
import '../themes/neutral.css';
import './deck.css';
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
  isBlack: ({ scene, beat }) => scene === 0 && beat === 0,
  fonts: ['400 100px "Inter Variable"', '600 100px "Inter Variable"', '400 32px "JetBrains Mono Variable"'],
  // No QR until the speaker supplies a real destination.
});
