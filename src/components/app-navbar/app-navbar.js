import { LitElement, html, css } from 'lit';

export class AppNavbar extends LitElement {
  static styles = css`
    :host {
      position: fixed;
      top: 1.5rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1000;
      width: 90%;
      max-width: 600px;
    }
    
    nav {
      background: rgba(30, 41, 59, 0.7);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      padding: 0.75rem 1.5rem;
      border-radius: 9999px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
    }
    
    a {
      color: #94a3b8;
      text-decoration: none;
      font-weight: 500;
      font-size: 0.9rem;
      transition: all 0.2s ease-in-out;
      font-family: 'Plus Jakarta Sans', sans-serif;
    }
    
    a:hover { 
      color: #3b82f6;
      text-shadow: 0 0 10px rgba(59, 130, 246, 0.4);
    }
  `;

  render() {
    return html`
      <nav>
        <a href="#/">Inicio</a>
        <a href="#filosofia">Mi Filosofía</a>
        <a href="#/casos">Casos de Estudio</a>
      </nav>
    `;
  }
}
customElements.define('app-navbar', AppNavbar);
