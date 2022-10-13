<template>
  <v-container class="container-header">
    <v-card class="header" height="100vh" width="250" flat>
      <v-navigation-drawer class="menu-header">
       <div class="container-avatar__rigo">
        <v-avatar class="avatar-rigo"
        width="120px"
        height="120px"
       >
        <img  src="../../assets/1658273661557.png" alt="alt">
       </v-avatar>
       </div>
      </v-navigation-drawer>
    </v-card>
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
