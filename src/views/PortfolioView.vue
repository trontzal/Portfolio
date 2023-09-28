<template>
    <div id="Portfolio">
      <div class="tituloSobreMi">
        <h2 class="tituloVista">PORTFOLIO</h2>
        <h2 class="sombraTitulo">PORTFOLIO</h2>
      </div>
      <ItemPortfolio :portfolio="portfolio">

      </ItemPortfolio>
    </div>
</template>

<script>
import ItemPortfolio from "@/components/Portfolio/ItemPortfolio.vue"

export default{
    components:{
        ItemPortfolio
    },
    data(){
        return{
            portfolio:{
                'MemoryQuest':{
                    imagenPortada: "Esta seria la imagen",
                    titulo: "Este seria el titulo"
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
</style>