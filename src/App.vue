<template>
  <!-- main wrapper -->
  <v-app id="wrapper">
    <!-- app-bar-->
    <AppbarCpn @clicked="drawer = !drawer" />

    <!-- drawer -->
    <DrawerCpn :drawer="drawer" @close="drawer = !drawer" />

    <!-- main -->
    <v-main tag="main">
      <!-- section -->
      <section>
        <!-- main container -->
        <v-container fluid>
          <v-row>
            <v-col>
              <!-- views -->
              <router-view />
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import AppbarCpn from "@/components/Appbar-cpn.vue";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import DrawerCpn from "@/components/Drawer-cpn.vue";

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
  name: "App",
  components: {
    AppbarCpn,
    DrawerCpn,
  },
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
      drawer: false,
    };
  },
  methods: {
    initScene() {
      // var setup
      const wrapper = document.querySelector("#wrapper");
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
      spotLight.position.set(100, 10, 100);
      scene.add(spotLight);
      renderer.setSize(this.modelWidth, this.modelHeight);
      renderer.render(scene, camera);
      wrapper?.appendChild(renderer.domElement);

      // 3d model load
      loader.load(
        "drone.gltf",
        (gltf: any) => {
          model3D = gltf.scene;
          scene.add(model3D);
          camera.updateProjectionMatrix();
          renderer.render(scene, camera);
        },
        undefined,
        (error: any) => console.log(error)
      );

      /**
       * THIS EVENT LISTENER HAS BEEN MUTED AND REPLACED BY CODE FRAGMENT
       * IN ANIMATE FUNCTION CAUSE THE RENDER OF REACTIVE PROPERTIES
       * DOES NOT COME AT TIME AND NEED TO BE ACTIVE TWICE ON RESIZE  WINDOW EVENT
       *
       */

      // event listeners
      // const onWindowResize = () => {
      //   renderer.setSize(this.modelWidth, this.modelHeight);
      //   camera = new THREE.PerspectiveCamera(
      //     this.fov,
      //     this.modelWidth / this.modelHeight,
      //     this.near,
      //     this.far
      //   );
      //   camera.position.z = this.cameraPositionZ;
      //   renderer.render(scene, camera);
      // };
      // window.addEventListener("resize", onWindowResize);

      // drone animation

      const animate = () => {
        requestAnimationFrame(animate);
        if (model3D != undefined) {
          this.droneUpDown();
          this.droneLeftRight();
          this.droneRotate();
        }

        /**
         * THIS CODE FRAGMENT IS USED BY REPLACEMENT TO THE WINDOW RESIZE EVENT LISTENER 
         * MAYBE GOT TO FIND A BETTER WAY TO HANDLE THIS BECAUSE THIS MAY CAUSE 
         * PROCESSING OVERLOADING IN ANIMATE FUNCTION CAUSE IT'S ALWAYS PERFORMED
         * ALL THE TIME
         */
        
        renderer.setSize(this.modelWidth, this.modelHeight);
        camera = new THREE.PerspectiveCamera(
          this.fov,
          this.modelWidth / this.modelHeight,
          this.near,
          this.far
        );
        camera.position.z = this.cameraPositionZ;
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
    this.initScene();
  },
});
</script>

<style lang="scss" scoped>
@import "scss/app";
</style>
