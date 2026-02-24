import styles from './style.css?inline'

export class ExpandableBlock extends HTMLElement {

  private shadow: ShadowRoot;
  private isOpen: boolean = (this.getAttribute('expanded') ?? false) === false;

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.registerListeners();
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
    const arrow = this.isOpen ? '▼' : '▶';
    const contentClass = this.isOpen ? "content" : "content hidden";
    this.shadow.innerHTML = `
      <style>${styles}</style>
      <div class="expand">
        <div class="header">
          ${label && `<div>${label}</div>`}
          <div class="arrow">${arrow}</div>
        </div>
        <div class="${contentClass}">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

