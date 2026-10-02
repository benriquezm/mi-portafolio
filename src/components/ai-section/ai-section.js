import { LitElement, html, css } from 'lit';
import { globalStyles } from '../../styles.js';

export class AiSection extends LitElement {
  static styles = [
    globalStyles,
    css`
      :host {
        display: block;
        margin-bottom: 5rem;
      }

      /* Contenedor Principal con Borde de Gradiente Neón */
      .ai-container {
        position: relative;
        background: rgba(15, 23, 42, 0.6);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border-radius: 1.5rem;
        padding: 2.5rem;
        border: 1px solid rgba(6, 182, 212, 0.15);
        box-shadow: 0 20px 40px -15px rgba(6, 182, 212, 0.1);
        overflow: hidden;
      }

      /* Efecto de resplandor de fondo */
      .ai-container::before {
        content: '';
        position: absolute;
        top: -20%;
        right: -10%;
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%);
        z-index: 0;
        pointer-events: none;
      }

      .ai-content {
        position: relative;
        z-index: 1;
      }

      .section-tag {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        color: var(--accent-ai);
        text-transform: uppercase;
        letter-spacing: 0.1em;
        display: block;
        margin-bottom: 0.5rem;
      }

      h2 {
        font-family: var(--font-sans);
        font-size: 2rem;
        font-weight: 800;
        margin: 0 0 1rem 0;
        color: var(--text-primary);
      }

      .description {
        font-family: var(--font-sans);
        color: var(--text-secondary);
        font-size: 1rem;
        line-height: 1.6;
        margin-bottom: 2.5rem;
        max-width: 800px;
      }

      /* Consola del Repositorio de Prompts */
      .prompt-box {
        background: #020617;
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 1rem;
        overflow: hidden;
      }

      .prompt-header {
        background: #0f172a;
        padding: 0.75rem 1.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      }

      .window-dots {
        display: flex;
        gap: 6px;
      }

      .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.2);
      }
      .dot-active { background: var(--accent-ai); }

      .prompt-lang {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        color: var(--text-secondary);
      }

      .prompt-body {
        padding: 1.5rem;
        font-family: var(--font-mono);
        font-size: 0.9rem;
        line-height: 1.6;
        color: #e2e8f0;
      }

      .keyword { color: var(--accent-ai); }
      .string { color: var(--accent-emerald); }
      .comment { color: #64748b; font-style: italic; }

      /* Tarjetas de Métricas de Impacto Co-Pilot/Gemini */
      .ai-metrics {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
        margin-top: 2rem;
      }

      @media (max-width: 768px) {
        .ai-metrics { grid-template-columns: 1fr; }
      }

      .metric-card {
        background: rgba(30, 41, 59, 0.4);
        border: 1px solid rgba(255, 255, 255, 0.03);
        border-radius: 0.75rem;
        padding: 1.25rem;
      }

      .metric-num {
        font-family: var(--font-sans);
        font-size: 1.75rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 0.25rem;
      }

      .metric-title {
        font-family: var(--font-sans);
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--accent-ai);
        margin-bottom: 0.5rem;
      }

      .metric-desc {
        font-family: var(--font-sans);
        font-size: 0.8rem;
        color: var(--text-secondary);
        line-height: 1.4;
      }
    `
  ];

  render() {
    return html`
      <div class="ai-container">
        <div class="ai-content">
          <span class="section-tag">// AI Leverage & Efficiency</span>
          <h2>Repositorio de Prompts Personales</h2>
          <p class="description">
            Lorem ipsum dolor sit amet, ingenieros que saben apalancarse de Copilot y Gemini para acelerar los entregables de la empresa de manera óptima y automatizada.
          </p>

          <!-- Consola Visual del Prompt -->
          <div class="prompt-box">
            <div class="prompt-header">
              <div class="window-dots">
                <div class="dot dot-active"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </div>
              <span class="prompt-lang">architecture-prompt.md</span>
            </div>
            <div class="prompt-body">
              <span class="comment"># Contexto: Actúa como un experto en Web Components y Lit v3...</span><br>
              <span class="keyword">Genera</span> una estructura de componente reactivo que implemente <span class="string">"Shadow DOM"</span> y herede los tokens de diseño globales.<br>
              <span class="keyword">Restricciones:</span> Evita librerías pesadas de terceros, optimiza el ciclo de vida actualizado e integra un tipado limpio.<br>
              <span class="comment">// Objetivo: Reducir el boilerplate operativo del equipo en un 40%</span>
            </div>
          </div>

          <!-- Bloque de Impacto de IA -->
          <div class="ai-metrics">
            <div class="metric-card">
              <div class="metric-num">-40%</div>
              <div class="metric-title">Tiempo de Boilerplate</div>
              <div class="metric-desc">Lorem ipsum dolor sit amet, reducción drástica de tiempos operativos en configuraciones iniciales.</div>
            </div>
            <div class="metric-card">
              <div class="metric-num">2.5x</div>
              <div class="metric-title">Velocidad de Feature Delivery</div>
              <div class="metric-desc">Lorem ipsum dolor sit amet, aceleración de entregables críticos mediante flujos de prompts validados.</div>
            </div>
            <div class="metric-card">
              <div class="metric-num">100%</div>
              <div class="metric-title">Estandarización de Código</div>
              <div class="metric-desc">Lorem ipsum dolor sit amet, generación de código consistente alineado a guías de diseño de la empresa.</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('ai-section', AiSection);
