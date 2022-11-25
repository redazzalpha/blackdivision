<template>
  <v-hover v-slot="{ hover }">
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      fixed
      bottom
      right
      tag="button"
      color="#03091b"
      :style="hover ? 'color: #ECD06F; opacity: 1;' : ''"
      @click="toTop"
    >
      <v-icon class="text-h3" color="white">mdi-chevron-up</v-icon>
    </v-btn>
  </v-hover>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ScrollTopBtn-cpn",
  data() {
    return {
      fab: false,
    };
  },
  methods: {
    onScroll(e: UIEvent) {
      if (typeof window === "undefined") return;
      if (e.target != null) {
        const top = window.pageYOffset || (e.target as Element).scrollTop || 0;
        this.fab = top > 20;
      }
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
});
</script>

<style></style>
