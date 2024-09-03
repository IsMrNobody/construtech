<template>
  <div class="mar">
    <v-row>
      <v-col align="center" class="d-flex align-center justify-center">
        <h2 class="font-weight-black text-uppercase text-h3">Our process</h2>
      </v-col>
    </v-row>
    <v-container style="max-width: 1200px">
      <v-row class="">
        <v-col v-for="n in proceso" :key="n">
          <v-card class="ma-2 mx-auto" width="420">
            <v-img contain v-if="n.img" :src="n.img"></v-img>
            <v-card-text v-if="n.text">{{ n.text }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <!-- <v-row>
        <v-col cols="12" sm="6">
          <v-card height="300" w class="d-flex align-center">
            <h2 class="ma-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium eveniet itaque facere perspiciatis animi dicta tenetur
              officia aut deleniti error cumque necessitatibus optio, molestias
              aliquid voluptates ad fuga soluta quia!
            </h2>
          </v-card>
        </v-col>
        <v-col>
          <v-img cover height="300" src="/b-ghg.png"></v-img>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-img cover height="300" src="/b-ghg.png"></v-img>
        </v-col>
        <v-col sm="6" cols>
          <v-card height="300" class="">
            <v-card-title> title </v-card-title>
            <h3 class="text-h5 ma-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium eveniet itaque facere perspiciatis animi dicta tenetur
              officia aut deleniti error cumque necessitatibus optio, molestias
              aliquid voluptates ad fuga soluta quia!
            </h3>
          </v-card>
        </v-col>
      </v-row> -->
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    proceso: [
      {
        text: "lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.",
        img: "",
      },
      {
        text: "",
        img: "/b-ghg.png",
      },
      {
        text: "",
        img: "/b-ghg.png",
      },
      {
        text: "lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.",
        img: "",
      },
    ],
  }),
};
</script>

<style scoped>
.bord {
  /* clip-path: polygon(
    100% 100%,
    100% 69.75%,
    89% 60.5%,
    89% 38.5%,
    100% 24.75%,
    100% 0%,
    0% 0%,
    0% 24.75%,
    14.5% 38.5%,
    14.5% 60.5%,
    0% 69.75%,
    0% 100%
  ); */
  margin-bottom: 50px;
  background-color: #ff8fd4;
}
.mar {
  margin-bottom: 200px;
  background-color: #ff8fd4;
}
</style>
