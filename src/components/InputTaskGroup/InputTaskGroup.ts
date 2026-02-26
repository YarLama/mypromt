import styles from './style.css?inline'

declare global {
  interface IInputTaskGroup extends HTMLElement {
    readonly value: Array<{
      "mark": string,
      "text": string
    }>;
    readonly data: string;
  }

  interface HTMLElementTagNameMap {
    'input-task-group': IInputTaskGroup
  }
}

export class InputTaskGroup extends HTMLElement implements IInputTaskGroup {

  private shadow: ShadowRoot;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.registerListeners()
  }

  get value() {
    const groupEl = this.shadowRoot?.querySelector('.task-group');
    if (groupEl) {
      const inputEls = [...groupEl.children] as IInputTask[];
      const value = inputEls?.map(input => input.value);
      return value;
    }
    return [];
  }

  get data() {
    const dataEl = this.shadowRoot?.querySelector('.data') as IInputText;
    if (dataEl) {
      return dataEl.value;
    }
    return ""
  }

  private reset() {
    const dataEl = this.shadowRoot?.querySelector('.data') as IInputText;
    const groupEl = this.shadowRoot?.querySelector('.task-group');
    dataEl.value = "";
    groupEl?.replaceChildren();
    this.addNewTask();
  }

  private registerListeners() {
    const addBtn = this.shadowRoot?.querySelector('.add');
    const resetBtn = this.shadowRoot?.querySelector('.reset');

    if (addBtn) {
      addBtn.addEventListener('click', () => {
        this.addNewTask();
      })
    }
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.reset();
      })
    }
  }

  private addNewTask() {
    const groupEl = this.shadowRoot?.querySelector('.task-group');
    const newEl = document.createElement('input-task');
    const inputEls = groupEl?.children;
    if (inputEls?.length) {
      const inputArr = [...inputEls] as IInputTask[];
      const lastEl = inputArr.splice(-1)[0];
      if (lastEl.value.text === "") {
        lastEl.focus();
        return;
      }
      groupEl?.appendChild(newEl);
      newEl.focus();
    } else {
      groupEl?.appendChild(newEl);
      newEl.focus();
    }
  }

  private render() {

    this.shadow.innerHTML = `
      <style>${styles}</style>
      <div class="container">
        <input-text class="data" type="textarea" label="data"></input-text>
        <div class="task-group">
          <input-task></input-task>
        </div>
        <app-button class="add" text="Add task"></app-button>
        <app-button class="reset" text="Reset"></app-button>
      </div>
    `
  }
}
