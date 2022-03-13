import {Module} from '../core/module';

export class Greet extends Module {
    trigger() {
        if(!document.querySelector('.greet')) {
            const divHTML = document.createElement('div');
            divHTML.classList.add('greet');
            divHTML.style.display = 'flex';
            divHTML.style.height = '50px';
            divHTML.style.width = '150px';
            divHTML.style.fontSize = '16px';
            divHTML.style.borderRadius = '5px';
            divHTML.style.backgroundColor = '#313131';
            divHTML.style.color = '#6bbdf3';
            divHTML.style.justifyContent = 'center';
            divHTML.style.alignItems = 'center';
            const innerTextHTML = document.createElement('div');
            innerTextHTML.textContent = 'Hello there!';
            divHTML.appendChild(innerTextHTML);
            document.body.append(divHTML);
            setTimeout(() => divHTML.remove(), 2000);
        }
    }
}