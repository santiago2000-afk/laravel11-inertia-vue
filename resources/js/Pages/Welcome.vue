<template>
  <div class="layout">
    <div 
      :class="['sidebar', { 'is-closed': isSidebarClosed, 'is-mobile': isMobile, 'is-visible': isSidebarVisible }]"
    >
      <ul class="sidebar-menu">
        <li class="menu-item toggle">
          <button @click="toggleSidebar" class="menu-link">
            <span class="material-icons">menu</span>
          </button>
        </li>
        <li v-for="item in menuItems" :key="item.name" class="menu-item">
          <router-link :to="item.path" class="menu-link">
            <span class="material-icons">{{ item.icon }}</span>
            <span v-if="!isSidebarClosed || !isMobile" class="menu-text">{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>

    <div v-if="isMobile && isSidebarVisible" class="overlay" @click="toggleSidebar"></div>

    <div class="main-content">
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
        { name: "Account Details", path: "/account-details", icon: "account_circle" },
        { name: "Token Tracker", path: "/token-tracker", icon: "view_list" },
        { name: "Transaction History", path: "/transaction-history", icon: "history" },
        { name: "Gas Tracker", path: "/gas-tracker", icon: "local_gas_station" },
        { name: "Contract Verification", path: "/contract-verification", icon: "verified" },
        { name: "API Key", path: "/api-key", icon: "vpn_key" },
        { name: "Developer Tools", path: "/developer-tools", icon: "build" },
        { name: "Settings", path: "/settings", icon: "settings" },
        { name: "Top Wallets", path: "/top-wallets", icon: "account_balance_wallet" },  // Nuevo ítem para las mejores wallets
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
