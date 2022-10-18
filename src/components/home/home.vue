<template>
  <v-container class="container-home">
    <div class="information mt-5">
      <p class="mb-0 name">RIGOBERTO U.</p>
      <h1>
        FRONTEND <br />
        DEV.
      </h1>
      <v-row class="container-imagen" no-gutters align="center">
        <img
          class="mt-3"
          width="281px"
          height="393px"
          src="../../assets/img/image.jpg"
          alt=""
        />
        <img
          width="130px"
          class="frame"
          src="../../assets/img/Frame.png"
          alt=""
        />
      </v-row>
      <p class="description mt-5">
        Hola, mi nombre es <span class="span-yellow">Rigoberto</span> y soy un
        desarrollador <span class="span-pink">Front-end</span> Junior. Sientete
        libre de explorar todo sobre mi a través de este Portafolio.
      </p>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "home",

  components: {},
};
</script>

<style lang="scss">
@import "./home.scss";
</style>
