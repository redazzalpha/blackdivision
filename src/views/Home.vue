<template>
  <!-- home main container-->
  <div class="home-container white--text">
    <!-- backgrounds -->
    <img
      v-for="(background, index) in backgrounds"
      :key="background.href"
      :src="background.href"
      :style="`
        position: absolute;
        top: calc(1000px * ${index} - 64px);
        left: 0;
        width: 100vw;
        height: 1000px;
        object-fit: cover;`"
    />

    <!-- drone 3d model -->
    <div class="model-container"></div>

    <!-- glow container -->
    <div class="glow-container" style="height: 500px">
      <span class="glow animate"></span>
      <span class="glow animate1"></span>
      <span class="glow animate2"></span>
      <span class="glow animate3"></span>
      <span class="glow animate4"></span>
    </div>

    <!-- page content container -->
    <div style="position: relative"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

let model3D: any;

const rotationSpeed = 0.001;
const upDownSpeed = 0.00005;
const leftRightSpeed = 0.0005;

const rotationLimit = 0.1;
const upDownLimit = 0.01;
const leftRightLimit = 0.1;

let rotation = true;
let upDown = true;
let leftRight = true;

export default Vue.extend({
  name: "Home-page",
  computed: {
    modelWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 320;
        case "sm":
          return 520;
        case "md":
          return 520;
        case "lg":
          return 520;
        case "xl":
          return 520;
        default:
          return 520;
      }
    },
    modelHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 150;
        case "sm":
          return 350;
        case "md":
          return 350;
        case "lg":
          return 350;
        case "xl":
          return 350;
        default:
          return 350;
      }
    },
    cameraPositionZ() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 0.27;
        case "sm":
          return 0.35;
        case "md":
          return 0.35;
        case "lg":
          return 0.35;
        case "xl":
          return 0.35;
        default:
          return 0.35;
      }
    },
  },
  data() {
    return {
      fov: 75,
      near: 0.1,
      far: 1000,
      backgrounds: [
        { href: require("../assets/bg.webp") },
        { href: require("../assets/bg.jpg") },
        { href: require("../assets/bg1.webp") },
      ],
    };
  },
  methods: {
    droneInit() {
      // var setup
      const container = document.querySelector(".model-container");
      const spotLight = new THREE.SpotLight(0xffffff, 2);
      const loader = new GLTFLoader();
      const scene = new THREE.Scene();
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      let camera = new THREE.PerspectiveCamera(
        this.fov,
        this.modelWidth / this.modelHeight,
        this.near,
        this.far
      );

      // config setup
      camera.position.z = this.cameraPositionZ;
      const xyz = [100, 10, 100];
      spotLight.position.set(...xyz);
      scene.add(spotLight);
      renderer.setSize(this.modelWidth, this.modelHeight);
      renderer.render(scene, camera);
      container?.appendChild(renderer.domElement);

      // 3d model load
      loader.load(
        "drone.gltf",
        (gltf: any) => {
          model3D = gltf.scene;
          scene.add(model3D);
          camera.updateProjectionMatrix();
          renderer.render(scene, camera);

          const canvas = document.querySelector("canvas");
          if (canvas) canvas.style.left = "-20px";

          /**
           * THIS CODE FRAGMENT IS USED TO MAKE APPEAR
           * THE APP BAR ON TRANSITION AND IS IN REPLACEMENT
           * TO MUTED FRAGMENT CODE IN - APP BAR CPN - MOUNTED HOOK - .
           * THIS MAY CAUSE TROUBLE IF 3D MODEL IS NOT LOAD THE APP BAR
           * WON'T APPEAR.
           * TO FIX THE ISSUE MUTE THIS FRAGMENT CODE AND UNMUTED
           * FRAGMENT CODE FROM - APP BAR CPN - MOUNTED HOOK - .
           *
           */

          const header = document.querySelector("header");
          if (header) {
            setTimeout(() => {
              header.style.opacity = "1";
            }, 1500);
          }
        },
        undefined,
        (error: any) => console.log(error)
      );

      /**
       * THIS - WINDOW RESIZE EVENT LISTENER - HAS BEEN MUTED FROM HERE AND IT HAS BEEN
       * REPLACED BY CODE FRAGMENT IN ANIMATE FUNCTION CAUSE THE RENDER OF REACTIVE PROPERTIES
       * DOES NOT COME AT TIME AND NEED TO BE ACTIVATE TWICE ON RESIZE WINDOW EVENT.
       *
       */

      // event listeners
      // const onWindowResize = () => {
      //   camera = new THREE.PerspectiveCamera(
      //     this.fov,
      //     this.modelWidth / this.modelHeight,
      //     this.near,
      //     this.far
      //   );
      //   camera.position.z = this.cameraPositionZ;
      //   renderer.setSize(this.modelWidth, this.modelHeight);
      //   renderer.render(scene, camera);
      // };
      // window.addEventListener("resize", onWindowResize);

      const animate = () => {
        requestAnimationFrame(animate);
        if (model3D != undefined) {
          this.droneUpDown();
          this.droneLeftRight();
          this.droneRotate();
        }

        /**
         * THIS CODE FRAGMENT IS USED BY REPLACEMENT TO THE - WINDOW RESIZE EVENT LISTENER - .
         * THIS MAY CAUSE TROUBLE DUE TO THE PROCESSING OVERLOADING
         * IN ANIMATE FUNCTION.
         * ANIMATE FUNCTION IS PERFORMED ALL THE TIME.
         *
         */

        camera = new THREE.PerspectiveCamera(
          this.fov,
          this.modelWidth / this.modelHeight,
          this.near,
          this.far
        );
        camera.position.z = this.cameraPositionZ;
        renderer.setSize(this.modelWidth, this.modelHeight);

        renderer.render(scene, camera);
      };
      animate();
    },
    droneFullRotate() {
      model3D.rotation.y += rotationSpeed;
    },
    droneRotate() {
      if (rotation) {
        model3D.rotation.y += rotationSpeed;
        if (model3D.rotation.y >= rotationLimit) rotation = false;
      } else {
        model3D.rotation.y -= rotationSpeed;
        if (model3D.rotation.y <= -rotationLimit) rotation = true;
      }
    },
    droneUpDown() {
      if (upDown) {
        model3D.position.y += upDownSpeed;
        if (model3D.position.y >= upDownLimit) upDown = false;
      } else {
        model3D.position.y -= upDownSpeed;
        if (model3D.position.y <= 0) upDown = true;
      }
    },
    droneLeftRight() {
      if (leftRight) {
        model3D.rotation.z += leftRightSpeed;
        if (model3D.rotation.z >= leftRightLimit) leftRight = false;
      } else {
        model3D.rotation.z -= leftRightSpeed;
        if (model3D.rotation.z <= -leftRightLimit) leftRight = true;
      }
    },
  },
  mounted() {
    this.droneInit();
  },
});
</script>

<style lang="scss">
@import "@/scss/home";
</style>
