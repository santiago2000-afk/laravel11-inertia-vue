<template>
  <div :class="{ 'closed-menu': isMenuClosed }">
    <nav class="vertical-menu-wrapper">
      <!-- Logo y botón para abrir/cerrar menú -->
      <div class="vertical-menu-logo">
        <Logo />
        <span class="open-menu-btn" @click="toggleMenu">
          <hr /><hr /><hr />
        </span>
      </div>
      <!-- Menú de navegación -->
      <ul class="vertical-menu">
        <li><router-link to="/home">Home</router-link></li>
        <li><Link href="contact">Contact</Link></li>
      </ul>
    </nav>

    <!-- Contenido principal -->
    <div class="content-wrapper">
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// Importa el componente de logo si lo separas en un archivo distinto
//import Logo from './Logo.vue'; 

import {Link} from "@inertiajs/inertia-vue3";

export default {
  components: {
    //Logo
    Link
  },
  data() {
    return {
      isMenuClosed: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuClosed = !this.isMenuClosed;
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  background: #f4f5f7;
  font-family: 'Arial', sans-serif;
}

nav {
  position: fixed;
  width: 100%;
  max-width: 300px;
  bottom: 0;
  top: 0;
  display: block;
  min-height: 300px;
  height: 100%;
  color: #ffffff;
  background: #2a2a2a;
  opacity: 0.95;
  transition: all 300ms ease;
}

nav .vertical-menu hr {
  opacity: 0.1;
  border-width: 0.5px;
  border-color: #555;
}

nav ul {
  width: 90%;
  padding-inline-start: 0;
  margin: 10px;
  height: calc(100% - 20px);
}

nav .vertical-menu-logo {
  padding: 20px;
  font-size: 1.3em;
  font-weight: bold;
  color: #ffffff;
  position: relative;
}

nav .vertical-menu-logo .open-menu-btn {
  width: 30px;
  height: max-content;
  position: absolute;
  display: block;
  right: 20px;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
}

nav .vertical-menu-logo .open-menu-btn hr {
  margin: 5px 0;
  background-color: #ffffff;
}

nav li {
  list-style: none;
  padding: 12px;
  cursor: pointer;
  color: #bbb;
  transition: background 200ms, color 200ms;
}

nav li:hover {
  color: #4b69b3;
  background-color: #383838;
}

nav li#user-info {
  position: absolute;
  bottom: 0;
  width: 80%;
}

nav li#user-info > span {
  display: block;
  float: right;
  font-size: 0.9em;
  position: relative;
  opacity: 0.6;
}

nav li#user-info > span:after {
  content: '';
  width: 12px;
  height: 12px;
  display: block;
  position: absolute;
  background: #4caf50;
  left: -20px;
  top: 0;
  bottom: 0;
  margin: auto;
  border-radius: 50%;
}

.content-wrapper {
  width: calc(100% - 300px);
  height: 100%;
  position: fixed;
  background: #ffffff;
  left: 300px;
  padding: 20px;
  transition: all 300ms ease;
}

.closed-menu .content-wrapper {
  width: 100%;
  left: 50px;
}

.vertical-menu-wrapper .vertical-menu-logo div {
  transition: all 100ms ease;
}

.closed-menu .vertical-menu-wrapper .vertical-menu-logo div {
  margin-left: -100px;
}

.vertical-menu-wrapper .vertical-menu-logo .open-menu-btn {
  transition: all 300ms ease;
}

.closed-menu .vertical-menu-wrapper .vertical-menu-logo .open-menu-btn {
  left: 7px;
  right: 100%;
}

.closed-menu .vertical-menu-wrapper ul,
.closed-menu .vertical-menu-wrapper hr {
  margin-left: -300px;
}

.vertical-menu-wrapper ul,
.vertical-menu-wrapper hr {
  transition: all 100ms ease;
}

.content-wrapper {
  background: #ebebeb;
}

.content {
  width: 90%;
  min-height: 90%;
  background: #fff;
  border-radius: 10px;
  padding: 30px;
}
</style>
