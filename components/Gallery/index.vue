<template>
  <div class="gallery-container">
    <!-- Sección de proyectos -->
    <v-container v-for="(project, projectIndex) in projects" :key="projectIndex" class="project-section mb-12">
      <!-- Encabezado del proyecto -->
      <v-row class="project-header align-center mb-4" @click="toggleProject(projectIndex)">
        <v-col cols="12" md="8">
          <h2 class="project-title text-uppercase">{{ project.title }}</h2>
          <div class="project-category">{{ project.category }}</div>
        </v-col>
        <v-col cols="12" md="4" class="text-right">
          <v-chip class="year-chip" color="primary" variant="outlined">
            {{ project.year }}
          </v-chip>
        </v-col>
      </v-row>

      <!-- Contenido del proyecto (se expande/contrae) -->
      <v-expand-transition>
        <div v-show="project.isExpanded">
          <!-- Descripción del proyecto -->
          <v-row class="mb-6">
            <v-col cols="12" md="8">
              <p class="project-description">{{ project.description }}</p>
              <v-chip-group class="mt-2">
                <v-chip v-for="(tag, tagIndex) in project.tags" :key="tagIndex" color="primary" variant="outlined" size="small">
                  {{ tag }}
                </v-chip>
              </v-chip-group>
            </v-col>
          </v-row>

          <!-- Galería de imágenes -->
          <v-row class="gallery-grid">
            <v-col 
              v-for="(photo, photoIndex) in project.images" 
              :key="photoIndex" 
              cols="12" 
              sm="6" 
              md="4"
              lg="3"
            >
              <v-hover v-slot="{ isHovering, props }">
                <v-card 
                  v-bind="props"
                  :elevation="isHovering ? 12 : 4"
                  class="gallery-card"
                  @click="openCarousel(projectIndex, photoIndex)"
                >
                  <div class="image-container">
                    <v-img 
                      :src="photo.src" 
                      :alt="photo.alt || 'Project image'"
                      height="250"
                      cover
                      class="gallery-image"
                      :class="{ 'image-zoom': isHovering }"
                    >
                      <template v-slot:placeholder>
                        <v-row class="fill-height" align="center" justify="center">
                          <v-progress-circular indeterminate color="primary"></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                    <div v-if="isHovering" class="overlay">
                      <v-icon size="48" color="white">mdi-magnify-plus-outline</v-icon>
                    </div>
                  </div>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </div>
      </v-expand-transition>
      
      <v-divider class="my-6 project-divider"></v-divider>
    </v-container>

    <!-- Diálogo con carrusel de fotos -->
    <v-dialog v-model="showCarousel" max-width="1200" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card dark class="carousel-dialog">
        <v-toolbar dark color="black" class="px-4">
          <v-toolbar-title class="text-h6">
            {{ currentProject?.title }} - {{ currentImageIndex + 1 }} / {{ currentProject?.images?.length || 0 }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="showCarousel = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        
        <v-carousel
          v-model="carouselIndex"
          :continuous="true"
          :show-arrows="true"
          hide-delimiters
          height="calc(100vh - 64px)"
          class="custom-carousel"
        >
          <v-carousel-item
            v-for="(image, index) in currentProject?.images || []"
            :key="index"
            class="carousel-item"
          >
            <div class="d-flex fill-height align-center justify-center">
              <v-img
                :src="image.src"
                :alt="image.alt || 'Project image'"
                contain
                max-height="90vh"
                max-width="90vw"
                class="carousel-image"
              >
                <template v-slot:placeholder>
                  <v-row class="fill-height" align="center" justify="center">
                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </div>
          </v-carousel-item>
        </v-carousel>
        
        <div class="carousel-caption pa-4">
          <div class="text-caption">{{ currentProject?.images?.[carouselIndex]?.caption || '' }}</div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [        
        {
          id: 1,
          title: 'Escalera Metálica Moderna',
          category: 'Diseño y Fabricación',
          year: '2023',
          description: 'Diseño y fabricación de escalera metálica con barandilla de vidrio templado. La estructura combina acero inoxidable pulido con peldaños de madera de roble para un acabado moderno y elegante.',
          tags: ['Diseño Personalizado', 'Acero Inoxidable', 'Acabado Premium'],
          isExpanded: true,
          images: [
            {
              src: 'https://res.cloudinary.com/dku13l2ep/image/upload/v1748182241/Construtech/gallery/escalera%20metalica/08842de0-aca5-4533-977f-ab596cb19fd9_nwqhpx.jpg',
              alt: 'Escalera metálica con barandilla de vidrio',
              caption: 'Vista general de la escalera terminada'
            },
            {
              src: 'https://res.cloudinary.com/dku13l2ep/image/upload/v1748182279/Construtech/gallery/escalera%20metalica/6c9873f1-1274-4908-8947-e036ded68c58_xrig5l.jpg',
              alt: 'Detalle de la barandilla',
              caption: 'Detalle de la unión entre la barandilla y los escalones'
            },
            {
              src: 'https://res.cloudinary.com/dku13l2ep/image/upload/v1748182281/Construtech/gallery/escalera%20metalica/af3b23fd-58d7-4c05-954f-bdbb974195d7_xszqxt.jpg',
              alt: 'Acabado de la escalera',
              caption: 'Detalle del acabado pulido del acero inoxidable'
            },
            {
              src: 'https://res.cloudinary.com/dku13l2ep/image/upload/v1748182335/Construtech/gallery/escalera%20metalica/08c3c54d-2373-41ac-9719-3d996bbe491f_ebey6i.jpg',
              alt: 'Acabado de la escalera',
              caption: 'Detalle del acabado pulido del acero inoxidable'
            },
            {
              src: 'https://res.cloudinary.com/dku13l2ep/image/upload/v1748182336/Construtech/gallery/escalera%20metalica/451e9912-a4b0-4136-ac4b-ee97cc4cdb28_bzvemy.jpg',
              alt: 'Acabado de la escalera',
              caption: 'Detalle del acabado pulido del acero inoxidable'
            }
          ]
        },
        {
          id: 2,
          title: 'Estructura Metálica Industrial',
          category: 'Fabricación e Instalación',
          year: '2024',
          description: 'Fabricación e instalación de estructura metálica para nave industrial con sistema de techo a dos aguas. El proyecto incluyó el diseño estructural, fabricación de perfiles y montaje in situ.',
          tags: ['Acero Estructural', 'Montaje Industrial', 'Diseño Personalizado'],
          isExpanded: true,
          images: [
            {
              src: 'https://res.cloudinary.com/dku13l2ep/image/upload/v1725307902/Construtech/gallery/WhatsApp_Image_2024-08-29_at_2.39.31_PM_ymgxhe.jpg',
              alt: 'Estructura metálica industrial terminada',
              caption: 'Vista general de la estructura metálica instalada'
            },
            {
              src: 'https://res.cloudinary.com/dku13l2ep/image/upload/v1725307898/Construtech/gallery/11232124_10153341265031308_7444657223328222309_n_jufyt6.jpg',
              alt: 'Detalle de uniones estructurales',
              caption: 'Detalle de las uniones soldadas y tratamiento superficial'
            },
            {
              src: 'https://res.cloudinary.com/dku13l2ep/image/upload/v1725374317/Construtech/gallery/WhatsApp_Image_2024-08-29_at_2.36.58_PM_cybuiy.jpg',
              alt: 'Proceso de montaje',
              caption: 'Proceso de montaje de la estructura principal'
            }
          ]
        },
        {
          id: 3,
          title: 'Escaleras de Madera Maciza',
          category: 'Carpintería Fina',
          year: '2023',
          description: 'Diseño y construcción de escaleras de madera maciza con pasamanos torneados a medida. Fabricadas en roble americano con acabado al aceite que resalta la veta natural de la madera. Incluye barandilla de diseño moderno con balaustres torneados.',
          tags: ['Madera Sólida', 'Diseño Clásico', 'Acabado Natural'],
          isExpanded: true,
          images: [
            {
              src: 'https://res.cloudinary.com/dku13l2ep/image/upload/v1725307899/Construtech/gallery/WhatsApp_Image_2024-08-29_at_3.41.21_PM_2_qg49iq.jpg',
              alt: 'Escalera de madera en residencia',
              caption: 'Vista general de la escalera principal en roble americano'
            },
            {
              src: 'https://res.cloudinary.com/dku13l2ep/image/upload/v1725324244/Construtech/gallery/WhatsApp_Image_2024-08-29_at_3.41.19_PM_1_hxcfmn.jpg',
              alt: 'Detalle de pasamanos',
              caption: 'Detalle del pasamanos torneado y barandilla'
            },
            {
              src: 'https://res.cloudinary.com/dku13l2ep/image/upload/v1725324243/Construtech/gallery/WhatsApp_Image_2024-08-29_at_3.41.19_PM_bs91sk.jpg',
              alt: 'Acabado de la madera',
              caption: 'Acabado al aceite que resalta la veta natural de la madera'
            }
            // {
            //   src: 'https://images.unsplash.com/photo-160012184859-8e7b8cc6674a?w=800&auto=format&fit=crop&q=80',
            //   alt: 'Estructura de la escalera',
            //   caption: 'Detalle de la estructura y construcción sólida'
            // }
          ]
        },
        {
          id: 4,
          title: 'Puertas Metálicas',
          category: 'Herrería y Seguridad',
          year: '2024',
          description: 'Fabricación e instalación de puertas metálicas de alta seguridad con sistema de cerradura multipunto y refuerzos estructurales. Acabado en pintura epóxica con tratamiento anticorrosivo. Incluye sistema de cierre automático y mirilla digital.',
          tags: ['Alta Seguridad', 'Acero Galvanizado', 'Diseño Moderno'],
          isExpanded: true,
          images: [
            {
              src: 'https://res.cloudinary.com/dku13l2ep/image/upload/v1725374317/Construtech/gallery/WhatsApp_Image_2024-08-29_at_2.36.58_PM_cybuiy.jpg',
              alt: 'Puerta metálica principal',
              caption: 'Vista frontal de la puerta metálica de seguridad'
            },
            {
              src: 'https://res.cloudinary.com/dku13l2ep/image/upload/v1725324244/Construtech/gallery/WhatsApp_Image_2024-08-29_at_3.01.15_PM_2_ahlnwc.jpg',
              alt: 'Sistema de cerradura',
              caption: 'Detalle del sistema de cerradura multipunto'
            },
            {
              src: 'https://res.cloudinary.com/dku13l2ep/image/upload/v1725324243/Construtech/gallery/WhatsApp_Image_2024-08-29_at_3.01.15_PM_xxss7h.jpg',
              alt: 'Acabado y herrajes',
              caption: 'Detalle del acabado y herrajes de alta resistencia'
            }
            // {
            //   src: 'https://images.unsplash.com/photo-1600585154340-3ed78fcb7696?w=800&auto=format&fit=crop&q=80',
            //   alt: 'Instalación profesional',
            //   caption: 'Proceso de instalación profesional con sellado perimetral'
            // }
          ]
        },
        {
          id: 5,
          title: 'Remodelación Integral de Baño',
          category: 'Remodelación Residencial',
          year: '2024',
          description: 'Transformación completa de baño principal, convirtiendo un espacio anticuado en un moderno baño de lujo. Incluyó redistribución de espacios, instalación de nuevos sistemas hidráulicos y eléctricos, colocación de porcelanato de gran formato, mobiliario suspendido y accesorios de alta gama. Se optimizó el espacio con soluciones de almacenamiento inteligente y se instaló un sistema de iluminación LED con regulación de intensidad.',
          tags: ['Diseño de Interiores', 'Alta Calidad', 'Materiales Premium'],
          isExpanded: true,
          images: [
            {
              src: 'https://res.cloudinary.com/dku13l2ep/image/upload/v1748180750/Construtech/gallery/ba%C3%B1o/20250403_133218_qjkmd3.jpg',
              alt: 'Baño antes de la remodelación',
              caption: 'Estado original del baño antes de la remodelación'
            },
            {
              src: 'https://res.cloudinary.com/dku13l2ep/image/upload/v1748180748/Construtech/gallery/ba%C3%B1o/20250403_133149_xk0ss1.jpg',
              alt: 'Baño después de la remodelación',
              caption: 'Resultado final: baño moderno y funcional'
            },
            {
              src: 'https://res.cloudinary.com/dku13l2ep/image/upload/v1748180745/Construtech/gallery/ba%C3%B1o/20250324_122405_q8c9xj.jpg',
              alt: 'Ducha a ras de piso',
              caption: 'Ducha a ras de piso con mampara de vidrio templado'
            },
            {
              src: 'https://res.cloudinary.com/dku13l2ep/image/upload/v1748180745/Construtech/gallery/ba%C3%B1o/20250324_122350_eziwjf.jpg',
              alt: 'Mueble de baño',
              caption: 'Mueble suspendido con lavabo integrado y grifería moderna'
            }
          ]
        },
        {
          id: 6,
          title: 'Renovación de Alfombras',
          category: 'Acabados Interiores',
          year: '2025',
          description: 'Servicio profesional de cambio de alfombras en áreas residenciales y comerciales. Incluye retiro de la alfombra antigua, preparación de la superficie e instalación de la nueva alfombra con los más altos estándares de calidad.',
          tags: ['Alfombras', 'Renovación', 'Interiores'],
          isExpanded: true,
          images: [
            {
              src: 'https://res.cloudinary.com/dku13l2ep/image/upload/v1748181436/Construtech/gallery/pisos/20250415_113332_szryah.jpg',
              alt: 'Sala con alfombra nueva instalada',
              caption: 'Sala con nueva alfombra instalada, mostrando el acabado final'
            },
            {
              src: 'https://res.cloudinary.com/dku13l2ep/image/upload/v1748181440/Construtech/gallery/pisos/20250415_125558_ardoa6.jpg',
              alt: 'Proceso de instalación',
              caption: 'Técnico realizando la instalación de la alfombra nueva'
            },
            {
              src: 'https://res.cloudinary.com/dku13l2ep/image/upload/v1748181440/Construtech/gallery/pisos/20250415_120121_nuendl.jpg',
              alt: 'Detalle de la costura',
              caption: 'Detalle de la costura y acabado en las uniones de la alfombra'
            }
          ]
        }
      ],
      showCarousel: false,
      carouselIndex: 0,
      currentProject: null,
      currentImageIndex: 0
    };
  },
  methods: {
    toggleProject(index) {
      this.projects[index].isExpanded = !this.projects[index].isExpanded;
    },
    openCarousel(projectIndex, imageIndex) {
      this.currentProject = this.projects[projectIndex];
      this.carouselIndex = imageIndex;
      this.currentImageIndex = imageIndex;
      this.showCarousel = true;
    },
    closeCarousel() {
      this.showCarousel = false;
    }
  },
  mounted() {
    // Expandir solo el primer proyecto por defecto
    if (this.projects.length > 0) {
      this.projects.forEach((p, index) => {
        p.isExpanded = index === 0;
      });
    }
  }
};
</script>

