import './styles.css';
import {Greet} from './modules/greet.module';
import { Sound } from './modules/sound.module';
import {CustomMessage} from './modules/message.module';
import {ContextMenu} from './menu';
import {FigureModule} from './modules/figure.module';
import {ClicksModule} from './modules/clicks.module';

const menu = new ContextMenu('.menu');
menu.add(new Greet('greet', 'Приветствие'));
menu.add(new CustomMessage('message', 'Кастомное сообщение'));
menu.add(new FigureModule('figure', 'Создать рандомную фигуру'));
menu.add(new Sound('audio', 'Воспроизвести аудио'));
menu.add(new ClicksModule('clicks', 'Подсчет кликов'));
menu.open();
