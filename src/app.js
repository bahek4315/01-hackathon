import './styles.css';
import { Sound } from './modules/sound.module';
import { ContextMenu } from './menu';

const menu = new ContextMenu('.menu');

// menu.add(new Greet('greet'), 'dsadsa');
menu.add(new Sound('audio', 'Воспроизвести аудио'));
menu.open();
