<template>
  <!-- header -->
  <v-app-bar app class="white--text" elevation="0" color="transparent mt-2">
    <!-- logo -->
    <div class="logo">BlackDivision9</div>
    <!-- nav -->
    <div class="nav flex-grow-1 d-flex justify-center">
      <v-container fluid>
        <v-row>
          <v-col
            v-for="link in links"
            :key="link.label"
            class="nav-link text-center"
          >
            <router-link
              :to="link.href"
              class="link pb-1"
              activeClass="active"
            >
              {{ link.label }}
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Appbar-cpn",
  data() {
    return {
      links: [
        { label: "Accueil", href: "/home" },
        { label: "Nos drônes", href: "/drones" },
        { label: "Location", href: "/location" },
        { label: "Contacts", href: "/contacts" },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../scss/appbar";
</style>
