import './styles.css';
import {Greet} from './modules/greet.module';
import {CustomMessage} from './modules/message.module';
import {ContextMenu} from './menu';
import {FigureModule} from './modules/figure.module'

const menu = new ContextMenu('.menu');
menu.add(new CustomMessage('message', 'Кастомное сообщение'));
menu.add(new Greet('greet', 'Приветствие'));
menu.add(new FigureModule('figure', 'Создать рандомную фигуру'));
menu.open();
