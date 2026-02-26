import { AppButton, ExpandableBlock, InputTaskGroup, InputText } from "./components";
import { InputTask } from "./components/InputTask/InputTask";
import { AppHandlers } from "./utils/actionLogic";

class App {
  static async init() {
    console.log('App initializing...');
    this.registerComponents();
    this.registerAppListeners();
    console.log('App initializing success!')
  }

  private static registerAppListeners() {
    document.addEventListener('app-action', (e) => {
      const { action } = e.detail;  
      AppHandlers[action]?.();
    });
  }

  private static registerComponents() {
    const defineComponent = (name: string, constructor: CustomElementConstructor) => {
      if (!customElements.get(name)) {
        customElements.define(name, constructor);
        console.log(`Registration component: <${name}>`)
      }
    }

    defineComponent('expandable-block', ExpandableBlock);
    defineComponent('input-text', InputText);
    defineComponent('app-button', AppButton);
    defineComponent('input-task', InputTask);
    defineComponent('input-task-group', InputTaskGroup);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => App.init())
} else {
  App.init();
}

export { App };
