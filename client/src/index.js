var menu = document.querySelector('.nav__burger');
console.dir(menu);


class HtmlComponents {
  constructor(selector) {
    this.baseClass = 'component';
    this.el = document.querySelector(selector);
  }
  getElement(name) {
    return this.el.querySelector(`.${this.baseClass}__${name}`)
  }
  addModifier(modifier) {
    this.el.classList.add(`${this.baseClass}--${modifier}`);
  }
  removeModifier(modifier) {
    this.el.classList.remove(`${this.baseClass}--${modifier}`);
  }
}

class FlexNav extends HtmlComponents {
  constructor(selector) {
    super(selector);
    this.baseClass = 'nav';
    this.isOpen = false;

    this.burger = this.getElement('burger');

    this.burger.addEventListener('click', (e) => { this.open(e) });
    this.burger.addEventListener('touchend', (e) => { this.open(e) });
  }

  open(event) {
    event.preventDefault();
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.burger.addModifier('opened');
    } else {
      this.burger.removeModifier('opened');
    }
  }
}