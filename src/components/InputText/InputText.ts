import styles from './style.css?inline'

declare global {

  interface IInputText extends HTMLElement {
    value: string;
  }

  interface HTMLElementTagNameMap {
    'input-text': IInputText;
  }
}

export class InputText extends HTMLElement implements IInputText {

  private shadow: ShadowRoot;
  private type = (this.getAttribute('type') as "text" | "textarea") || "text";
  private label = this.getAttribute('label') || ''

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  get value(): string {
    const inputText = this.shadowRoot?.querySelector("input")?.value;
    const textareaText = this.shadowRoot?.querySelector("textarea")?.value;
    const responce = this.type === "text" ? inputText : textareaText;

    return responce ?? "";
  }

  set value(text: string) {
    const inputText = this.shadowRoot?.querySelector("input");
    const textareaText = this.shadowRoot?.querySelector("textarea");
    this.type === "text" 
      ? inputText && (inputText.value = text) 
      : textareaText && (textareaText.value = text);
  }

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
