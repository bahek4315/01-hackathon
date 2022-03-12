import {Module} from '../core/module';

export class Greet extends Module {
    trigger() {
        const divHTML = document.createElement('div');
        divHTML.textContent = 'Hello there!';
        document.body.append(divHTML);
        setTimeout(() => divHTML.remove(), 2000);
    }
}