
export class Counter {
  constructor(counterEl, options) {
    this.counter = counterEl;
    this.counterInput = null;
    this.counterValue = null;
    this.options = options;
    this.initialValue = this.options.initialValue || 1;

    this.init();
    console.log(this);
  }

  init() {
    this.makeCounter();

    this.counter.addEventListener('click', (e) => this.handleCounterClick(e));
  }

  makeCounter() {
    const htmlString = `
      <img class="counter__operation counter__operation_dec" src="./assets/img/minus.svg", alt="">
      <input class="counter__input" type="text" value="${this.initialValue}" readonly>
      <img class="counter__operation counter__operation_inc" src="./assets/img/plus.svg", alt="">
    `;

    this.counter.insertAdjacentHTML('afterbegin', htmlString);
    this.counterInput = this.counter.querySelector('input');
    this.counterValue = Number(this.counterInput.getAttribute('value')) || 1;
  }

  handleCounterClick(e) {
    const { target } = e;

    if (target.classList.contains('counter__operation_dec')) {
      if (this.counterValue <= 1) {
        return;
      }

      this.dec();
    }
  
    if (target.classList.contains('counter__operation_inc')) {
      this.inc();
    }
  }

  dec() {
    this.counterValue -= 1;
    this.syncValue();
  }

  inc() {
    this.counterValue += 1;
    this.syncValue();
  }

  syncValue() {
    this.counterInput.value = this.counterValue;
    console.log(this);
  }
}
