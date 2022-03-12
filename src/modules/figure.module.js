import {Module} from '../core/module';
import {random} from '../utils';

export class FigureModule extends Module {
    trigger() {
        const createCircle = () => {
            const circle = document.createElement('div');
            circle.style.backgroundColor = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
            circle.style.width = '200px';
            circle.style.height = '200px';
            circle.style.borderRadius = '50%';
            circle.style.border = '1px solid #ffffff';
            
            return circle;
        }

        const createRectangle = () => {
            const rectangle = document.createElement('div');
            rectangle.style.backgroundColor = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
            rectangle.style.width = '200px';
            rectangle.style.height = '200px';
            rectangle.style.border = '1px solid #ffffff';
            
            return rectangle;
        }

        const createFigure = () => {
            const figure = document.createElement('div');
            figure.style.backgroundColor = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
            figure.style.width = '200px';
            figure.style.height = '200px';
            figure.style.borderRadius = `${random(5, 50)}%`;
            figure.style.border = '1px solid #ffffff';

            return figure;
        }

        const randomChoise = [createCircle, createRectangle, createFigure];

        let time = 5;

        const wrapper = document.createElement('div');
        wrapper.style.display = 'flex';
        wrapper.style.height = '300px';
        wrapper.style.width = '400px';
        wrapper.style.backgroundColor = '#313131';
        wrapper.style.color = '#6bbdf3';
        wrapper.style.borderRadius = '5px';
        wrapper.style.fontSize = '22px';
        wrapper.style.display = 'flex';
        wrapper.style.flexDirection = 'column';
        wrapper.style.alignItems = 'center';
        wrapper.style.justifyContent = 'flex-start';

        const timerText = document.createElement('div');
        timerText.style.margin = '20px 0';
        timerText.textContent = `Фигура удалится через ${time} секунд(ы)`;

        wrapper.append(timerText);
        wrapper.append(randomChoise[random(0, 2)]());
        document.body.append(wrapper);

        const interval = setInterval(() => {
            time--;
            timerText.textContent = `Фигура удалится через ${time} секунд(ы)`;
        }, 1000);

        setTimeout(() => {
            clearInterval(interval);
            wrapper.remove();
        }, time * 1000);
    }
}