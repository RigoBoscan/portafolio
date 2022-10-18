<template>
  <div class="container-modal">
    <v-dialog
      v-model="dialog"
      fullscreen
      persistent
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

          <div class="information-modal">
            <v-flex>
              <hr class="mt-8 divider" />
              <v-row
                no-gutters
                align="center"
                class="mt-6 justify-space-between"
              >
                <ExperienceInfo />
                <img
                  height="17px"
                  width="15px"
                  src="../../../assets/img/arrow.png"
                  alt=""
                />
              </v-row>
            </v-flex>
            <v-flex>
              <hr class="mt-10 divider" />
              <v-row
                no-gutters
                align="center"
                class="mt-6 justify-space-between"
              >
                <h1>HABILIDADES</h1>
                <img
                  height="17px"
                  width="15px"
                  src="../../../assets/img/arrow.png"
                  alt=""
                />
              </v-row>
            </v-flex>
            <v-flex>
              <hr class="mt-10 divider" />
              <v-row
                no-gutters
                align="center"
                class="mt-6 justify-space-between"
              >
                <h1>ESTUDIOS</h1>
                <img
                  height="17px"
                  width="15px"
                  src="../../../assets/img/arrow.png"
                  alt=""
                />
              </v-row>
            </v-flex>
            <v-flex>
              <hr class="mt-10 divider" />
              <v-row
                no-gutters
                align="center"
                class="mt-6 justify-space-between"
              >
                <h1>HOBBIES</h1>
                <img
                  height="17px"
                  width="15px"
                  src="../../../assets/img/arrow.png"
                  alt=""
                />
              </v-row>
            </v-flex>
            <v-flex>
              <hr class="mt-10 divider" />
              <v-row
                no-gutters
                align="center"
                class="mt-6 justify-space-between"
              >
                <h1>PERSONALIDAD</h1>
                <img
                  height="17px"
                  width="15px"
                  src="../../../assets/img/arrow.png"
                  alt=""
                />
              </v-row>
              <hr class="mt-10 divider" />
            </v-flex>

            <v-flex class="container-contact" mt-15>
              <p>
                Puedes contactarme <br />
                a través de:
              </p>
              <div>
                <v-row no-gutters align="center" class="mt-5">
                  <a class="contact" href="mailto:rigobrertt.1610@gmail.com"
                    >EMAIL</a
                  >
                  <img
                    class="ml-2 mb-1"
                    src="../../../assets/img/arrow-yellow.png"
                    alt=""
                  />
                </v-row>
                <v-row no-gutters align="center" class="mt-2">
                  <a
                    target="_blank"
                    class="contact"
                    href="https://api.whatsapp.com/send?phone=5804147135798&text=Hola%20Rigoberto,%20vengo%20desde%20tu%20portafolio,%20quiero%20charlar%20"
                    >WHATSAPP</a
                  >
                  <img
                    class="ml-2 mb-1"
                    src="../../../assets/img/arrow-yellow.png"
                    alt=""
                  />
                </v-row>
                <v-row no-gutters align="center" class="mt-2">
                  <a
                    class="contact"
                    href="https://www.linkedin.com/in/rigoberto-urdaneta-8b0916233/"
                    >LINKEDIN</a
                  >
                  <img
                    class="ml-2 mb-1"
                    src="../../../assets/img/arrow-yellow.png"
                    alt=""
                  />
                </v-row>
              </div>
            </v-flex>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ExperienceInfo from "../../experienceInfo/experienceInfo.vue";
export default {
  data() {
    return {
      dialog: false,
    };
  },
  components: { ExperienceInfo },
};
</script>

<style lang="scss">
@import "./exploreModal.scss";
</style>
