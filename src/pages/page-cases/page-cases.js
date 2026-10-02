import { LitElement, html } from 'lit';

export class PageCases extends LitElement {
  render() {
    return html`
      <p>Page Cases</p>
    `;
  }
}

customElements.define('page-cases', PageCases);
