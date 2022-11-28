<template>
  <div class="cursor"></div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Cursor-cpn",
  methods: {
    setup() {
      let cursor: any = document.querySelector(".cursor");
      document.addEventListener("mousemove", (evt) => {
        cursor.style.opacity = 1;
        cursor.style.top = (evt.pageY - 25) + "px";
        cursor.style.left = (evt.pageX - 25) + "px";
      });
      document.body.addEventListener("mouseleave", (evt) => {
        cursor.style.opacity = 0;
      });
      cursor = document.querySelector(".cursor");
      const onScroll = () => {
        cursor.style.opacity = 0;
      };
      window.addEventListener("scroll", onScroll);
    },
  },
  mounted() {
    this.setup();
  },
});
</script>

<style lang="scss" scoped>
@import "@/scss/cursor";
</style>
