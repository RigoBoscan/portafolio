<template>
  <div class="experience-container">
    <h1 @click="drawer = !drawer">EXPERIENCIA</h1>
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
        <v-flex>
          <h1 class="mt-5">EXPERIENCIA</h1>
          <p class="date mb-2">2021-2022</p>

          <v-row no-gutters align="cnter" justify="space-between">
            <div>
              <li>
                <img
                  class="icon"
                  src="../../assets/img/empresa.png"
                  alt=""
                />Empresa
              </li>
              <li>
                <img
                  class="icon"
                  src="../../assets/img/cargo.png"
                  alt=""
                />Cargo
              </li>
              <li>
                <img
                  class="icon"
                  src="../../assets/img/ubication.png"
                  alt=""
                />Ubicación
              </li>
            </div>
            <div class="list-information__container">
              <li class="list-information"><b>NuHome</b></li>
              <li class="list-information"><b>Front-end</b></li>
              <li class="list-information"><b>Colombia</b></li>
            </div>
          </v-row>
        </v-flex>
        <div class="block mt-16">
          <div class="block-in">
            <div class="clock"></div>
          </div>
        </div>
        <p class="text-center mt-3">
          Estoy esperando por ti para <br />
          adquirir más experiencia
        </p>
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
@import "./experienceInfo.scss";
</style>
