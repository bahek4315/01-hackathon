import {Module} from '../core/module';
import {random} from '../utils';

export class FigureModule extends Module {
    trigger() {
        const maxWidth = window.innerWidth;
        const maxHeight = window.innerHeight;

        alert(`Random number from 0 to ${maxWidth}: ${random(0, maxWidth)}`);
    }
}