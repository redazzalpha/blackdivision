<template>
  <!-- header -->
  <v-app-bar app class="white--text" elevation="0" color="transparent mt-2">
    <!-- logo -->
    <div class="logo">BlackDivision9</div>

    <!-- nav -->
    <nav class="d-none d-md-block flex-grow-1">
      <v-container
        fluid
        grid-list-xs
        :style="`max-width: ${navContainerWidth}`"
      >
        <v-row class="" no-gutters>
          <v-col
            v-for="link in links"
            :key="link.label"
            class="nav-link text-center flex-grow"
          >
            <router-link :to="link.href" class="link pb-1" activeClass="active">
              {{ link.label }}
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </nav>

    <!-- app bar button -->
    <v-app-bar-nav-icon
      v-show="$vuetify.breakpoint.name == 'xs' || $vuetify.breakpoint.name == 'sm'"
      color="white"
      @click="clicked"
      class="ml-auto"
    />
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Appbar-cpn",
  computed: {
    navContainerWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "50%";
        case "sm":
          return "100%";
        case "md":
          return "75%";
        case "lg":
          return "50%";
        case "xl":
          return "50%";
        default:
          return "50%";
      }
    },
  },
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
  methods: {
    clicked() {
      this.$emit("clicked");
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/scss/appbar";
</style>
