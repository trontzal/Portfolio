<template>
    <div id="Portfolio">
      <div class="tituloSobreMi">
        <h2 class="tituloVista">PORTFOLIO</h2>
        <h2 class="sombraTitulo">PORTFOLIO</h2>
      </div>
        <Cuadrado class="cuadradoPortfolio">
            <ItemPortfolio 
                v-for="portfolio1 in portfolio"
                :portfolio="portfolio1">
            </ItemPortfolio>
            
        </Cuadrado>
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
    data(){
        return{
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