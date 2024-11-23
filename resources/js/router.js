import { createRouter, createWebHistory } from 'vue-router';
import Home from './Pages/Home.vue';

const routes = [
  { path: '/dashboard', name: 'home', component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
