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

const modelWidth = 520;
const modelHeight = 350;
const modelRotation = 0.005;

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
      modelRotation: 0.005,
    };
  },
  methods: {
    initScene() {
      // var setup
      let model3D: any;
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

      function animate() {
        requestAnimationFrame(animate);
        if (model3D != undefined) model3D.rotation.y += modelRotation;
        renderer.render(scene, camera);
      }
      animate();
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
