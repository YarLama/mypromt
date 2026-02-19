import styles from './style.css?inline'

export class InputText extends HTMLElement {

  private shadow: ShadowRoot;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.registerListeners();
  }

  disconnectedCallback() { }

  private registerListeners() {
    const input = this.shadowRoot?.querySelector('input');
    const textarea = this.shadowRoot?.querySelector('textarea');
  }

  private getTemplate(type: "text" | "textarea", label: string) {
    switch(type) {
      case "text":
        return `<input type="text" placeholder=${label}></input>`;
      case "textarea":
        return `<textarea placeholder=${label}></textarea>`
    }

  }

  private render() {
    const type = (this.getAttribute('type') as "text" | "textarea") || "text";
    const label = this.getAttribute('label') || ''
    this.shadow.innerHTML = `
      <style>${styles}</style>
      ${this.getTemplate(type, label)}
      ${ label && `<label class="label">${label}</label>` }
    `
  }

}
