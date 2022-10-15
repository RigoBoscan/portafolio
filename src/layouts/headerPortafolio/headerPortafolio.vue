<template>
  <v-container class="container-header">
    <v-app-bar color="#171717" class="header" flat>
      <v-row no-gutters align="center" class="justify-space-between">
        <div>
          <img class="flag" src="../../assets/img/espana.png" alt="" />
          <img class="flag" src="../../assets/img/usa.png" alt="" />
        </div>
        <explore-modal />
      </v-row>
    </v-app-bar>
  </v-container>
</template>
<script>
import ExploreModal from "../../components/home/ExploreModal/exploreModal.vue";
export default {
  name: "headerPortafolio",
  components: {
    ExploreModal,
  },
};
</script>

<style lang="scss">
@import "./headerPortafolio.scss";
</style>
