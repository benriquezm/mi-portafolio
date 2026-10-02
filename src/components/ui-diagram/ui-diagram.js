import { LitElement, html, css } from 'lit';
import mermaid from 'mermaid';

// Inicialización de la configuración global de Mermaid optimizada para modo oscuro
mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  securityLevel: 'loose',
  themeVariables: {
    background: '#020617',
    primaryColor: '#1e293b',
    primaryTextColor: '#f8fafc',
    lineColor: '#334155',
    fontSize: '13px'
  }
});

export class UiDiagram extends LitElement {
  static properties = {
    // Recibe el string con el código del diagrama desde la página padre
    code: { type: String }
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }
    .diagram-card {
      background: #020617;
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 1rem;
      padding: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow-x: auto;
    }
    /* Estilos para asegurar que el SVG interno sea responsivo */
    .diagram-card svg {
      max-width: 100% !important;
      height: auto !important;
    }
  `;

  // Ciclo de vida de Lit: Se ejecuta cada vez que las propiedades cambian
  updated(changedProperties) {
    if (changedProperties.has('code') && this.code) {
      this.renderDiagram();
    }
  }

  async renderDiagram() {
    const container = this.shadowRoot.getElementById('mermaid-container');
    if (!container) return;

    // Generamos un ID único para evitar colisiones si hay múltiples diagramas en pantalla
    const uniqueId = `mermaid-${Math.floor(Math.random() * 100000)}`;
    
    try {
      // Limpiamos contenido previo
      container.innerHTML = '';
      
      // Renderizamos el código de texto a SVG usando la API asíncrona de Mermaid
      const { svg } = await mermaid.render(uniqueId, this.code.trim());
      container.innerHTML = svg;
    } catch (error) {
      console.error('❌ [Mermaid Render Error]:', error);
      container.innerHTML = `<span style="color: #ef4444; font-family: monospace;">Error rendering architecture diagram</span>`;
    }
  }

  render() {
    return html`
      <div class="diagram-card">
        <div id="mermaid-container"></div>
      </div>
    `;
  }
}
customElements.define('ui-diagram', UiDiagram);
