import {Module} from '../core/module';
import { random } from '../utils.js';

export class CustomMessage extends Module {

  trigger() {
          if (!document.querySelector('.message__container')) {
      let time = 5;
      const messageBox = ['А может изменим цвет экрана?', 'Хочешь услышать приятный звук?' , 'Посчитаем сколько раз ты кликнул?' , 'Можно просто читать сообщение.', 'Привет, давай знакомиться!'];
      let message = messageBox[random(0, messageBox.length - 1)];
      const customMessageContainer = document.createElement('div');
      customMessageContainer.classList.add('message__container');
      customMessageContainer.style.width = '400px';
      customMessageContainer.style.height = '200px';
      customMessageContainer.style.backgroundColor = '#313131';
      customMessageContainer.style.color = '#6bbdf3';
      customMessageContainer.style.borderRadius = '5px';
      customMessageContainer.style.fontSize = '22px';
      customMessageContainer.style.display = 'flex';
      customMessageContainer.style.flexDirection = 'column';
      customMessageContainer.style.alignItems = 'center';
      customMessageContainer.style.justifyContent = 'center';
      const customMessageDiv = document.createElement('div'); 
      const customMessageSpan = document.createElement('span');
      customMessageSpan.textContent = `Сообщение пропадет через ${time} секунд(ы)`;
      customMessageSpan.style.display = 'inline-block';
      customMessageSpan.style.fontSize = '16px';
      customMessageSpan.style.paddingTop = '30px';      
       customMessageDiv.textContent = `${message}`;
       customMessageContainer.append(customMessageDiv);
       customMessageContainer.append(customMessageSpan);
      document.body.append(customMessageContainer);

      const interval = setInterval(() => {
        time -= 1;
        customMessageSpan.textContent = `Сообщение пропадет через ${time} секунд(ы)`;
      }, 1000);

      setTimeout(() => {
        customMessageContainer.remove();
        clearInterval(interval);
      }, time * 1000);
    }
  }

}
