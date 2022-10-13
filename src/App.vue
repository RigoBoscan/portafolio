<template>
  <v-app>
    <v-main>
      <HeaderPortafolio />
      <Home />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Home from "./components/home/home.vue";
import HeaderPortafolio from "../src/layouts/headerPortafolio/headerPortafolio.vue";
export default {
  name: "App",
  components: {
    Home,
    HeaderPortafolio,
  },
};
</script>
