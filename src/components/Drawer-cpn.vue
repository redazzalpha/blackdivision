<template>
  <!-- navigation drawer -->
  <v-navigation-drawer
    app
    :value="drawer"
    temporary
    @input="input"
    class="drawer"
    bottom
  >
    <!-- list item avatar -->
    <v-list-item class="white--text">
      <!-- avatar list item -->
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
      </v-list-item-avatar>
      <!-- avatar list item content -->
      <v-list-item-content>
        <v-list-item-title>John Leider</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider color="white"></v-divider>

    <!-- list item links -->
    <v-list dense rounded class="white--text">
      <!-- list item  -->
      <v-list-item
        v-for="link in links"
        :key="link.label"
        :to="link.href"
        style="text-decoration: unset"
      >
        <!-- list item icon  -->
        <v-list-item-icon>
          <v-icon color="white">{{ link.icon }}</v-icon>
        </v-list-item-icon>

        <!-- list item  content -->
        <v-list-item-content class="white--text">
          <v-list-item-title>{{ link.label }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Drawer-cpn",
  props: {
    drawer: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      links: [
        { label: "Accueil", icon: "mdi-home", href: "/home" },
        { label: "Nos drônes", icon: "mdi-quadcopter", href: "/drones" },
        { label: "Location", icon: "mdi-calendar-edit", href: "/location" },
        { label: "Contacts", icon: "mdi-contacts", href: "/contacts" },
      ],
    };
  },
  methods: {
    input(open: boolean) {
      if (!open) this.$emit("close");
    },
  },
});
</script>

<style lang="scss">
@import "@/scss/drawer";
</style>