<style scoped>
/* Estilos generales */
.gallery-container {
  background-color: #111;
  color: #fff;
  padding: 2rem 0;
}

/* Estilos de sección de proyecto */
.project-section {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.project-header {
  cursor: pointer;
  padding: 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  background: linear-gradient(90deg, rgba(30,30,30,0.8) 0%, rgba(45,45,45,0.4) 100%);
  border-left: 4px solid #FF80AB;
}

.project-header:hover {
  background: linear-gradient(90deg, rgba(40,40,40,0.9) 0%, rgba(60,60,60,0.5) 100%);
  transform: translateX(5px);
}

.project-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
}

.project-category {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.9rem;
  color: #FF80AB;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.year-chip {
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
  border: 2px solid #FF80AB !important;
  background-color: rgba(0,0,0,0.3) !important;
  color: #FF80AB !important;
}

.project-description {
  color: #ccc;
  line-height: 1.7;
  font-size: 1rem;
  margin-bottom: 1rem;
}

/* Estilos de la galería */
.gallery-grid {
  margin-top: 1.5rem;
}

.gallery-card {
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: #1e1e1e;
  border: 1px solid #333;
  height: 100%;
}

.gallery-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(255, 109, 0, 0.2) !important;
  border-color: #ff6d00;
}

.image-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.gallery-image {
  transition: transform 0.5s ease;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-zoom {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-card:hover .overlay {
  opacity: 1;
}

/* Estilos del diálogo del carrusel */
.carousel-dialog {
  background-color: #000 !important;
}

.custom-carousel {
  background-color: #000;
}

.carousel-item {
  background-color: #000;
}

.carousel-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  color: #fff;
  padding: 2rem 1rem 1rem;
  text-align: center;
}

/* Efectos de transformación estilo Transformers */
.project-divider {
  background: linear-gradient(90deg, transparent, #ff6d00, transparent);
  height: 2px;
  border: none;
  opacity: 0.3;
}

/* Animaciones */
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(255, 109, 0, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(255, 109, 0, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 109, 0, 0); }
}

/* Efecto de maquinaria industrial */
.gallery-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ff6d00, transparent);
  z-index: 1;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.gallery-card:hover::before {
  transform: scaleX(1);
  animation: scanline 2s linear infinite;
}

@keyframes scanline {
  0% { transform: scaleX(0) translateX(-100%); }
  50% { transform: scaleX(1) translateX(0); }
  100% { transform: scaleX(0) translateX(100%); }
}

/* Responsive */
@media (max-width: 960px) {
  .project-title {
    font-size: 1.5rem;
  }
  
  .project-category {
    font-size: 0.8rem;
  }
}

@media (max-width: 600px) {
  .project-title {
    font-size: 1.3rem;
  }
  
  .project-description {
    font-size: 0.9rem;
  }
}
</style>
