import { Module } from '../core/module'

export class BackgroundModule extends Module {
   trigger() {
      const button = document.createElement('button');
      button.classList.add('button');
      button.textContent = 'Изменить цвет фона';
      document.body.append(button);

      button.addEventListener('click', () => {
         document.body.style.backgroundColor = rgb(random(0, 255), random(0, 255), random(0, 255));
         document.body.style.transition = 'background, .4s';
      });
      setTimeout(() => button.remove, 3000);
}
}