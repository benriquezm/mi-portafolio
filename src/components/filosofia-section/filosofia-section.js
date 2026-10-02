import { LitElement, html, css } from 'lit';
import { globalStyles } from '../../styles.js';

export class FilosofiaSection extends LitElement {
  static styles = [
    globalStyles,
    css`
      :host {
        display: block;
        margin-bottom: 5rem;
        scroll-margin-top: 7rem; /* Para que al hacer scroll con el Navbar no se tape el título */
      }

      .section-header {
        margin-bottom: 2.5rem;
      }

      .section-tag {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        color: var(--accent-emerald);
        text-transform: uppercase;
        letter-spacing: 0.1em;
        display: block;
        margin-bottom: 0.5rem;
      }

      h2 {
        font-family: var(--font-sans);
        font-size: 2rem;
        font-weight: 800;
        margin: 0;
        color: var(--text-primary);
      }

      /* Contenedor de Hitos de Filosofía */
      .timeline-container {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      /* Tarjeta de Filosofía Estilo Premium (Contraste Alto) */
      .philosophy-card {
        background: var(--bg-surface);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border: 1px solid var(--border-color);
        border-radius: 1.25rem;
        padding: 2rem;
        display: flex;
        gap: 2rem;
        align-items: flex-start;
        transition: all 0.2s ease-in-out;
      }

      .philosophy-card:hover {
        border-color: rgba(16, 185, 129, 0.3); /* Destello verde esmeralda al pasar el mouse */
        background: rgba(30, 41, 59, 0.5);
        transform: scale(1.01);
      }

      /* Indicador Numérico / Icono Técnico */
      .card-index {
        font-family: var(--font-mono);
        font-size: 1rem;
        font-weight: 600;
        color: var(--accent-emerald);
        background: rgba(16, 185, 129, 0.1);
        border: 1px solid rgba(16, 185, 129, 0.2);
        width: 40px;
        height: 40px;
        border-radius: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .card-content {
        flex-grow: 1;
      }

      h3 {
        font-family: var(--font-sans);
        font-size: 1.25rem;
        font-weight: 700;
        margin: 0 0 0.5rem 0;
        color: var(--text-primary);
      }

      p {
        font-family: var(--font-sans);
        font-size: 0.95rem;
        color: var(--text-secondary);
        line-height: 1.6;
        margin: 0;
      }

      @media (max-width: 640px) {
        .philosophy-card {
          flex-direction: column;
          gap: 1rem;
          padding: 1.5rem;
        }
      }
    `
  ];

  render() {
    return html`
      <!-- El ID 'filosofia' ya se encuentra mapeado en el contenedor superior para el scroll automático -->
      <div class="section-header">
        <span class="section-tag">// Leadership & Frameworks</span>
        <h2>Mi Filosofía de Trabajo</h2>
      </div>

      <div class="timeline-container">
        <!-- Pilar 1: Entrega de Valor Continua -->
        <div class="philosophy-card">
          <div class="card-index">01</div>
          <div class="card-content">
            <h3>Arquitectura Limpia & Código Sostenible</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <!-- Pilar 2: Agilidad Real, No de Manual -->
        <div class="philosophy-card">
          <div class="card-index">02</div>
          <div class="card-content">
            <h3>Agilidad Empática y Gestión de Bloqueos (Scrum)</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mánagers e ingenieros colaborando bajo métricas claras. Automatizando procesos operativos para enfocar el 100% de la energía del equipo en liberar features estables en producción.
            </p>
          </div>
        </div>

        <!-- Pilar 3: Operaciones y Tech Lead Ops -->
        <div class="philosophy-card">
          <div class="card-index">03</div>
          <div class="card-content">
            <h3>Cultura DevOps y Automatización</h3>
            <p>
              Lorem ipsum dolor sit amet, el software no termina cuando el código compila. Diseñar con observabilidad, pipelines de integración eficientes y un enfoque sólido en mitigar riesgos antes de que impacten al usuario final.
            </p>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('filosofia-section', FilosofiaSection);
