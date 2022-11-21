<template>
  <!-- main wrapper -->
  <v-app id="wrapper">
    <AppbarCpn />
    <!-- main -->
    <v-main>
      <!-- section -->
      <section>
        <v-container fluid>
          <v-row>
            <v-col>
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
import AppbarCpn from "./components/Appbar-cpn.vue";
export default Vue.extend({
  name: "App",
  components: {
    AppbarCpn,
  },
});
</script>

<style lang="scss" scoped>
@import "scss/variables.scss";
#wrapper {
  background-image: url("./assets/bg.webp");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
</style>
