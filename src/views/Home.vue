<template>
  <!-- home main container-->
  <div class="home-container">
    <!-- backgrounds block 1 -->
    <div class="bg-1-block" :style="blockBgStyle(0)">
      <!-- drone 3d model -->
      <div class="model-container"></div>

      <!-- content container -->
      <div class="content-container">
        <div class="padding" :style="paddingHeight"></div>

        <h2 class="extra-title text-center" :style="extraFontSize">
          La puissance des drônes au bout des doigts
        </h2>
      </div>
    </div>

    <!-- backgrounds block 2 -->
    <div class="bg-2-block" :style="blockBgStyle(1)">
      <!-- content container -->
      <v-container class="content-container" >
        <v-row>
          <v-col>
            <!-- extra title -->
            <h2 class="extra-title" :style="extraFontSize">
              Réalisez des vidéos haute qualité avec nos drôneurs professionnels
            </h2>
          </v-col>
        </v-row>

        <v-row class="mt-10" justify-md="end">
          <v-col class="d-flex justify-content-center order-2 order-md-1 mt-10 mt-md-auto my-auto">
            <!-- call to action-->
            <CtaCpn class="cta"/>
          </v-col>

          <v-col class="col-md-6 order-1 order-md-2">
            <v-img
              class="img-bg-2"
              src="../assets/img1.jpg"
            ></v-img>
          </v-col>
        </v-row>

      </v-container>
    </div>

    <!-- backgrounds block 3 -->
    <div class="bg-3-block" :style="blockBgStyle(2)">
      <!-- content container -->
      <div class="content-container">
        <!-- drone container -->
        <div class="drone-container" :style="droneContainerStyle">
          <!-- drone img-->
          <v-img
            class="drone-img"
            src="../assets/img2.png"
            :style="droneImgWidth"
          ></v-img>
          <!-- light img -->
          <v-img
            class="light-img"
            src="../assets/light.png"
            :style="lightImgStyle"
          ></v-img>
        </div>

        <!-- extra title -->
        <h2 class="extra-title text-center" :style="[extraFontSize]">
          Devenez votre propre réalisateur en pilotant un de nos appareils
        </h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Model3D from "@/classes/model3D";
import { ExtraTitle, Img, DroneContainer } from "@/utils/types";
import CtaCpn from "@/components/Cta-cpn.vue";

let extraTitleBg1: ExtraTitle;
let extraTitleBg2: ExtraTitle;
let extraTitleBg3: ExtraTitle;
let img1Bg2: Img;
let droneContainer: DroneContainer;

