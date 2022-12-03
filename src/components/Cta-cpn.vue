<template>
  <div class="cta-container">
    <v-btn @click="clicked" >click me</v-btn>
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