import './styles.css';
import {Greet} from './modules/greet.module';
import {CustomMessage} from './modules/message.module';
import {ContextMenu} from './menu';
import { Cards } from './modules/cards.module';


const menu = new ContextMenu('.menu');
menu.add(new CustomMessage('message', 'Кастомное сообщение'));
menu.add(new Greet('greet', 'Приветствие'));
menu.add(new Cards('cards', 'Выбери кота'));
menu.open();
