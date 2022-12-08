<template>
  <div class="cta-container container container--fluid">
    <v-row>
      <v-col class="d-flex justify-content-center">
        <v-btn class="cta" :style="[style, ctaOpacity]" @click="clicked" x-large>{{
          label
        }}</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-content-center">
        <slot name="bottom"></slot>
      </v-col>
    </v-row>
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
      // bgColor value in html format without hashtag #
      type: String,
      required: false,
      default: "dc3545",
    },
    textColor: {
      // testColor value in html format without hashtag #
      type: String,
      required: false,
      default: "whitesmoke",
    },
  },
  computed: {
    ctaOpacity() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return {opacity: 1};
        case "sm":
          return {opacity: 1};
        default: return {opacity: ""};
      }
    },
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
