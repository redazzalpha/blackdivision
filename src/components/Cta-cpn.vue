<template>
  <div class="cta-container d-flex justify-content-center">
    <v-btn class="cta" :style="style" @click="clicked" x-large>{{
      label
    }}</v-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "cta-cpn",
  props: {
    label: {
      type: String,
      required: true,
    },
    bgColor: {
      type: String,
      required: false,
      default: "dc3545",
    },
    textColor: {
      type: String,
      required: false,
      default: 'whitesmoke',
    }
  },
  data() {
    return {
      style: {
        color: `#${this.textColor}`,
        boxShadow:
          `inset 0 0 8px #${this.bgColor},` +
          `inset 0 0 13px #${this.bgColor},` +
          `inset -3px 0 17px #${this.bgColor},` +
          `inset 3px 0 50px #${this.bgColor},` +
          `inset -3px 0 54px #${this.bgColor},` +
          `0 0 16px #${this.bgColor},` +
          `-1px 0 26px #${this.bgColor},` +
          `1px 0 26px #${this.bgColor}`,
        backgroundColor: `#${this.bgColor} !important`,
      },
    };
  },
  methods: {
    clicked() {
      console.log("clicked here");
    },
  },
});
</script>

<style lang="scss">
@import "@/scss/cta";
</style>
