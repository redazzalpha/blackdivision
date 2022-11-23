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
        <v-container grid-list-xs fluid>
          <v-row>
            <v-col>
              <!-- views -->
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
import AppbarCpn from "@/components/Appbar-cpn.vue";
import DrawerCpn from "@/components/Drawer-cpn.vue";

export default Vue.extend({
  name: "App",
  components: {
    AppbarCpn,
    DrawerCpn,
  },
  data() {
    return {
      drawer: false,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/scss/app";
</style>
