<template>
  <v-container class="container-header">
    <v-app-bar
      color="#171717"
      class="header"
      flat
    >
      <v-row no-gutters align="center" class="justify-space-between">
        <div>
          <img class="flag" src="../../assets/img/espana.png" alt="" />
          <img class="flag" src="../../assets/img/usa.png" alt="" />
        </div>
        <h2 class="explorar">Explorar</h2>
      </v-row>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: "headerPortafolio",
};
</script>

<style lang="scss">
@import "./headerPortafolio.scss";
</style>
