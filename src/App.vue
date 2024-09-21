<!-- App.vue -->
<template>
  <div class="flex flex-col min-h-screen">
    <div class="bg-image absolute inset-0 z-0"></div>
    <!--  <nav class="relative z-10 bg-gray-800 bg-opacity-80 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-white font-bold text-2xl">Sevilla Card Show</div>
        <div class="hidden md:flex space-x-4">
          <router-link to="/" class="text-white hover:text-gray-300"
            >Home</router-link
          >
          <router-link to="/contacto" class="text-white hover:text-gray-300"
            >Contacto</router-link
          >
          <router-link
            to="/sobre-nosotros"
            class="text-white hover:text-gray-300"
            >Sobre Nosotros</router-link
          >
        </div>
        <button @click="toggleMenu" class="md:hidden text-white">
          <i v-if="!isMenuOpen" class="fas fa-bars"></i>
          <i v-else class="fas fa-times"></i>
        </button>
      </div>
      <div v-if="isMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <router-link
            to="/"
            class="block text-white hover:bg-gray-700 px-3 py-2 rounded-md"
            @click="closeMenu"
            >Home</router-link
          >
          <router-link
            to="/contacto"
            class="block text-white hover:bg-gray-700 px-3 py-2 rounded-md"
            @click="closeMenu"
            >Contacto</router-link
          >
          <router-link
            to="/sobre-nosotros"
            class="block text-white hover:bg-gray-700 px-3 py-2 rounded-md"
            @click="closeMenu"
            >Sobre Nosotros</router-link
          >
        </div>
      </div>
    </nav> -->
    <main class="relative z-10 flex-grow">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { ref } from "vue";
import backgroundImage from "@/assets/SCS-home.jpg";

export default {
  setup() {
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const closeMenu = () => {
      isMenuOpen.value = false;
    };

    return {
      isMenuOpen,
      toggleMenu,
      closeMenu,
      backgroundImage,
    };
  },
};
</script>

<style>
.bg-image {
  background-image: v-bind("`url(${backgroundImage})`");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@media (max-width: 640px) {
  .bg-image {
    background-position: top center;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .bg-image {
    background-position: center;
  }
}

@media (min-width: 1025px) {
  .bg-image {
    background-attachment: fixed;
  }
}
</style>
