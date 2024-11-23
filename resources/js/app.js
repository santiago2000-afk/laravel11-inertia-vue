import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import router from './router';

createInertiaApp({
  resolve: name => import(`./Pages/${name}.vue`),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(router)
      .use(plugin)
      .mount(el);
  },
});

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