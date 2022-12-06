<template>
  <v-footer tag="footer" class="py-10" padless color="transparent">

    <v-row tag='nav' justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link.label"
        :to="link.href"
        color="white"
        text
        rounded
        class="link my-2"
        style="font-family: 'Raleway', sans-serif; font-weight: bold; text-decoration: unset;"
      >
        {{ link.label }}
      </v-btn>
    </v-row>

    <v-row justify="center" no-gutters>
      <v-col
        class="py-4 text-center white--text"
        cols="12"
        style="font-style: italic"
      >
        &copy; Copyright {{ new Date().getFullYear() }} <br />
        All rights reserved. <br v-show="$vuetify.breakpoint.name == 'xs'"/> 
        Powered by <strong>Redazzalpha</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    links: [
      { label: "ACCUEIL", href: "/home" },
      { label: "PRESTATION", href: "/prestation" },
      { label: "LOCATION", href: "/location" },
      { label: "NOS DRÔNES", href: "/drones" },
      { label: "CONTACTS", href: "/contacts" },
    ],
  }),
});
</script>

<style lang="scss" scoped>
@import "@/scss/footer";
</style>
