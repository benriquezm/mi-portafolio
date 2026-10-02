import { LitElement, html, css } from 'lit';
import '../components/app-navbar/app-navbar.js';
import { globalStyles } from '../styles.js';

export class AppLayout extends LitElement {
  static styles = [
    globalStyles,
    css`
      :host {
        display: block;
        background-color: #0b0f19;
        min-height: 100vh;
        color: #f8fafc;
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
      
      main { 
        max-width: 1200px;
        margin: 0 auto;
        padding: 7rem 2rem 4rem 2rem; /* Margen superior amplio para librar la Navbar */
        box-sizing: border-box;
      }
    `
  ];

  render() {
    return html`
      <app-navbar></app-navbar>
      <main>
        <slot></slot>
      </main>
    `;
  }
}
customElements.define('app-layout', AppLayout);

