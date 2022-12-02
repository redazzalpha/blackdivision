<template>
  <!-- glow container -->
  <div class="glow-container">
    <span class="glow glow-animate"></span>
    <span class="glow glow-animate1"></span>
    <span class="glow glow-animate2"></span>
    <span class="glow glow-animate3"></span>
    <span class="glow glow-animate4"></span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { GlowContainer } from "@/utils/types";

let glowContainer: GlowContainer;

export default Vue.extend({
  name: "Glows-cpn",
  methods: {
    setup() {
      glowContainer = document.querySelector(".glow-container");
      console.log(glowContainer)
    },
    onWindowScroll() {
      const onScroll = () => {
        if (window.scrollY >= 0 && window.scrollY <= 414) {
          glowContainer.style.top = "0px";
        } else if (window.scrollY >= 415 && window.scrollY <= 1205) {
          glowContainer.style.top = "1000px";
        } else if (window.scrollY >= 1206) {
          glowContainer.style.top = "2000px";
        }

        glowContainer.style.opacity = "0";
        setTimeout(() => {
          glowContainer.style.opacity = "1";
        }, 7000);
      };
      window.addEventListener("scroll", onScroll);
    },
  },
  mounted() {
    this.setup();
    this.onWindowScroll();
  },
});
</script>

<style lang="scss">
@import "@/scss/glows";
</style>
