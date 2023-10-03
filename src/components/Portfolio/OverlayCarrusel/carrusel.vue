<template>
  <div v-if="selectedPortfolio2">
    <Carousel :items-to-show="2" :wrap-around="true" class="carrusel">
      <Slide v-for="(slide, index) in slides" :key="index">
        <div class="carousel__item">
          <img
            :src="require(`@/assets/Portfolio/${slide}`)"
            class="imgCarrusel"
            alt="Portfolio Image"
            @click="showImage(slide)">
        </div>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>

    <!-- Cuando se selecciona la imagen -->
    <div v-if="selectedImage" class="image-modal">
      <div class="modal-content">
        <span class="close" @click="closeImageModal">X</span>
        <img :src="require(`@/assets/Portfolio/${selectedImage}`)" alt="Portfolio Image" />
      </div>
    </div>
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
  data(){
    return{
      selectedImage : null
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
  methods: {
    showImage(image) {
      this.selectedImage = image
    },
    closeImageModal() {
      this.selectedImage = null
    },
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
  max-width: 100%; 
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

/* cuando se selecciona la imagen */

.image-modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow:hidden;
  background-color: rgba(0, 0, 0, 0.9);
}

.modal-content {
  margin: auto;
  display: block;
  position: relative;
  top: 50%;
  height: -webkit-fill-available;
  width: -webkit-fill-available;
  transform: translateY(-50%);
  margin-top: 3rem;

}

.modal-content > img{
  max-width: -webkit-fill-available;
  max-height: 90%;
  display: flex;
  margin: 0 auto;
}

.close {
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  color: rgb(255,255,1);
  font-size: 2rem;
  cursor: pointer;
}

.close:hover{
  scale: 1.2;
}


@media  screen and (max-width:900px) {
  .modal-content {
    margin-top: 10rem;
    top: 30%;
  }

  .carousel__slide{
    padding: 2px;
  }

  .imgCarrusel{
    height: 7rem;
  }
}
</style>



