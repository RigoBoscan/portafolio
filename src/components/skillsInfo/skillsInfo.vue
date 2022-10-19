<template>
  <div class="skills-container">
    <h1 @click="drawer = !drawer">HABILIDADES</h1>
    <v-navigation-drawer
      class="container-info"
      color="#171717"
      width="500px"
      v-model="drawer"
      absolutem
      app
    >
      <div>
        <img
          @click="drawer = !drawer"
          width="24px"
          src="../../assets/img/arrow-left.png"
          alt=""
        />
        <h1 class="mt-5">HABILIDADES</h1>
        <v-row no-gutters>
          <div class="container-images__languajes">
            <v-row class="mt-10" no-gutters align="center">
              <img
                class="image-languaje"
                src="../../assets/img/html.png"
                alt=""
              />
              <h2>HTML</h2>
            </v-row>
            <v-row class="mt-10" no-gutters align="center">
              <img
                class="image-languaje"
                src="../../assets/img/css.png"
                alt=""
              />
              <h2>CSS</h2>
            </v-row>
            <v-row class="mt-10" no-gutters align="center">
              <img
                class="image-languaje"
                src="../../assets/img/js.png"
                alt=""
              />
              <h2>JAVASCRIPT</h2>
            </v-row>
            <v-row class="mt-10" no-gutters align="center">
              <img
                class="image-languaje"
                src="../../assets/img/vue.png"
                alt=""
              />
              <h2>VUE.JS</h2>
            </v-row>
            <v-row class="mt-10" no-gutters align="center">
              <img
                class="image-languaje"
                src="../../assets/img/vuetify.png"
                alt=""
              />
              <h2>VUETIFY</h2>
            </v-row>
            <v-row class="mt-10" no-gutters align="center">
              <img
                class="image-languaje"
                src="../../assets/img/sass.png"
                alt=""
              />
              <h2>SASS</h2>
            </v-row>
          </div>
        </v-row>

        
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  }),
};
</script>

<style lang="scss">
@import "./skillsInfo.scss";
</style>
