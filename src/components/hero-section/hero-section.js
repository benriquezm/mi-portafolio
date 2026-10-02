import { LitElement, html, css } from 'lit';
import { globalStyles } from '../../styles.js';

export class HeroSection extends LitElement {
  static styles = [
    globalStyles,
    css`
      :host {
        display: block;
        margin-bottom: 4rem;
      }

      /* Contenedor Bento Grid Responsivo */
      .bento-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
      }

      @media (max-width: 768px) {
        .bento-grid {
          grid-template-columns: 1fr;
        }
      }

      /* Estilo base para las tarjetas Bento */
      .bento-card {
        background: var(--bg-surface);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border: 1px solid var(--border-color);
        border-radius: 1.5rem;
        padding: 2rem;
        box-sizing: border-box;
        transition: transform 0.2s ease, border-color 0.2s ease;
      }

      .bento-card:hover {
        border-color: rgba(59, 130, 246, 0.3);
        transform: translateY(-2px);
      }

      /* Tarjeta Principal (Ocupa dos columnas) */
      .main-profile {
        grid-column: span 2;
      }

      @media (max-width: 768px) {
        .main-profile {
          grid-column: span 1;
        }
      }

      /* Tipografías y Textos Formateados */
      h1 {
        font-family: var(--font-sans);
        font-size: 2.5rem;
        font-weight: 800;
        margin: 0 0 0.5rem 0;
        background: linear-gradient(135deg, #fff 60%, var(--accent-blue));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      h2 {
        font-family: var(--font-sans);
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--accent-blue);
        margin: 0 0 1.5rem 0;
      }

      p {
        font-family: var(--font-sans);
        font-size: 1rem;
        color: var(--text-secondary);
        line-height: 1.6;
        margin: 0 0 1.5rem 0;
      }

      /* Badge / Etiquetas Técnicas */
      .badge-container {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        margin-bottom: 1.5rem;
      }

      .badge {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        background: rgba(59, 130, 246, 0.1);
        color: var(--accent-blue);
        padding: 0.25rem 0.75rem;
        border-radius: 9999px;
        border: 1px solid rgba(59, 130, 246, 0.2);
      }

      /* Gráfica Interactiva Híbrida (70/30) */
      .hybrid-metric {
        margin: 1.5rem 0;
      }

      .metric-labels {
        display: flex;
        justify-content: space-between;
        font-family: var(--font-mono);
        font-size: 0.85rem;
        margin-bottom: 0.5rem;
      }

      .progress-bar-container {
        display: flex;
        height: 12px;
        border-radius: 9999px;
        overflow: hidden;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid var(--border-color);
      }

      .progress-dev {
        background: linear-gradient(90deg, var(--accent-blue), #4f46e5);
        width: 70%;
        height: 100%;
      }

      .progress-scrum {
        background: linear-gradient(90deg, var(--accent-emerald), #059669);
        width: 30%;
        height: 100%;
      }

      /* Botones de Acción Estilizados */
      .action-buttons {
        display: flex;
        gap: 1rem;
      }

      .btn {
        font-family: var(--font-sans);
        font-weight: 600;
        font-size: 0.9rem;
        padding: 0.75rem 1.5rem;
        border-radius: 0.75rem;
        text-decoration: none;
        transition: all 0.2s ease;
        display: inline-flex;
        align-items: center;
      }

      .btn-primary {
        background: var(--accent-blue);
        color: #fff;
        box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);
      }

      .btn-primary:hover {
        background: #1d4ed8;
        box-shadow: 0 6px 20px rgba(37, 99, 235, 0.6);
      }

      .btn-secondary {
        background: rgba(255, 255, 255, 0.03);
        color: var(--text-primary);
        border: 1px solid var(--border-color);
      }

      .btn-secondary:hover {
        background: rgba(255, 255, 255, 0.08);
      }
    `
  ];

  render() {
    return html`
      <div class="bento-grid">
        <!-- Bloque Principal de Presentación -->
        <div class="bento-card main-profile">
          <div class="badge-container">
            <span class="badge">VITE + LIT</span>
            <span class="badge">2026 ARCHITECTURE</span>
          </div>
          <h1>¡Hola! Soy Benito Enríquez Mora</h1>
          <h2>Senior Full Stack Developer / Tech Lead Ops / Scrum Master</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <div class="action-buttons">
            <a href="#" class="btn btn-primary">Descargar CV (PDF)</a>
            <a href="#" class="btn btn-secondary">LinkedIn</a>
          </div>
        </div>

        <!-- Bloque Lateral Metodológico (Balance Híbrido) -->
        <div class="bento-card">
          <h1>Enfoque Híbrido</h1>
          <p>
            Lorem ipsum dolor sit amet, enfoque metodológico y estratégico optimizado para la entrega de software continuo de alta calidad.
          </p>
          
          <div class="hybrid-metric">
            <div class="metric-labels">
              <span style="color: var(--accent-blue)">70% Dev / Tech Lead</span>
              <span style="color: var(--accent-emerald)">30% Scrum</span>
            </div>
            <div class="progress-bar-container">
              <div class="progress-dev" title="70% Dev / Tech Lead Operations"></div>
              <div class="progress-scrum" title="30% Scrum Master"></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('hero-section', HeroSection);
