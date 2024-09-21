import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import HomePage from "./components/HomePage.vue";
import ContactPage from "./components/ContactPage.vue";
import SobreNosotros from "./components/SobreNosotros.vue";

import "./index.css"; // Asegúrate de tener este archivo

const routes = [
  { path: "/", component: HomePage },
  { path: "/contacto", component: ContactPage },
  { path: "/sobre-nosotros", component: SobreNosotros },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
