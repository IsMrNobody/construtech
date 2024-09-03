<template>
  <v-responsive class="border rounded">
    <v-app>
      <v-app-bar color="primary" prominent>
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>
          <v-img height="60px" src="/horiz.png"></v-img>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-if="$vuetify.display.mdAndUp">
          <nuxt-link
            to="https://api.whatsapp.com/send?phone=447391703855&text=Hello%20Construtech"
            target="_blank"
          >
            <v-btn class="mr-6" x-large color="white">
              Contact
              <v-icon>mdi-whatsapp</v-icon>
            </v-btn>
          </nuxt-link>

          <!-- <v-btn icon="mdi-filter" variant="text"></v-btn> -->
        </template>

        <!-- <v-btn icon="mdi-dots-vertical" variant="text"></v-btn> -->
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        temporary
      >
        <!-- <v-list :items="items"></v-list> -->
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            router
            exact
            color="pink-accent-1"
            :to="item.value"
          >
            <!-- <v-list-item-action>
              <v-icon color="#BF360C">mdi-fire</v-icon>
            </v-list-item-action> -->
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <slot />
      </v-main>
    </v-app>
  </v-responsive>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    group: null,
    items: [
      {
        title: "Home",
        value: "/",
      },
      {
        title: "Gallery",
        value: "/gallery",
      },
    ],
  }),
};
</script>
