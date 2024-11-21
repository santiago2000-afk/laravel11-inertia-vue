<template>
  <div :class="['sidebar', { 'is-closed': isMenuClosed }]">
    <!-- Sidebar Header -->
    <div class="sidebar-header">
      <!-- Toggler Button usando FontAwesome -->
      <button @click="toggleMenu" class="menu-toggle-btn">
        <i class="fas fa-bars"></i>
      </button>
    </div>

    <!-- Menu Items -->
    <ul class="sidebar-menu">
      <li v-for="item in filteredMenuItems" :key="item.name" class="menu-item">
        <router-link :to="item.path" class="menu-link">
          <!-- Icono de menú -->
          <i :class="item.icon" class="menu-icon"></i>
          <!-- Texto del menú, solo visible cuando el sidebar está abierto -->
          <span v-if="!isMenuClosed" class="menu-text">{{ item.name }}</span>
        </router-link>
      </li>
    </ul>

    <!-- Logout Button, solo visible cuando el sidebar está abierto -->
    <div v-if="!isMenuClosed" class="logout">
      <button @click="logout" class="logout-btn">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuClosed: false, // Estado de apertura/cierre del sidebar
      searchQuery: '',
      menuItems: [
        { name: 'Home', path: '/home', icon: 'fas fa-home' },
        { name: 'Contact', path: '/contact', icon: 'fas fa-envelope' },
        { name: 'About', path: '/about', icon: 'fas fa-info-circle' },
        { name: 'Settings', path: '/settings', icon: 'fas fa-cog' },
      ],
    };
  },
  computed: {
    filteredMenuItems() {
      return this.menuItems.filter(item =>
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuClosed = !this.isMenuClosed; // Cambia el estado del sidebar
    },
    logout() {
      console.log('Logout');
    },
  },
};
</script>

<style scoped>
/* Variables de diseño (paleta profesional) */
:root {
  --sidebar-bg: #2f3b48; /* Azul oscuro */
  --sidebar-color: #e4e7ea; /* Gris claro */
  --sidebar-hover-bg: #34495e; /* Azul grisáceo */
  --sidebar-closed-width: 70px; /* Ancho del sidebar cerrado */
  --sidebar-open-width: 250px; /* Ancho del sidebar abierto */
  --transition-duration: 0.3s;
  --menu-hover-bg: #4b6277; /* Azul grisáceo para hover */
  --logout-btn-bg: #d35400; /* Naranja oscuro para el botón logout */
  --logout-btn-color: #fff; /* Color blanco para el texto */
  --logout-btn-hover-bg: #e67e22; /* Naranja brillante para hover */
  --content-bg: #f4f6f9; /* Fondo claro para el contenido */
}

/* Estilos generales del sidebar */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: var(--sidebar-open-width);
  background-color: var(--sidebar-bg);
  color: var(--sidebar-color);
  display: flex;
  flex-direction: column;
  transition: width var(--transition-duration);
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

/* Sidebar cerrado */
.sidebar.is-closed {
  width: var(--sidebar-closed-width);
  /* Asegura que los iconos se muestren en una columna cuando esté cerrado */
  flex-direction: column;
  align-items: center; /* Alineación centrada para los iconos */
}

/* Sidebar Header */
.sidebar-header {
  padding: 15px;
  display: flex;
  justify-content: flex-end;
}

/* Botón Toggler usando FontAwesome */
.menu-toggle-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px; /* Tamaño del ícono */
  color: var(--sidebar-color);
}

/* Estilos de la lista de elementos del menú */
.sidebar-menu {
  list-style: none;
  padding: 0;
  margin-top: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

/* Los elementos del menú */
.menu-item {
  padding: 12px 16px;
  transition: background 0.2s;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.menu-item:hover {
  background-color: var(--menu-hover-bg);
}

/* Enlace del menú */
.menu-link {
  display: flex;
  align-items: center;
  color: var(--sidebar-color);
  text-decoration: none;
  width: 100%;
}

/* Icono del menú */
.menu-icon {
  margin-right: 10px;
  font-size: 20px;
  transition: margin-right 0.2s ease;
}

/* Si el sidebar está cerrado, quitar el margen de los iconos */
.sidebar.is-closed .menu-icon {
  margin-right: 0;
}

/* Texto del menú solo visible cuando el sidebar está abierto */
.menu-text {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Logout Button */
.logout {
  padding: 10px 16px;
}

.logout-btn {
  background-color: var(--logout-btn-bg);
  border: none;
  color: var(--logout-btn-color);
  padding: 8px 16px;
  cursor: pointer;
  width: 100%;
  text-align: center;
  border-radius: 4px;
  transition: background 0.3s, color 0.3s;
}

.logout-btn:hover {
  background-color: var(--logout-btn-hover-bg);
  color: #fff;
}
</style>
