<template>
  <v-container class="container-home">
    <HeaderPortafolio/>
  </v-container>
</template>

<script>
import HeaderPortafolio from '@/layouts/headerPortafolio/headerPortafolio.vue'
  export default {
    name: 'home',

    components: {
    HeaderPortafolio
}
  }
</script>

<style lang="scss">
    @import "./home.scss";
</style>
