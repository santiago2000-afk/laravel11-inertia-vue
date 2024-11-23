<template>
  <div class="layout">
    <!-- Sidebar -->
    <div 
      :class="['sidebar', { 'is-closed': isSidebarClosed, 'is-mobile': isMobile, 'is-visible': isSidebarVisible }]"
    >
      <ul class="sidebar-menu">
        <!-- Sidebar Toggle -->
        <li class="menu-item toggle">
          <button @click="toggleSidebar" class="menu-link">
            <span class="material-icons">menu</span>
          </button>
        </li>
        <!-- Menu Items -->
        <li v-for="item in menuItems" :key="item.name" class="menu-item">
          <router-link :to="item.path" class="menu-link">
            <span class="material-icons">{{ item.icon }}</span>
            <span v-if="!isSidebarClosed || !isMobile" class="menu-text">{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>

    <!-- Mobile Overlay -->
    <div v-if="isMobile && isSidebarVisible" class="overlay" @click="toggleSidebar"></div>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Navbar -->
      <nav class="navbar">
        <div class="navbar-left">
          <button @click="toggleSidebar" class="menu-toggle-btn">
            <span class="material-icons">menu</span>
          </button>
          <h1 class="navbar-title">Dashboard</h1>
        </div>
        <div class="profile">
          <img :src="profileImage" alt="Profile" />
          <span class="username">{{ username }}</span>
        </div>
      </nav>
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarClosed: false,
      isSidebarVisible: false,
      isMobile: window.innerWidth <= 768,
      profileImage: "https://via.placeholder.com/50",
      username: "John Doe",
      menuItems: [
        { name: "Dashboard", path: "/dashboard", icon: "dashboard" },
        { name: "Settings", path: "/settings", icon: "settings" },
        { name: "Profile", path: "/profile", icon: "person" },
        { name: "Logout", path: "/logout", icon: "logout" },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      if (this.isMobile) {
        this.isSidebarVisible = !this.isSidebarVisible;
      } else {
        this.isSidebarClosed = !this.isSidebarClosed;
      }
    },
    handleResize() {
      this.isMobile = window.innerWidth <= 768;
      if (!this.isMobile) this.isSidebarVisible = false;
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style scoped>
/* Layout */
.layout {
  display: flex;
  height: 100vh;
  font-family: "Roboto", sans-serif;
  color: #202124;
}

/* Sidebar */
.sidebar {
  width: 240px;
  background: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease, transform 0.3s ease;
  overflow: hidden;
}

.sidebar.is-closed {
  width: 72px;
}

.sidebar.is-mobile {
  position: fixed;
  height: 100%;
  z-index: 1000;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.sidebar.is-mobile.is-visible {
  transform: translateX(0);
}

.sidebar-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-item {
  display: flex;
  align-items: center;
}

.menu-link {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 16px;
  text-decoration: none;
  color: #5f6368;
  border-radius: 8px;
  transition: background 0.2s, color 0.2s;
}

.menu-link:hover {
  background: #e8f0fe;
  color: #1967d2;
}

.material-icons {
  font-size: 24px;
  margin-right: 16px;
}

.sidebar.is-closed .material-icons {
  margin: 0;
}

.sidebar.is-closed .menu-text {
  display: none;
}

/* Overlay for mobile */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.navbar-left {
  display: flex;
  align-items: center;
}

.menu-toggle-btn {
  background: transparent;
  border: none;
  color: #5f6368;
  font-size: 24px;
  cursor: pointer;
  margin-right: 16px;
}

.navbar-title {
  font-size: 20px;
  font-weight: 500;
  color: #202124;
}

.profile {
  display: flex;
  align-items: center;
}

.profile img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 8px;
}

.username {
  font-size: 16px;
  font-weight: 400;
}

/* Main Content */
.main-content {
  flex: 1;
  background: #f1f3f4;
  overflow: auto;
}

.content {
  padding: 20px;
}

.menu-toggle-btn {
  display: none;
}

@media (max-width: 768px) {
  .menu-toggle-btn {
    display: inline-block;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .sidebar.is-mobile {
    transform: translateX(-100%);
  }

  .sidebar.is-mobile.is-visible {
    transform: translateX(0);
  }

  .main-content {
    margin-left: 0;
  }
}
</style>
