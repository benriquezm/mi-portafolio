import { LitElement, html, css } from 'lit';

export class AppNavbar extends LitElement {
  static styles = css`
    nav {
      background-color: #1e293b;
      padding: 1rem;
      display: flex;
      gap: 15px;
    }
    a {
      color: #f8fafc;
      text-decoration: none;
      font-weight: 500;
    }
    a:hover { color: #2563eb; }
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
