<template>
  <div>
    <!-- Galería de fotos con cards -->
    <v-row>
      <v-col v-for="(photo, index) in photos" :key="index" cols="6" sm="3">
        <v-card @click="openCarousel(index)" density="compact" height="350">
          <v-img :src="photo.src" height="100%" cover />
        </v-card>
      </v-col>
    </v-row>

    <!-- Diálogo con carrusel de fotos -->
    <v-dialog v-model="showCarousel" max-width="800">
      <v-card>
        <v-carousel
          v-model="carouselIndex"
          :cycle="true"
          :hide-controls="false"
          :hide-delimiters="false"
        >
          <v-carousel-item v-for="(photo, index) in photos" :key="index">
            <v-img :src="photo.src" height="100%" cover />
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photos: [
        {
          src: "https://res.cloudinary.com/dku13l2ep/image/upload/v1725307902/Construtech/gallery/WhatsApp_Image_2024-08-29_at_2.39.31_PM_ymgxhe.jpg",
        },
        {
          src: "https://res.cloudinary.com/dku13l2ep/image/upload/v1725307899/Construtech/gallery/WhatsApp_Image_2024-08-29_at_3.41.21_PM_2_qg49iq.jpg",
        },
        {
          src: "https://res.cloudinary.com/dku13l2ep/image/upload/v1725374317/Construtech/gallery/WhatsApp_Image_2024-08-29_at_2.36.58_PM_cybuiy.jpg",
        },
        {
          src: "https://res.cloudinary.com/dku13l2ep/image/upload/v1725307897/Construtech/gallery/WhatsApp_Image_2024-08-29_at_3.41.21_PM_sihoyj.jpg",
        },
        {
          src: "https://res.cloudinary.com/dku13l2ep/image/upload/v1725324243/Construtech/gallery/WhatsApp_Image_2024-08-29_at_3.01.15_PM_xxss7h.jpg",
        },
        {
          src: "https://res.cloudinary.com/dku13l2ep/image/upload/v1725324244/Construtech/gallery/WhatsApp_Image_2024-08-29_at_3.41.19_PM_1_hxcfmn.jpg",
        },

        // ...
      ],
      showCarousel: false,
      carouselIndex: 0,
    };
  },
  methods: {
    openCarousel(index) {
      this.carouselIndex = index;
      this.showCarousel = true;
    },
  },
};
</script>
