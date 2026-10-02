import { LitElement, html } from 'lit';
import '../../components/hero-section/hero-section.js';
import '../../components/filosofia-section/filosofia-section.js';
import '../../components/ai-section/ai-section.js';

export class PageHome extends LitElement {
  render() {
    return html`
      <hero-section></hero-section>
      <filosofia-section id="filosofia"></filosofia-section>
      <ai-section></ai-section>
    `;
  }
}

customElements.define('page-home', PageHome);
