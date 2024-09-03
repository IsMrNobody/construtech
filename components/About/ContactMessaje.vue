<template>
  <v-container>
    <v-col>
      <v-card
        max-width="700"
        class="esquina pa-4 mx-auto"
        color="grey-darken-4"
      >
        <v-card-text
          class="text-grey-darken-2 text-h5 font-weight-bold text-justify"
          >"With a commitment to quality, safety, and customer satisfaction, we
          guarantee that every project will be completed on time and within
          budget."
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <nuxt-link
            to="https://api.whatsapp.com/send?phone=447391703855&text=Hello%20Construtech"
            target="_blank"
          >
            <v-btn variant="outlined" size="x-large" color="primary"
              >Contact now
              <v-icon x-large>mdi-whatsapp</v-icon>
            </v-btn>
          </nuxt-link>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-container>
</template>

<style scoped>
.esquina {
  clip-path: polygon(
    10% 0,
    90% 0,
    100% 10%,
    100% 90%,
    90% 100%,
    10% 100%,
    0 90%,
    0 10%
  );
  border-radius: 8px;
  border: 2px solid #dbdbdb;
  margin-top: 100px;
  margin-bottom: 80px;
}
</style>
