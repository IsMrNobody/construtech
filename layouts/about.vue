<template>
  <v-layout class="rounded rounded-md">
    <v-navigation-drawer color="pink-accent-2">
      <v-col class="text-center">
        <nuxt-link to="/about">
          <img width="120px" src="/logo.png" />
        </nuxt-link>
      </v-col>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          router
          exact
          color="black"
          :to="item.to"
        >
          <!-- <v-list-item-action>
              <v-icon color="#BF360C">mdi-fire</v-icon>
            </v-list-item-action> -->
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>

        <!-- feria -->
        <!-- <v-list-item color="primary" router exact to="/">
            <v-list-item-action>
              <v-icon color="#BF360C">mdi-table-chair</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item> -->
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="grey" title="Steel & Joinery"></v-app-bar>

    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 300px"
    >
      <slot />
    </v-main>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: "mdi-fire",
          title: "Inicio",
          to: "/",
        },
        {
          icon: "mdi-fire",
          title: "Steel",
          to: "/about",
        },
      ],
    };
  },
};
</script>
