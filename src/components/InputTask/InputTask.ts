import { marksDefault } from '../../utils/constants';
import styles from './style.css?inline'

export class InputTask extends HTMLElement {

  private shadow: ShadowRoot;
  private _state: 'mark' | 'edit' = 'edit';
  private _markList: Map<string, string> = marksDefault;
  private _selectedMark: string = this._markList.keys().next().value || "";

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.registerListeners();
    console.log(this._selectedMark)
  }

  private registerListeners() {
    const removeEl = this.shadowRoot?.querySelector('.remove');

    if (removeEl) {
      removeEl.addEventListener('click', () => this.remove());
    }
  }

  private render() {
    const markElements = Array.from(this._markList.keys()).map(m => {
      return `<div class="mark" data-mark="${m}">${m}</div>`
    }).join("");

    this.shadow.innerHTML = `
      <style>${styles}</style>
      <div class="container">
        
        <div class="tooltip">
          <div class="remove">x</div>
        </div>

        <div class="mark-layer">
          ${markElements}
          <div class="to-edit-layer">edit</div>
        </div>

        <div class="edit-layer">
          <div class="to-mark-layer">${this._selectedMark}</div>
          <div contenteditable class="input"></div>
        </div>

      </div>
    `
  }

}
