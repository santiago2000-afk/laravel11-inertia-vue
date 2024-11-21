import { createRouter, createWebHistory } from 'vue-router';

// Importar los componentes que deseas cargar según la ruta
import Home from './Pages/Home.vue';
import Contact from './Pages/Contact.vue';

const routes = [
  {
    path: '/home',
    component: Home,
    name: 'home',
  },
  {
    path: '/contact',
    component: Contact,
    name: 'contact',
  },
  // Puedes añadir más rutas aquí
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
