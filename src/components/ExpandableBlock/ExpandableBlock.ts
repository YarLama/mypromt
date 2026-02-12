import styles from './style.css?inline'

export class ExpandableBlock extends HTMLElement {

  private shadow: ShadowRoot;
  private isOpen = true;

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.registerListeners();
  }

  disconnectedCallback() {
    // remove listeners, e.t.c
  }

  private registerListeners() {
    const header = this.shadowRoot?.querySelector('.header')
    const content = this.shadowRoot?.querySelector('.content')
    const arrow = this.shadowRoot?.querySelector('.arrow')

    header?.addEventListener('click', () => {
      content?.classList.toggle('hidden');
      this.isOpen = !this.isOpen;
      if (arrow) arrow.textContent = this.isOpen ? '▼' : '▶';
    })
  }

  private render() {
    const label = this.getAttribute('label') || ''
    this.shadow.innerHTML = `
      <style>${styles}</style>
      <div>
        <div class="header">
        ${label && `<div>${label}</div>`}
        <div class="arrow">▼</div>
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

