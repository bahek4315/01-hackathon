import {Module} from '../core/module';

export class ClicksModule extends Module {
    trigger() {
        if (!document.querySelector('.click-window')) {
            const clickWindow = document.createElement('div');
            clickWindow.classList.add('click-window');
            clickWindow.style.position = 'relative';
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

            let time = 5;

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

                const closeButton = document.createElement('button');
                
                const closeResults = () => {
                    clickWindow.remove();
                    closeButton.removeEventListener('click', closeResults);
                }

                closeButton.addEventListener('click', closeResults);
                closeButton.style.position = 'absolute';
                closeButton.style.width = '25px';
                closeButton.style.height = '25px';
                closeButton.style.background = 'none';
                closeButton.style.border = 'none';
                closeButton.style.right = '5px';
                closeButton.style.top = '5px';
                closeButton.style.cursor = 'pointer';

                const cross1 = document.createElement('div');
                const cross2 = document.createElement('div');
                cross1.style.position = 'absolute';
                cross1.style.width = '25px';
                cross1.style.height = '2px';
                cross1.style.backgroundColor = '#6bbdf3'
                cross1.style.transform = 'rotate(45deg)';
                cross2.style.position = 'absolute';
                cross2.style.width = '25px';
                cross2.style.height = '2px';
                cross2.style.backgroundColor = '#6bbdf3'
                cross2.style.transform = 'rotate(-45deg)';
                
                closeButton.append(cross1);
                closeButton.append(cross2);   
                clickWindow.append(closeButton);

            }, time * 1000);
        }
    }
}



