import type { appEventsType } from '../../utils/types/actions';
import styles from './style.css?inline'

export class AppButton extends HTMLElement {

  private text = this.getAttribute('text') || '';
  private afterClickText = this.getAttribute('afterClickText') || '';
  private action = this.getAttribute('action') as appEventsType || '';
  private shadow: ShadowRoot;

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render()
    this.registerListeners()
  }

  disconnectionCallback() { }

  private registerListeners() {
    const button = this.shadowRoot?.querySelector('button');
    if (button && this.afterClickText) {
      button.addEventListener('click', () => {
        button.innerText = this.afterClickText;
        button.disabled = true;
        setTimeout(() => {
          button.innerText = this.text;
          button.disabled = false;
        }, 1000)
      })
    }

    this.onclick = () => {
      if (this.action) {
        this.dispatchEvent(new CustomEvent('app-action', {
          detail: { action: this.action },
          bubbles: true,
          composed: true
        }))
      }
    }

  }

  private render() {
    this.shadow.innerHTML = `
      <style>${styles}</style>
      <button>${this.text}</button>
    `
  }
}
