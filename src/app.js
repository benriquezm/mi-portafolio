import { Router } from '@vaadin/router';
import './core/app-layout.js';
import './pages/page-home/page-home.js';
import './pages/page-cases/page-cases.js';

const outlet = document.getElementById('app');
const router = new Router(outlet);

router.setRoutes([
  {
    path: '/',
    component: 'app-layout',
    children: [
      // Mapeo dinámico controlado por hashes
      { path: '/', component: 'page-home' },
      { path: 'casos', component: 'page-cases' },
    ]
  }
]);

// Manejador global senior para traducir el Hash en navegación para el Router
const handleHashChange = () => {
  const hash = window.location.hash;
  
  // Si el hash apunta a la sección interna de filosofía, forzamos al router a quedarse en Home
  if (hash.startsWith('#filosofia')) {
    Router.go('/');
    // Damos un pequeño respiro para que el DOM de page-home se renderice y se mueva al ID
    setTimeout(() => {
      const element = document.querySelector('app-layout')?.shadowRoot
        ?.querySelector('page-home')?.shadowRoot
        ?.getElementById('filosofia');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    return;
  }

  // Traducción de rutas base: '#/casos' -> '/casos'
  const targetPath = hash.replace(/^#\/?/, '/') || '/';
  if (router.baseUrl + targetPath !== window.location.pathname) {
    Router.go(targetPath);
  }
};

window.addEventListener('hashchange', handleHashChange);
window.addEventListener('load', handleHashChange);
