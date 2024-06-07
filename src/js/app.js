import Field from './Field';
import GamePlay from './Gameplay';

const fields = new Field();
const gameplay = new GamePlay(fields);
gameplay.init();
