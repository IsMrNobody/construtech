<template>
  <div>
    <v-img
      height="100vh"
      class="bordo d-flex align-center"
      cover
      src="https://res.cloudinary.com/dku13l2ep/image/upload/v1725371968/Construtech/banners/b-gh_1_ofajnb.png"
    >
      <v-container>
        <v-card
          color="background"
          class="mx-auto blur pa-4 ma-2"
          flat
          variant="tonal"
        >
          <v-card-text>
            <h3 class="text-medium-emphasis">Steel & Joinery</h3>

            <h1 class="text-uppercase text-white text-h2 font-weight-black">
              Where materials meet their balance
            </h1>

            <h3 class="text-medium-emphasis text-h4">Company based in UK</h3>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <nuxt-link to="/gallery">
              <v-btn
                prepend-icon="mdi-fire"
                size="x-large"
                text="Gallery"
                variant="elevated"
                color="background"
              ></v-btn>
            </nuxt-link>
          </v-card-actions>
        </v-card>

        <div class="d-flex justify-start mb-6 abso">
          <v-card
            v-for="n in works"
            :key="n"
            class="ma-2 elevation-10 d-none d-sm-flex"
            color="secondary"
            variant="outlined"
            width="100"
          >
            <v-img height="100" cover :src="n.img"></v-img>
          </v-card>
        </div>
      </v-container>
    </v-img>
    <ArticleHome />
    <WeDo />
    <Parallax />
    <banner-footer />
    <footer-contact />
  </div>
</template>

<script>
import Parallax from "./Parallax";
import ArticleHome from "./ArticleHome.vue";
import WeDo from "./WeDo.vue";
import BannerFooter from "./BannerFooter.vue";
import FooterContact from "./FooterContact.vue";
export default {
  components: { ArticleHome, WeDo, Parallax, BannerFooter, FooterContact },
  data() {
    return {
      works: [
        {
          img: "https://res.cloudinary.com/dku13l2ep/image/upload/v1725307899/Construtech/gallery/WhatsApp_Image_2024-08-29_at_3.41.21_PM_2_qg49iq.jpg",
        },
        {
          img: "https://res.cloudinary.com/dku13l2ep/image/upload/v1725307902/Construtech/gallery/WhatsApp_Image_2024-08-29_at_2.39.31_PM_ymgxhe.jpg",
        },
        {
          img: "https://res.cloudinary.com/dku13l2ep/image/upload/v1725307897/Construtech/gallery/WhatsApp_Image_2024-08-29_at_3.41.21_PM_sihoyj.jpg",
        },
      ],
    };
  },
};
</script>

<style>
h3 {
  animation: blinker 1.5s linear infinite;
  /* color: red; */
  /* font-family: sans-serif; */
}
@keyframes blinker {
  50% {
    opacity: 0;
  }
}
.blur {
  backdrop-filter: blur(40px) opacity(0.9);
  border: #ffabab 2px solid;
}
.abso {
  position: absolute;
  bottom: 25%;
  right: 25%;
  z-index: 20;
}
.bordo {
  /* height: 80vh; */
  clip-path: polygon(
    50% 2.45%,
    100% 0%,
    100% 23%,
    96.25% 39.27%,
    96.25% 67.75%,
    100% 82%,
    100% 100%,
    81.15% 100%,
    70.53% 94.7%,
    29.53% 94.7%,
    19.35% 100%,
    0% 100%,
    0% 82%,
    4.09% 67.75%,
    4.09% 39.27%,
    0% 23%,
    0% 0%
  );
  border-radius: 20px;
  border: 4px solid #ffabab;
}
</style>
