import './styles.css';
import {BackgroundModule} from './modules/background.module';
import {Sound} from './modules/sound.module';
import {CustomMessage} from './modules/message.module';
import {Cards} from './modules/cards.module';
import {FigureModule} from './modules/figure.module';
import {ClicksModule} from './modules/clicks.module';
import {ContextMenu} from './menu';

const menu = new ContextMenu('.menu');
menu.add(new BackgroundModule('backround', 'Сменить фон'));
menu.add(new CustomMessage('message', 'Кастомное сообщение'));
menu.add(new FigureModule('figure', 'Создать рандомную фигуру'));
menu.add(new Sound('audio', 'Воспроизвести аудио'));
menu.add(new ClicksModule('clicks', 'Подсчет кликов'));
menu.add(new Cards('cards', 'Выбери кота'));

menu.open();
