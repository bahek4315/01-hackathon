import {Menu} from './core/menu'

export class ContextMenu extends Menu {
  open() {
    document.body.style.overflow = 'hidden';
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.el.style.postion = 'absolute';
      this.el.style.top = `${event.y}px`;
      this.el.style.left = `${event.x}px`;
      this.el.style.display = 'block';
    })
  }

  close() {
    this.el.style.display = 'none';
  }

  add(module) {
    this.el.insertAdjacentHTML('beforeend', module.toHTML());
    const newModule = this.el.querySelector(`[data-type='${module.type}']`);
    newModule.addEventListener('click', module.trigger)
  }
}
