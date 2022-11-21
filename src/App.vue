<template>
  <!-- main wrapper -->
  <v-app id="wrapper">
    <AppbarCpn />
    <!-- main -->
    <v-main>
      <!-- section -->
      <section>
        <v-container fluid>
          <v-row>
            <v-col>
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
import AppbarCpn from "./components/Appbar-cpn.vue";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

let model3D: any;

const rotationSpeed = 0.0005;
const upDownSpeed = 0.00005;
const leftRightSpeed = 0.001;

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
  },
  data() {
    return {
      modelWidth: 520,
      modelHeight: 350,
      fov: 75,
      near: 0.1,
      far: 1000,
      cameraPositionZ: 0.35,
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
      const camera = new THREE.PerspectiveCamera(
        this.fov,
        this.modelWidth / this.modelHeight,
        this.near,
        this.far
      );

      // config setup
      camera.position.z = this.cameraPositionZ;
      spotLight.position.set(100, 10, 100);
      renderer.setSize(this.modelWidth, this.modelHeight);
      scene.add(spotLight);
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

      // event listeners
      function onWindowResize() {
        console.log("window resize here");
        renderer.render(scene, camera);
      }
      window.addEventListener("resize", onWindowResize);

      // drone animation
      const animate = () => {
        requestAnimationFrame(animate);
        if (model3D != undefined) {
          // this.droneFullRotate();
          this.droneRotate();
          this.droneUpDown();
          this.droneLeftRight();
        }
        renderer.render(scene, camera);
      }
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
