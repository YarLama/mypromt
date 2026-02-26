import { marksDefault } from '../../utils/constants';
import styles from './style.css?inline'

export class InputTask extends HTMLElement {

  private shadow: ShadowRoot;
  private _state: 'mark' | 'edit' = 'edit';
  private _taskText = "";
  private _markList: Map<string, string> = marksDefault;
  private _selectedMark: string = this._markList.keys().next().value || "";

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  get value() {
    const value = {
      "mark": `[${this._selectedMark}]`,
      "text": this._taskText
    }
    return value;
  }

  connectedCallback() {
    this.updateRender();
  }

  private updateRender() {
    this.render();
    this.registerListeners();
  }

  private registerListeners() {
    const removeEl = this.shadowRoot?.querySelector('.remove');
    const toMarkEl = this.shadowRoot?.querySelector('.to-mark-layer');
    const markLayerEl = this.shadowRoot?.querySelector('.mark-layer');
    const inputEl = this.shadowRoot?.querySelector('.input');

    if (removeEl) {
      removeEl.addEventListener('click', () => this.remove());
    }

    if (markLayerEl) {
      markLayerEl.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const markEl = target.closest('.mark');
        const toEditEl = target.closest('.to-edit-layer');
        
        if (markEl instanceof HTMLElement) {
          this._selectedMark = markEl.dataset.mark || "";
          this._state = "edit";
          this.updateRender();
          return;
        }

        if (toEditEl) {
          this._state = "edit";
          this.updateRender();
        }
      })
    }

    if (inputEl) {
      let timer: number | null = null;
      inputEl.addEventListener('input', (e) => {
        const target = e.currentTarget as HTMLElement;
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          this._taskText = target.textContent;
        }, 500);
      })
    }

    if (toMarkEl) {
      toMarkEl.addEventListener('click', () => {
        const inputText = this.shadowRoot?.querySelector('.input')?.textContent || "";
        this._taskText = inputText;
        this._state = "mark";
        this.updateRender();
      });
    }
  }

  private render() {
    const markElements = Array.from(this._markList, ([m, d]) => {
      return `<div class="mark" data-mark="${m}" title="${d}">${m}</div>`
    }).join("");
    const markLayerClass = ["mark-layer", this._state !== "mark" ? "hidden" : ""].join(" ");
    const editLayerClass = ["edit-layer", this._state !== "edit" ? "hidden" : ""].join(" ");

    this.shadow.innerHTML = `
      <style>${styles}</style>
      <div class="container">
        <div class="${markLayerClass}">
          ${markElements}
        </div>
        <div class="${editLayerClass}">
          <div class="to-mark-layer">${this._selectedMark}</div>
          <div contenteditable class="input">${this._taskText}</div>
        </div>
        <div class="tooltip">
          <div class="remove">✖</div>
        </div>
      </div>
    `
  }

}
