// src/router/index.js
import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home.vue'; // Asegúrate de que el componente esté en la ruta correcta
import Contact from '@/components/Contact.vue'; // Asegúrate de que el componente esté en la ruta correcta

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
];

export default new Router({
  routes
});
