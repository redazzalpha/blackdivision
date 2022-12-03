<template>
  <!-- main wrapper -->
  <v-app id="wrapper">
    <!-- app-bar-->
    <AppbarCpn @clicked="drawer = !drawer" />

    <!-- drawer -->
    <DrawerCpn :drawer="drawer" @close="drawer = !drawer" />

    <!-- main -->
    <v-main tag="main">
      <!-- section -->
      <section>
        <!-- main container -->
        <v-container class="main-container" grid-list-xs fluid>
          <v-row>
            <v-col class="pa-0">
              <!-- glows -->
              <GlowsCpn />

              <!-- views -->
              <router-view />
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-main>

    <!-- scroll top button -->
    <ScrollTopBtnCpn />

    <!-- cursor  -->
    <CursorCpn />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import AppbarCpn from "@/components/Appbar-cpn.vue";
import DrawerCpn from "@/components/Drawer-cpn.vue";
import ScrollTopBtnCpn from "@/components/ScrollTopBtn-cpn.vue";
import CursorCpn from "@/components/Cursor-cpn.vue";
import GlowsCpn from "@/components/Glows-cpn.vue";

export default Vue.extend({
  name: "App",
  components: {
    AppbarCpn,
    DrawerCpn,
    ScrollTopBtnCpn,
    CursorCpn,
    GlowsCpn,
  },
  data() {
    return {
      drawer: false,
    };
  },
});
</script>

<style lang="scss">
@import "@/scss/style";
</style>
