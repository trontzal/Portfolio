    <template>
    <Carousel :items-to-show="2.5" :wrap-around="true" class="carrusel">
      <Slide v-for="slide in slides" :key="slide">
        <div class="carousel__item"><img :src="require(`@/assets/Portfolio/${slide}`)" class="imgCarrusel"></div>
      </Slide>
  
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import { Carousel, Navigation, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'
  
  export default {
    name: 'WrapAround',
    components: {
      Carousel,
      Slide,
      Navigation,
    },
    data(){
        return{
            slides:["MemoryQuest/principalMemory.png","MemoryQuest/secundariaWeather.png","MemoryQuest/terceraWeather.png"]
        }
    }
  }
  </script>
  
  <style>

  .carousel__track{
    width:120% !important;
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