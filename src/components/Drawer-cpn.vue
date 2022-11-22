<template>
  <v-navigation-drawer app :value="drawer" absolute temporary @input="input">
    <v-list-item>

      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>John Leider</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
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
    }
  },
  computed: {
    abc() {
        return 10;
    }
  },

  data() {
    return {
      items: [
        { title: "Accueil", icon: "mdi-home" },
        { title: "Nos drônes", icon: "mdi-quadcopter" },
        { title: "Location", icon: "mdi-calendar-edit" },
        { title: "Contacts", icon: "mdi-contacts" },
      ],
    };
  },
  methods: {
    input(open: boolean) {
        if(!open)
        this.$emit("close");
    }
  }
});
</script>

<style></style>
