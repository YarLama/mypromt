import type appEventsType from '../../utils/types/actions';
import styles from './style.css?inline'

export class AppButton extends HTMLElement {

  private label = this.getAttribute('label') || '';
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

  disconnectionCallback() {}

  private registerListeners() {
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
      <button>${this.label}</button>
    `
  }
}
