import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  base: '/mi-portafolio/',
  plugins: [
    {
      name: 'generate-404',
      closeBundle() {
        // Usamos la alternativa nativa sugerida por Vite en lugar de __dirname
        const distPath = path.resolve(import.meta.dirname, 'dist');
        const indexPath = path.resolve(distPath, 'index.html');
        const fallbackPath = path.resolve(distPath, '404.html');
        
        if (fs.existsSync(indexPath)) {
          fs.copyFileSync(indexPath, fallbackPath);
          console.log('✨ [Senior Build Fix] 404.html generado con éxito para GitHub Pages.');
        }
      }
    }
  ]
});
