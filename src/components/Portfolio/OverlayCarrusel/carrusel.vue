<template>
  <div v-if="selectedPortfolio2">
    <Carousel :items-to-show="2" :wrap-around="true" class="carrusel">
      <Slide v-for="(slide, index) in slides" :key="index">
        <div class="carousel__item">
          <img :src="require(`@/assets/Portfolio/${slide}`)" class="imgCarrusel">
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default {
  name: 'WrapAround',
  props: {
    selectedPortfolio2: {
      type: Object
    }
  },
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  computed: {
    slides() {
      if (this.selectedPortfolio2 && this.selectedPortfolio2.img1) {
        return [this.selectedPortfolio2.img1, this.selectedPortfolio2.imagenPortada, this.selectedPortfolio2.img2, this.selectedPortfolio2.img3];
      }
      return [];
    }
  },
};
</script>

  
  <style>

    .carousel__track{
        margin:0px -659.6px !important;
    }
    
    .carousel__item {
        height:auto;
        width: auto;
        background-color: green;
        color: white;
        font-size: 20px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .carousel__slide {
        padding: 10px;
    }


    .carousel__pagination-button--active::after {
        background-color:rgb(255, 255, 255);
    }   
    .imgCarrusel{
        height:10rem;
    }
</style>