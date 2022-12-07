<template>
  <!-- footer -->
  <v-footer tag="footer" class="py-10 text-center" padless color="transparent">
    <!-- footer nav row -->
    <v-row>
      <v-col class="col-12 col-sm-6">
        <v-container fluid>
          <v-row>
            <v-col>
              <v-row tag="nav" justify="center" no-gutters>
                <v-btn
                  v-for="link in links"
                  :key="link.label"
                  :to="link.href"
                  color="white"
                  text
                  rounded
                  class="link my-2"
                  style="
                    font-family: 'Raleway', sans-serif;
                    font-weight: bold;
                    text-decoration: unset;
                  "
                >
                  {{ link.label }}
                </v-btn>
              </v-row>

              <!-- follow us title row-->
              <v-row justify="center" no-gutter>
                <v-col class="white--text"> Retrouvez-nous sur: </v-col>
              </v-row>

              <!-- follow us links -->
              <v-row>
                <v-col>
                  <v-btn
                    v-for="link in followUsLinks"
                    :key="link.label"
                    :href="link.href"
                    color="white "
                    icon
                    class="link ma-2"
                    style="
                      font-family: 'Raleway', sans-serif;
                      font-weight: bold;
                      text-decoration: unset;
                      padding: 0;
                    "
                  >
                    <v-icon size="45">
                      {{ link.icon }}
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col>
        <v-container fluid style="height: 100%" class="d-flex" align-center>
          <v-row>
            <v-col>
              <v-row
                justify="center"
                no-gutters
                style="border: solid white 1px; border-radius: 10px"
              >
                <v-col
                  class="py-4 text-center white--text"
                  cols="12"
                  style="font-style: italic"
                >
                  &copy; Copyright {{ new Date().getFullYear() }} <br />
                  All rights reserved.
                  <br v-show="$vuetify.breakpoint.name == 'xs'" />
                  Powered by <strong>Redazzalpha</strong>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
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
    followUsLinks: [
      { label: "facebook", href: "https://facebook.com", icon: "mdi-facebook" },
      { label: "youtube", href: "https://youtube.com", icon: "mdi-youtube" },
      { label: "instagram", href: "https://instagram.com", icon: "mdi-instagram" },
      { label: "linkedin", href: "https://linkedin.com", icon: "mdi-linkedin" },
    ],
  }),
});
</script>

<style lang="scss" scoped>
@import "@/scss/footer";
</style>
