<template>
  <div class="cta-container">
    <v-btn class="cta" @click="clicked" x-large>Réserver une prestation</v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'cta-cpn',
    methods: {
      clicked() {
        console.log("clicked here");
      }
    }
});
</script>

<style lang="scss">
@import "@/scss/cta";
</style>