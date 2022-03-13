import {Module} from '../core/module';
import { random } from '../utils';

export class Sound extends Module { 
  trigger() {
    const audio = new Audio(`/sound/${random(1,10)}.mp3`);
    audio.volume = 0.2;
    audio.play();
  }
}