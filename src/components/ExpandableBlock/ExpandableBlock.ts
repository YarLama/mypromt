import styles from './style.css?inline'

export class ExpandableBlock extends HTMLElement {
 
  private shadow: ShadowRoot;

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    // remove listeners, e.t.c
  }

  private render() {
    this.shadow.innerHTML = `
      <style>${styles}</style>
      <div>
        <div>Test ExpandableBlock</div>
        <!-- future web components childs -->
        <div class="test_content">
          <slot></slot>
        </div>
      </div>
    `
  }
}

