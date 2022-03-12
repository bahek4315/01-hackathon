import './styles.css'

import { CustomMessage } from './modules/message.module';

import {ContextMenu} from './menu';

const menu = new ContextMenu('.menu');
menu.add(new CustomMessage('message', 'Кастомное сообщение'));
menu.open();