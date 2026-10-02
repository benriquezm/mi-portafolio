import { LitElement, html, css } from 'lit';
import '../components/app-navbar/app-navbar.js';

export class AppLayout extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: #0f172a;
      min-height: 100vh;
      color: #f8fafc;
      font-family: sans-serif;
    }
    main { padding: 2rem; }
  `;

  render() {
    return html`
      <app-navbar></app-navbar>
      <main>
        <slot></slot> <!-- Aquí el Router inyectará las páginas -->
      </main>
    `;
  }
}

customElements.define('app-layout', AppLayout);
