<template>
  <div v-if="selectedPortfolio2">
    <Carousel :items-to-show="2" :wrap-around="true" class="carrusel">
      <Slide v-for="(slide, index) in slides" :key="index">
        <div class="carousel__item">
          <img :src="require(`@/assets/Portfolio/${slide}`)" class="imgCarrusel" alt="Portfolio Image">
        </div>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Navigation, Slide, Pagination} from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default {
  name: 'PortfolioCarousel',
  props: {
    selectedPortfolio2: {
      type: Object
    }
  },
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination
  },
  computed: {
    slides() {
      if (this.selectedPortfolio2 && this.selectedPortfolio2.imagenes.imagenPortada) {
        const imagenesArray = Object.values(this.selectedPortfolio2.imagenes);
        return imagenesArray;
      }
      return ["noImage.jpg"];
    }
  },
};
</script>

<style>
.carrusel {
  margin: 20px 0;
}

.carousel__item {
  height: auto;
  width: auto;
  background-color: #000000;
  color: white;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.carousel__item:hover {
  transform: scale(1.05);
}

.carousel__slide {
  padding: 10px;
}


.imgCarrusel {
  height: 10rem;
  max-width: 100%; /* Asegura que la imagen no se desborde del contenedor */
  border-radius: 8px;
}



.carousel__pagination-button::after{
  background-color: rgb(255, 255, 255) !important;
}
.carousel__pagination-button:hover::after{
  background-color: rgba(255, 255, 255, 0.589) !important;
}
.carousel__pagination-button--active::after{
  background-color: rgb(255,255,1) !important;
}
.carousel__pagination-button--active:hover::after{
  background-color: rgba(255, 255, 1, 0.705) !important;
}

.carousel__icon{
  border: 1px solid rgb(0, 0, 0);
  background-color: rgba(255, 255, 255, 0.479);
}

.carousel__icon:hover{
  scale: 1.05;
}

</style>



