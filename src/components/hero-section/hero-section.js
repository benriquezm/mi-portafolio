import { LitElement, html, css } from 'lit';

export class HeroSection extends LitElement {

  render() {
    return html`
      <div>Hero Section</div>
    `;
  }
}

customElements.define('hero-section', HeroSection);
