import Field from './Init';
import GamePlay from './score';

const fields = new Field();
const gameplay = new GamePlay(fields);
gameplay.init();
