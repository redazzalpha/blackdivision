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
            <h2 class="extra-title" :style="extraFontSize">
              Réalisez des vidéos haute qualité avec nos drôneurs professionnels
            </h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-img
              class="ml-sm-auto"
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
      <div class="content-container"></div>
    </v-img>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Model3D from "@/classes/model3D";

let extraTitle: any;
let extraTitle1: any;

export default Vue.extend({
  name: "Home-page",
  computed: {
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
          return "font-size: 32px";
        case "sm":
          return "font-size: 32px";
        case "md":
          return "font-size: 48px";
        case "lg":
          return "font-size: 56px";
        case "xl":
          return "font-size: 56px";
        default:
          return "font-size: 64px";
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
        { href: require("../assets/bg1.webp") },
      ],
    };
  },
  methods: {
    setup3DModel() {
      /**
       * CREATE MODEL 3D OBJECT AND LOAD IT
       * -FIRST ARGUMENT IS 3D MODEL PATH
       * -SECOND ARGUMEMNT IS 3D MODEL CONTAINER CLASS NAME
       * -THIRD ARGUMENT IS LOAD CALLBACK THAT IS  CALLED STRAIGHT AFTER
       * THE 3D MODEL IS LOAD
       */
      const model3D = new Model3D("drone.gltf", ".model-container", () => {
        extraTitle = document.querySelector(".extra-title");
        extraTitle1 = document.querySelector(".bg-2 .extra-title");
        extraTitle.style.left = "0px";

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
      };
      window.addEventListener("scroll", onScroll);
    },
    bg1Scroll() {
      if (window.scrollY >= 400) {
        if (extraTitle) extraTitle.style.left = "2000px";
      } else {
        if (extraTitle) extraTitle.style.left = "0px";
      }
    },
    bg2Scroll() {
      if (window.scrollY >= 415 && window.scrollY <= 1205) {
        if (extraTitle1) extraTitle1.style.opacity = "1";
      } else {
        if (extraTitle) extraTitle1.style.opacity = "0";
      }
    },
    bg3Scroll() {
      //
    },
  },
  mounted() {
    this.setup3DModel();
    this.onWindowScroll();
  },
});
</script>

<style lang="scss">
@import "@/scss/home";
</style>
