import {Module} from '../core/module';

export class ClicksModule extends Module {
    trigger() {
        if (!document.querySelector('.click-window')) {
            const clickWindow = document.createElement('div');
            clickWindow.classList.add('click-window');
            clickWindow.style.width = '300px';
            clickWindow.style.height = '100px';
            clickWindow.style.margin = '0 auto';
            clickWindow.style.backgroundColor = '#313131';
            clickWindow.style.color = '#6bbdf3';
            clickWindow.style.borderRadius = '5px';
            clickWindow.style.display = 'flex';
            clickWindow.style.flexDirection = 'column';
            clickWindow.style.justifyContent = 'center';
            clickWindow.style.alignItems = 'center';

            const clickMessage = document.createElement('span');
            clickMessage.style.fontSize = '22px';
            clickMessage.style.marginBottom = '10px';
            clickMessage.style.textAlign = 'center';
            clickMessage.textContent = 'Кликай что есть мочи!';

            let time = 10;

            const countMessage = document.createElement('span');
            countMessage.textContent = `Осталось ${time} секунд(ы)`;

            let counter = -1;
            let doubleClicks = 0;

            clickWindow.append(clickMessage);
            clickWindow.append(countMessage);
            document.body.append(clickWindow);

            const interval = setInterval(() => {
                time--;
                countMessage.textContent = `Осталось ${time} секунд(ы)`;
            }, 1000);

            const clickCounting = () => {
                counter++;
            };

            const doubleclickCounting = () => {
                doubleClicks++;
            };

            document.addEventListener('click', clickCounting);
            document.addEventListener('dblclick', doubleclickCounting);

            setTimeout(() => {
                clearInterval(interval);
                countMessage.remove();
                document.removeEventListener('click', clickCounting);
                document.removeEventListener('dblclick', doubleclickCounting);
                clickMessage.textContent = 'Ваш результат:';
                const resultMessage = document.createElement('span');
                resultMessage.textContent = `${counter - doubleClicks * 2} простых и ${doubleClicks} двойных кликов!`;
                resultMessage.style.fontSize = '16px';
                clickWindow.append(resultMessage);
            }, time * 1000);

            setTimeout(() => clickWindow.remove(), time * 1000 + 4000);
        }
    }
}



