import styles from './style.css?inline'

declare global {
  interface IInputTaskGroup extends HTMLElement {
    readonly value: Array<{
      "mark": string,
      "text": string
    }>
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

  private registerListeners() {
    const addBtn = this.shadowRoot?.querySelector('.add');

    if (addBtn) {
      addBtn.addEventListener('click', () => {
        this.addNewTask();
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
        <div class="task-group">
          <input-task></input-task>
        </div>
        <app-button class="add" text="Add task"></app-button>
      </div>
    `
  }
}
