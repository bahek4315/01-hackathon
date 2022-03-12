import './styles.css';
import {Greet} from './modules/greet.module';
import {ContextMenu} from './menu';

const menu = new ContextMenu('.menu');
menu.add(new CustomMessage('message', 'Кастомное сообщение'));
menu.add(new Greet('greet', 'Приветствие'));
menu.open();
