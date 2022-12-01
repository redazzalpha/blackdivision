<template>
  <!-- header -->
  <v-app-bar
    app
    class="white--text"
    elevation="0"
    color="#03091b"
    hide-on-scroll
    scroll-threshold="100"
  >
    <!-- logo -->
    <div class="logo">BlackDivision9</div>

    <!-- nav -->
    <nav class="d-none d-md-block flex-grow-1">
      <v-container fluid grid-list-xs :style="navContainerStyle">
        <v-row class="" no-gutters>
          <v-col
            v-for="link in links"
            :key="link.label"
            class="nav-link text-center flex-grow"
          >
            <router-link
              :to="link.href"
              class="link pb-1"
              activeClass="nav-link-active"
            >
              {{ link.label }}
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </nav>

    <!-- app bar button -->
    <v-app-bar-nav-icon
      v-show="showAppBarNavIcon"
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
    navContainerStyle() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "max-width: 50%";
        case "sm":
          return "max-width: 100%";
        case "md":
          return "max-width: 75%";
        case "lg":
          return "max-width: 50%";
        case "xl":
          return "max-width: 50%";
        default:
          return "max-width: 50%";
      }
    },
    showAppBarNavIcon() {
      return (
        this.$vuetify.breakpoint.name == "xs" ||
        this.$vuetify.breakpoint.name == "sm"
      );
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
    showAppbar() {
      const header = document.querySelector("header");
      if (header) {
        setTimeout(() => {
          header.style.opacity = "1";
        }, 1500);
      }
    },
  },
  mounted() {
    this.showAppbar();
  },
});
</script>

<style lang="scss" scoped>
@import "@/scss/appbar";
</style>