export default Vue.extend({
  name: "Home-page",
  components: {
    CtaCpn,
  },
  computed: {
    extraFontSize() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return { fontSize: "32px" };
        case "sm":
          return { fontSize: "32px" };
        case "md":
          return { fontSize: "48px" };
        case "lg":
          return { fontSize: "56px" };
        case "xl":
          return { fontSize: "56px" };
        default:
          return { fontSize: "64px" };
      }
    },
    paddingHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return { height: "250px" };
        case "sm":
          return { height: "250px" };
        case "md":
          return { height: "350px" };
        case "lg":
          return { height: "350px" };
        case "xl":
          return { height: "350px" };
        default:
          return { height: "354px" };
      }
    },
    droneContainerStyle() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return { height: "350px", marginTop: "400px" };
        case "sm":
          return { height: "410px", marginTop: "300px" };
        case "md":
          return { height: "420px", marginTop: "300px" };
        case "lg":
          return { height: "430px", marginTop: "270px" };
        case "xl":
          return { height: "430px", marginTop: "270px" };
        default:
          return { height: "400px", marginTop: "350px" };
      }
    },
    droneImgWidth() {
      const style = {
        width: "",
      };
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          style.width = "290px";
          break;
        case "sm":
          style.width = "315px";
          break;
        case "md":
          style.width = "315px";
          break;
        case "lg":
          style.width = "350px";
          break;
        case "xl":
          style.width = "350px";
          break;
        default:
          style.width = "290px";
          break;
      }
      return style;
    },
    lightImgStyle() {
      const style = {
        top: "",
        left: "",
        width: "",
      };
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          style.top = "-95px";
          style.left = "145px";
          style.width = "160px";
          break;
        case "sm":
          style.top = "-100px";
          style.left = "160px";
          style.width = "170px";
          break;
        case "md":
          style.top = "-100px";
          style.left = "160px";
          style.width = "170px";
          break;
        case "lg":
          style.top = "-110px";
          style.left = "175px";
          style.width = "200px";
          break;
        case "xl":
          style.top = "-110px";
          style.left = "175px";
          style.width = "200px";
          break;
        default:
          style.top = "-95px";
          style.left = "145px";
          style.width = "160px";
          break;
      }
      return style;
    },
    modelWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 320;
        case "sm":
          return 420;
        case "md":
          return 520;
        case "lg":
          return 520;
        case "xl":
          return 520;
        default:
          return 320;
      }
    },
    modelHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 150;
        case "sm":
          return 250;
        case "md":
          return 350;
        case "lg":
          return 350;
        case "xl":
          return 350;
        default:
          return 150;
      }
    },
    cameraPositionZ() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 0.27;
        case "sm":
          return 0.3;
        case "md":
          return 0.35;
        case "lg":
          return 0.35;
        case "xl":
          return 0.35;
        default:
          return 0.27;
      }
    },
  },
  data() {
    return {
      backgrounds: [
        { href: require("../assets/bg.webp") },
        { href: require("../assets/bg.jpg") },
        { href: require("../assets/bg1.png") },
      ],
    };
  },
  methods: {
    setup() {
      extraTitleBg1 = document.querySelector(".bg-1-block .extra-title");
      extraTitleBg2 = document.querySelector(".bg-2-block .extra-title");
      extraTitleBg3 = document.querySelector(".bg-3-block .extra-title");
      img1Bg2 = document.querySelector(".bg-2-block .img-bg-2");
      droneContainer = document.querySelector(".bg-3-block .drone-container");
    },
    setup3DModel() {
      /**
       * CREATE MODEL 3D OBJECT AND LOAD IT
       * -FIRST ARGUMENT IS 3D MODEL PATH
       * -SECOND ARGUMEMNT IS 3D MODEL CONTAINER CLASS NAME
       * -THIRD ARGUMENT IS LOAD CALLBACK THAT IS  CALLED STRAIGHT AFTER
       * THE 3D MODEL IS LOAD
       */
      const model3D = new Model3D("drone.gltf", ".model-container", () => {
        extraTitleBg1.style.left = "0px";

        const animate = () => {
          requestAnimationFrame(animate);
          model3D.width = this.modelWidth;
          model3D.height = this.modelHeight;
          model3D.cameraPositionZ = this.cameraPositionZ;
          model3D.animate();
        };
        animate();
      });
    },
    blockBgStyle(index: number) {
      return {
        backgroundImage: `url(${this.backgrounds[index].href})`,
        backgroundColor: "#03091b",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachmen: "fixed",
      };
    },
    onWindowScroll() {
      const onScroll = () => {
        this.bg1Scroll();
        this.bg2Scroll();
        this.bg3Scroll();
      };
      window.addEventListener("scroll", onScroll);
    },
    bg1Scroll() {
      if (window.scrollY >= 400) {
        extraTitleBg1.style.left = "2000px";
      } else {
        extraTitleBg1.style.left = "0px";
      }
    },
    bg2Scroll() {
      if (window.scrollY >= 415 && window.scrollY <= 1405) {
        extraTitleBg2.style.opacity = "1";
        img1Bg2.style.opacity = "1";
      } else {
        extraTitleBg2.style.opacity = "0";
        img1Bg2.style.opacity = "0";
      }
    },
    bg3Scroll() {
      if (window.scrollY >= 1405) {
        droneContainer.style.opacity = "1";
        extraTitleBg3.style.opacity = "1";
      } else {
        droneContainer.style.opacity = "0";
        extraTitleBg3.style.opacity = "0";
      }
    },
  },
  mounted() {
    this.setup();
    this.setup3DModel();
    this.onWindowScroll();
  },
});
</script>

<style lang="scss" scoped>
@import "@/scss/home";
</style>
