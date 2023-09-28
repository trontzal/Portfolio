<template>
    <div id="Portfolio">
      <div class="tituloSobreMi">
        <h2 class="tituloVista">PORTFOLIO</h2>
        <h2 class="sombraTitulo">PORTFOLIO</h2>
      </div>
        <Cuadrado class="cuadradoPortfolio">
            <ItemPortfolio :portfolio="portfolio.MemoryQuest">

            </ItemPortfolio>
            <ItemPortfolio :portfolio="portfolio.WeatherApp">

            </ItemPortfolio>
            <ItemPortfolio :portfolio="portfolio">

            </ItemPortfolio>
            <ItemPortfolio :portfolio="portfolio">

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
                    imagenPortada: "/img/principalMemory.372cfc1d.png",
                    titulo: "Memory Quest"
                },
                'WeatherApp':{
                    imagenPortada: "",
                    titulo: "Weather App"
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
        justify-content: space-between;
        gap: 1rem;
    }
</style>