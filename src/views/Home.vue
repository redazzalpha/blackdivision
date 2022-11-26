<template>
  <!-- home main container-->
  <div class="home-container white--text">
    <!-- backgrounds -->
    <img
      v-for="(background, index) in backgrounds"
      :key="background.href"
      :src="background.href"
      :style="backgroundStyle(index)"
    />

    <!-- drone 3d model -->
    <div class="model-container"></div>

    <!-- glow container -->
    <div class="glow-container" :style="glowContainerStyle">
      <span class="glow glow-animate"></span>
      <span class="glow glow-animate1"></span>
      <span class="glow glow-animate2"></span>
      <span class="glow glow-animate3"></span>
      <span class="glow glow-animate4"></span>
    </div>

    <!-- page content container -->
    <div class="content-container">
      <h1 class="extra-title text-center" :style="extraTitleStyle">
        La puissance des drônes au bout des doigts
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Model3D from "@/classes/model3D";

let model3Dcanvas: any;
let extraTitle: any;

export default Vue.extend({
  name: "Home-page",
  computed: {
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

    extraTitleStyle() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "font-size: 40px";
        case "sm":
          return "font-size: 40px";
        case "md":
          return "font-size: 48px";
        case "lg":
          return "font-size: 60px";
        case "xl":
          return "font-size: 60px";
        default:
          return "font-size: 64px";
      }
    },
    glowContainerStyle() {
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
        model3Dcanvas = document.querySelector(".model-container > canvas");
        extraTitle = document.querySelector(".extra-title");
        model3Dcanvas.style.left = "-20px";
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
        // animation on scroll window
        if (window.scrollY >= 400) {
          model3Dcanvas.style.left = "-600px";
          extraTitle.style.left = "2000px";
        } else {
          model3Dcanvas.style.left = "-20px";
          extraTitle.style.left = "0px";
        }
      };
      window.addEventListener("scroll", onScroll);
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
