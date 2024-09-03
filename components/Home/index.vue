<template>
  <v-container>
    <v-row>
      <v-col align="center">
        <div>
          <v-img
            height="300"
            :width="300"
            aspect-ratio="16/9"
            src="/logo-tech.png"
          >
          </v-img>

          <v-btn
            size="x-large"
            variant="outlined"
            :loading="loading"
            color="primary"
          >
            Under
            <v-icon>mdi-hammer</v-icon>
            construction
          </v-btn>
          <!-- <h1>Where the material find his balance</h1> -->
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    loading: true,
  }),
  created() {
    setTimeout(() => (this.loading = false), 3000);
  },
};
</script>
