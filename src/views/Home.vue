<template>
  <!-- home main container-->
  <div class="home-container white--text">
    <!-- backgrounds-1 -->
    <v-img class="bg-1" :src="backgrounds[0].href" :style="backgroundStyle(0)">
      <!-- drone 3d model -->
      <div class="model-container"></div>

      <!-- content container -->
      <div class="content-container">
        <div class="padding" :style="paddingHeight"></div>
        <h2 class="extra-title text-center" :style="extraFontSize">
          La puissance des drônes au bout des doigts
        </h2>
      </div>
    </v-img>

    <!-- backgrounds-2 -->
    <v-img class="bg-2" :src="backgrounds[1].href" :style="backgroundStyle(1)">
      <!-- content container -->
      <v-container class="content-container">
        <v-row>
          <v-col>
            <!-- extra title -->
            <h2 class="extra-title" :style="extraFontSize">
              Réalisez des vidéos haute qualité avec nos drôneurs professionnels
            </h2>
          </v-col>
        </v-row>
        <v-row class="mt-10">
          <v-col>
            <v-img
              class="img-bg-2 ml-sm-auto"
              src="../assets/img1.jpg"
              :style="imgStyle"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-img>

    <!-- backgrounds-3 -->
    <v-img class="bg-3" :src="backgrounds[2].href" :style="backgroundStyle(2)">
      <!-- content container -->
      <div class="content-container">
        <!-- drone container -->
        <div class="drone-container" :style="droneContainerTop">
          <v-img
            class="drone-img"
            src="../assets/img2.png"
            max-width="350"
          ></v-img>
          <v-img
            class="light-img"
            src="../assets/light.png"
            max-width="350"
          ></v-img>
        </div>

        <!-- extra title -->
        <h2
          class="extra-title text-center"
          :style="[extraFontSize, extraTitleTop]"
        >
          Devenez votre propre réalisateur en louant un de nos appareils
        </h2>
      </div>
    </v-img>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Model3D from "@/classes/model3D";
import { ExtraTitle, Img, DroneContainer } from "@/utils/types";

let extraTitleBg1: ExtraTitle;
let extraTitleBg2: ExtraTitle;
let extraTitleBg3: ExtraTitle;
let img1Bg2: Img;
let droneContainer: DroneContainer;

export default Vue.extend({
  name: "Home-page",
  computed: {
    droneContainerTop() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return { top: "0px" };
        case "sm":
          return { top: "-200px" };
        case "md":
          return { top: "-200px" };
        case "lg":
          return { top: "-200px" };
        case "xl":
          return { top: "-200px" };
        default:
          return { top: "0px" };
      }
    },
    extraTitleTop() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return { top: "775px" };
        case "sm":
          return { top: "600px" };
        case "md":
          return { top: "600px" };
        case "lg":
          return { top: "600px" };
        case "xl":
          return { top: "600px" };
        default:
          return { top: "-200px" };
      }
    },
    imgStyle() {
      let style = "border-radius: 15px; box-shadow: 10px 10px 30px 5px black;";
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return style + "width: 100%;";
        case "sm":
          return style + "width: 70%;";
        case "md":
          return style + "width: 50%;";
        case "lg":
          return style + "width: 50%;";
        case "xl":
          return style + "width: 50%; height: 90%";
        default:
          return style + "width: 50%; height: 50%";
      }
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
          return "height: 250px";
        case "sm":
          return "height: 250px";
        case "md":
          return "height: 350px";
        case "lg":
          return "height: 350px";
        case "xl":
          return "height: 350px";
        default:
          return "height: 354px";
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
      extraTitleBg1 = document.querySelector(".bg-1 .extra-title");
      extraTitleBg2 = document.querySelector(".bg-2 .extra-title");
      extraTitleBg3 = document.querySelector(".bg-3 .extra-title");
      img1Bg2 = document.querySelector(".bg-2 .img-bg-2");
      droneContainer = document.querySelector(".bg-3 .drone-container");
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
    backgroundStyle(index: number) {
      return (
        `top: calc(1000px * ${index} - 64px);` +
        "position: absolute;" +
        "left: 0;" +
        "width: 100vw;" +
        "height: 1000px;" +
        "object-fit: cover;"
      );
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
      if (window.scrollY >= 1405 && window.scrollY <= 2395) {
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
