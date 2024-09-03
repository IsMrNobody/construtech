<template>
  <v-footer class="text-center d-flex flex-column">
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        class="mx-4"
        variant="text"
      ></v-btn>
    </div>

    <v-col class="pt-0" sm="7">
      <address>
        Email:
        <a class="text-primary" href="mailto:carlo.kuk@construtech.com"
          >Carlo Kuk</a
        >.<br />
        Visit us at: @construtech.uk<br />
        <div>
          <v-icon>mdi-map-marker</v-icon>
          8C Murraysgate Industrial State Whitburn EH47 0LE
        </div>
      </address>
      <p class="text-medium-emphasis">
        Transform your space with expert construction and remodelling services.
        From robust steel structures to custom carpentry, we bring your vision
        to life with guaranteed quality. Contact us today and start building
        your dreams!
      </p>
    </v-col>

    <v-divider></v-divider>

    <div>{{ new Date().getFullYear() }} — <strong>Construtech</strong></div>
  </v-footer>
</template>
