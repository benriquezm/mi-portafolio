import { css } from 'lit';

export const globalStyles = css`
  :host {
    /* Colores Base y Profundidad */
    --bg-main: #0b0f19;         /* Un oscuro más profundo y premium */
    --bg-surface: #1e293b70;    /* Superficie translúcida para tarjetas */
    --border-color: rgba(255, 255, 255, 0.06); /* Bordes sutiles de software premium */
    
    /* Textos */
    --text-primary: #f8fafc;
    --text-secondary: #94a3b8;
    
    /* Acentos */
    --accent-blue: #3b82f6;
    --accent-ai: #06b6d4;
    --accent-emerald: #10b981;
    
    /* Fuentes */
    --font-sans: 'Plus Jakarta Sans', system-ui, sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
  }
`;
