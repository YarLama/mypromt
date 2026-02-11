import { ExpandableBlock } from "./components";


class App {
  static async init() {
    console.log('App initializing...');
    this.registerComponents();
    console.log('App initializing success!')
  }

  private static registerComponents() {
    const defineComponent = (name: string, constructor: CustomElementConstructor) => {
      if (!customElements.get(name)) {
        customElements.define(name, constructor);
        console.log(`Registration component: <${name}>`)
      }
    }

    defineComponent('expandable-block', ExpandableBlock);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => App.init())
} else {
  App.init();
}

export { App };
