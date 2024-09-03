<template>
  <v-container>
    <v-row class="mt-12">
      <v-col>
        <h2 class="font-weight-black text-uppercase text-h3">
          Expert Construction and Remodeling Services
        </h2>
      </v-col>
      <v-col>
        <p class="font-weight-bold text-h6">
          We specialize in offering top-tier construction and remodeling
          services with a focus on steel and joinery work. Whether for
          industrial facilities, commercial spaces, or private residences, we
          bring your vision to life.
        </p>
        <nuxt-link to="/gallery">
          <v-btn
            variant="outlined"
            size="x-large"
            block
            class="mt-8"
            color="primary"
            >see more</v-btn
          >
        </nuxt-link>
      </v-col>
    </v-row>
    <!-- <v-col class="mt-12">
      <v-img
        class="bordes d-flex align-center mx-auto"
        cover
        aspect-ratio="16/9"
        max-width="1200"
        src="/b-ghg.png"
      >
        <v-img class="mx-auto" width="380px" src="/logo-tech.png"></v-img>
      </v-img>
    </v-col> -->
  </v-container>
</template>
