<template>
  <v-app>
    <v-main>
      <Home />
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Home from "./components/home/home.vue"
export default {
  name: 'App',
  components: {
    Home,
},
};
</script>
