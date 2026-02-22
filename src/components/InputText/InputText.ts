import styles from './style.css?inline'

export class InputText extends HTMLElement {

  private shadow: ShadowRoot;
  private type = (this.getAttribute('type') as "text" | "textarea") || "text";
  private label = this.getAttribute('label') || ''

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.registerListeners();
  }

  disconnectedCallback() { }

  private registerListeners() { }

  private getTemplate(type: "text" | "textarea", label: string) {
    switch (type) {
      case "text":
        return `<input type="text" placeholder=${label}></input>`;
      case "textarea":
        return `<textarea placeholder=${label}></textarea>`
    }

  }

  private render() {
    this.shadow.innerHTML = `
      <style>${styles}</style>
      ${this.getTemplate(this.type, this.label)}
      ${this.label && `<label class="label">${this.label}</label>`}
    `
  }

}
