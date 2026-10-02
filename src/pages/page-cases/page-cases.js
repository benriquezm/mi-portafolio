import { LitElement, html, css } from 'lit';
import { globalStyles } from '../../styles.js';
import '../../components/ui-diagram/ui-diagram.js';

export class PageCases extends LitElement {
  static styles = [
    globalStyles,
    css`
      :host {
        display: block;
        animation: fadeIn 0.4s ease-in-out;
      }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }

      .header-cases {
        margin-bottom: 3rem;
      }

      .tag {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        color: var(--accent-blue);
        text-transform: uppercase;
        display: block;
        margin-bottom: 0.5rem;
      }

      h1 {
        font-family: var(--font-sans);
        font-size: 2.5rem;
        font-weight: 800;
        margin: 0;
        color: var(--text-primary);
      }

      /* Grid de Casos de Estudio */
      .cases-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 3rem;
      }

      .case-card {
        background: var(--bg-surface);
        border: 1px solid var(--border-color);
        border-radius: 1.5rem;
        padding: 2.5rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2.5rem;
      }

      @media (max-width: 1024px) {
        .case-card {
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
      }

      .case-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      h2 {
        font-family: var(--font-sans);
        font-size: 1.75rem;
        font-weight: 700;
        margin: 0 0 1rem 0;
        color: var(--text-primary);
      }

      p {
        font-family: var(--font-sans);
        color: var(--text-secondary);
        font-size: 1rem;
        line-height: 1.6;
        margin: 0 0 1.5rem 0;
      }

      .tech-stack {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
      }

      .tech-tag {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        background: rgba(255, 255, 255, 0.03);
        color: var(--text-secondary);
        padding: 0.25rem 0.75rem;
        border-radius: 0.5rem;
        border: 1px solid var(--border-color);
      }
    `
  ];

  constructor() {
    super();
    // Ejemplo de diagrama de arquitectura real en código Mermaid stringificado
    this.sampleArchitecture = `
      graph TD
        A[App Layout] --> B(Vaadin Router)
        B --> C[Page Home]
        B --> D[Page Cases]
        C --> E(Hero Section)
        C --> F(Ai Section)
        D --> G(Ui Diagram)
        style A fill:#1e293b,stroke:#3b82f6,stroke-width:2px,color:#fff
        style G fill:#020617,stroke:#06b6d4,stroke-width:2px,color:#fff
    `;
  }

  render() {
    return html`
      <div class="header-cases">
        <span class="tag">// Production Architectures</span>
        <h1>Casos de Estudio</h1>
      </div>

      <div class="cases-grid">
        <!-- Tarjeta de Proyecto 1 -->
        <div class="case-card">
          <div class="case-info">
            <h2>Refactorización Core Financiero SPA</h2>
            <p>
              Lorem ipsum dolor sit amet, desarrollo e implementación de una arquitectura modular basada en micro-frontends y Web Components nativos. Reducción drástica del tamaño de bundle y optimización del ciclo de renderizado bajo flujos reactivos.
            </p>
            <div class="tech-stack">
              <span class="tech-tag">LitElement</span>
              <span class="tech-tag">JavaScript ES6</span>
              <span class="tech-tag">Vite</span>
              <span class="tech-tag">Mermaid.js</span>
            </div>
          </div>
          
          <!-- Contenedor del Diagrama renderizado dinámicamente mediante código -->
          <div class="case-diagram">
            <ui-diagram .code="${this.sampleArchitecture}"></ui-diagram>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('page-cases', PageCases);
