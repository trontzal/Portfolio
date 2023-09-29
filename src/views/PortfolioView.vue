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

        <OverlayPortfolio :overlay="overlay" :selectedPortfolio="selectedPortfolio"></OverlayPortfolio>
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
        }
    },
    data(){
        return{
            overlay: false,
            selectedPortfolio: null,
            portfolio:{
                'MemoryQuest':{
                    imagenPortada: "MemoryQuest/principalMemory.png",
                    titulo: "Memory Quest"
                },
                'WeatherApp':{
                    imagenPortada: "WeatherApp/principalWeather.png",
                    titulo: "Weather App"
                },
                'ToPets':{
                    imagenPortada: "ToPets/topetsprincipal.png",
                    titulo: "ToPets"
                },
                'Montano':{
                    imagenPortada: "Montano/montanoprincipal.png",
                    titulo: "Montano"
                },
                'ToDo':{
                    imagenPortada: "",
                    titulo: "To Do"
                },
                'Progres':{
                    imagenPortada: "",
                    titulo: ""
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
        gap: 1rem;
    }

    
</style>