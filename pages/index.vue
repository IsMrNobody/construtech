<template >
  <div style="height: 40vh;" class="d-flex flex-column">
    <v-img
    :width="300"
    aspect-ratio="16/9"
    src="/logo.png"
    >
  
  </v-img>
  
 <v-btn
    size="x-large"
    variant="outlined"
    :loading="loading"
    color="pink-accent-1"
    class=""
  >
   Under 
   <v-icon>mdi-hammer</v-icon>
   construction</v-btn>
    <!-- <h1>Where the material find his balance</h1> -->
  </div>
</template >


<script>
export default {
  data: () => ({
    loading: true
  }),
  created() {
    setTimeout(() => (this.loading = false), 3000)
  },
  computed: {
  },
  methods: {
  },
}
</script>


<style scoped>
.rojo {
  color: red;
}
</style>
