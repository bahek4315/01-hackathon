import {Module} from '../core/module';
import { random } from '../utils';
const AUDIOS_URL = `http://ch68282.tmweb.ru/`;
export class Sound extends Module { 
  trigger() {
    const audio = new Audio(`${AUDIOS_URL}/${random(1, 10)}.mp3`);
    audio.volume = 0.2;
    audio.play();
  }
}