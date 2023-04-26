class Square extends HTMLElement {

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const div = document.createElement('div');
    const style = document.createElement('style');
    shadow.appendChild(style);
    shadow.appendChild(div);

    shadow.querySelector('style').textContent = `
      div {
        width: ${this.getAttribute('l')}px;
        height: ${this.getAttribute('l')}px;
        background-color: ${this.getAttribute('c')};
      }
    `;
  }
}

customElements.define('wc-square', Square);
