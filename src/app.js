import './styles.css';
import { BackgroundModule } from './modules/background.module';
import { ContextMenu } from './menu';

const menu = new ContextMenu('.menu');
menu.add(new BackgroundModule('backround', 'Сменить фон'));
menu.open();