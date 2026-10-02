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
      { path: '/', component: 'page-home' },
      { path: 'casos', component: 'page-cases' },
    ]
  }
]);

const handleHashChange = () => {
  const hash = window.location.hash;

  // Interceptor click of user in filosofia
  if (hash === '#filosofia') {
    // if Pages Case, return root first
    if (window.location.pathname.includes('casos')) {
      Router.go('/');
    }
    
    // Wait an instant for DOM ready
    setTimeout(() => {
      const layout = document.querySelector('app-layout');
      const homePage = layout?.shadowRoot?.querySelector('page-home');
      const filosofiaSec = homePage?.shadowRoot?.getElementById('filosofia');
      
      if (filosofiaSec) {
        filosofiaSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
    return;
  }

  // Normal router of pages independents for the router
  const targetPath = hash.replace(/^#\/?/, '/') || '/';
  if (!hash.includes('filosofia') && router.baseUrl + targetPath !== window.location.pathname) {
    Router.go(targetPath);
  }
};

window.addEventListener('hashchange', handleHashChange);
window.addEventListener('load', handleHashChange);
