<template>
  <div class="container-modal">
    <v-dialog
      v-model="dialog"
      scrollable
      fullscreen
      persistent
      :overlay="false"
      max-width="500px"
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <a
          depressed
          class="explorar"
          color="#171717"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Explorar
        </a>
      </template>
      <v-card color="#171717">
        <div class="explore-modal">
          <v-btn icon @click="dialog = false"
            ><img src="@/assets/img/icon-close.png" alt=""
          /></v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style lang="scss">
@import "./exploreModal.scss";
</style>
