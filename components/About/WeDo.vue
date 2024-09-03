<template>
  <div class="bord">
    <v-container class="mb-6">
      <v-row justify="center" no-gutters>
        <v-col cols="12" class="top">
          <p
            class="d-flex justify-center text-h2 mb-16 font-weight-bold text-uppercase"
          >
            What we do
          </p>
        </v-col>
        <v-col v-for="n in does" :key="n" cols="12" sm="5" lg="3" class="ma-4">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              class="mx-auto"
              color="grey-lighten-4"
              :width="300"
              height="460"
              v-bind="props"
            >
              <v-img :aspect-ratio="16 / 9" :src="n.img" cover>
                <v-expand-transition>
                  <div
                    v-if="isHovering"
                    class="d-flex transition-fast-in-fast-out bg-primary v-card--reveal text-h2"
                    style="height: 100%"
                  >
                    {{ n.type }}
                  </div>
                </v-expand-transition>
              </v-img>

              <v-card-text class="pt-6">
                <div class="font-weight-light text-grey text-h6 mb-2">
                  {{ n.sub }}
                </div>

                <h3 class="text-h4 font-weight-light text-primary mb-2">
                  {{ n.subtitle }}
                </h3>

                <div class="font-weight-light text-h6 mb-2">
                  {{ n.title }}
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
    <contact-messaje />
  </div>
</template>

<script>
import ContactMessaje from "./ContactMessaje.vue";
export default {
  components: { ContactMessaje },
  data() {
    return {
      does: [
        {
          sub: "Industry standards",
          img: "https://res.cloudinary.com/dku13l2ep/image/upload/v1725369227/Construtech/banners/bgbanner_xp2ubr.jpg",
          type: "Steel",
          subtitle: "Steel Fabrication",
          title:
            "Design, fabrication, and installation of steel structures meeting the highest industry standards.",
        },
        {
          sub: "Joinery",
          img: "https://res.cloudinary.com/dku13l2ep/image/upload/v1725375474/Construtech/banners/C40dvIVWEAIrGo8_href9q.jpg",
          type: "Joinery",
          subtitle: "Custom Joinery",
          title:
            "Tailored cabinetry and intricate woodwork with a focus on quality and detail.",
        },
        {
          sub: "Industrial facilities",
          img: "https://res.cloudinary.com/dku13l2ep/image/upload/v1725375627/Construtech/banners/pexels-reneterp-3990359_lvssci.jpg",
          type: "Work",
          subtitle: "Complete Remodeling",
          title:
            "Comprehensive remodeling services from planning and design to execution, ensuring seamless integration.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.top {
  margin-top: 280px;
}
.bord {
  clip-path: polygon(
    50% 2.45%,
    68% 8.77%,
    100% 8.77%,
    100% 100%,
    0% 100%,
    0% 2.77%
  );
  background-color: #d3d3d3;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
}
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
