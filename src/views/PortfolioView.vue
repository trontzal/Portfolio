<template>
    <div id="Portfolio">
      <div class="tituloSobreMi">
        <h2 class="tituloVista">PORTFOLIO</h2>
        <h2 class="sombraTitulo">PORTFOLIO</h2>
      </div>
        <Cuadrado class="cuadradoPortfolio">
            <ItemPortfolio
                @click="showOverlay(portfolio1)"
                v-for="(portfolio1,index) in portfolio"
                :portfolio="portfolio1"
                :key="index">
            </ItemPortfolio>
        </Cuadrado>

        <OverlayPortfolio 
            :overlay="overlay" 
            :selectedPortfolio="selectedPortfolio" 
            @cerrarOverlay="cerrarOverlay"></OverlayPortfolio>
    </div>
</template>

<script>
import ItemPortfolio from "@/components/Portfolio/ItemPortfolio.vue"
import Cuadrado from "@/components/cuadradoComp.vue";
import OverlayPortfolio from "@/components/Portfolio/OverlayPortfolio.vue";

export default{
    components:{
        ItemPortfolio,
        Cuadrado,
        OverlayPortfolio
    },
    methods: {
        showOverlay(portfolio1) {
        this.overlay = true;
        this.selectedPortfolio = portfolio1;
        },
        cerrarOverlay(){
            this.overlay = false;
        }
    },
    data(){
        return{
            overlay: false,
            selectedPortfolio: null,
            portfolio:{
                'MemoryQuest':{
                    imagenPortada: "MemoryQuest/principalMemory.png",
                    titulo: "Memory Quest",
                    autor: "Yo",
                    tecnologias: "Vue 3, Figma, Python, Flask, MySQL, Railway",
                    githubFront: "https://github.com/trontzal/MemoryQuestFront",
                    githubBack: "https://github.com/trontzal/MemoryQuestBack",
                    descripcion: "",
                    img1: "MemoryQuest/secundariaWeather.png",
                    img2: "MemoryQuest/terceraWeather.png"
                },
                'WeatherApp':{
                    imagenPortada: "WeatherApp/principalWeather.png",
                    titulo: "Weather App",
                    autor: "",
                    tecnologias: "",
                    githubFront: "",
                    githubBack: "",
                    descripcion: "",
                    img1: "",
                    img2: ""
                },
                'ToPets':{
                    imagenPortada: "ToPets/topetsprincipal.png",
                    titulo: "ToPets",
                    autor: "",
                    tecnologias: "",
                    githubFront: "",
                    githubBack: "",
                    descripcion: "",
                    img1: "",
                    img2: ""
                },
                'Montano':{
                    imagenPortada: "Montano/montanoprincipal.png",
                    titulo: "Montano",
                    autor: "",
                    tecnologias: "",
                    githubFront: "",
                    githubBack: "",
                    descripcion: "",
                    img1: "",
                    img2: ""
                },
                'ToDo':{
                    imagenPortada: "",
                    titulo: "To Do",
                    autor: "",
                    tecnologias: "",
                    githubFront: "",
                    githubBack: "",
                    descripcion: "",
                    img1: "",
                    img2: ""
                },
                'Progres':{
                    imagenPortada: "",
                    titulo: "",
                    autor: "",
                    tecnologias: "",
                    githubFront: "",
                    githubBack: "",
                    descripcion: "",
                    img1: "",
                    img2: ""
                }
            }
        }
    }
}

</script>

<style>
    #Portfolio{
        display: flex;
        width: 100%;
        flex-direction: column;
    }

    .cuadradoPortfolio > div{
        color: white;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    
</style>