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
        <div v-if="overlay" id="OverlayPortfolio" @click.self="overlay = false">
            <div class="overlayDentro">
                <h3 class="tituloOverlay">TITULO</h3>
                <p>Autor: Trabajo grupal en peñascal</p>
                <p>Tecnologias:  Vue, figma, etc</p>
                <p>gitHub: <a href="">Link</a></p>
                <p>gitHub backend: <a href=""></a>Link</p>
            </div>
        </div>
    </div>
</template>

<script>
import ItemPortfolio from "@/components/Portfolio/ItemPortfolio.vue"
import Cuadrado from "@/components/cuadradoComp.vue";

export default{
    components:{
        ItemPortfolio,
        Cuadrado
    },
    methods: {
        showOverlay(portfolio1) {
        this.overlay = true;
        this.selectedPortfolio = portfolio1;
        }
    },
    data(){
        return{
            overlay: true,
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

    /* ovrlay ------------------- */

    #OverlayPortfolio{
        background-color: rgba(0, 0, 0, 0.199);
        color: white;
        position: absolute;
        z-index: 50;
        width: 100%;
        height:100vh;
    }

    .overlayDentro{
        background-color: black;
        color: white;
        position: absolute;
        z-index: 100;
        width: 50%;
        height: 80%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .tituloOverlay{
        text-align: center;
        margin-top: 1rem;
    }
</style>