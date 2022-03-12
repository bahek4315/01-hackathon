import {Module} from '../core/module'
import { random } from '../utils';

export class Sound extends Module {
  
  trigger() {  
    const arrSound = ['/sound/1.mp3', '/sound/2.mp3', '/sound/3.mp3'];
    const audio = new Audio(arrSound[random(0, arrSound.length - 1)]);
    audio.play(); 
  }
}