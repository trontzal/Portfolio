<template>
    <div v-if="overlay" id="OverlayPortfolio" @click.self="overlay = false">
        <div class="overlayDentro">
            <div class="cerrarOverlay" @click="$emit('cerrarOverlay')">X</div>
            <h3 class="tituloOverlay ">{{ selectedPortfolio.titulo }}</h3>
            <div class="gridOverlay">
                <div class="overlayFlex">
                    <p class="lineaOverlay">Autor: {{ selectedPortfolio.autor }}</p>
                    <p class="lineaOverlay">Tecnologias:  {{ selectedPortfolio.tecnologias }}</p>
                </div>
                <div class="overlayFlex">
                    <p class="lineaOverlay">gitHub: <a class="link" target="_blank" :href="selectedPortfolio.githubFront">{{ selectedPortfolio.githubFront }}</a></p>
                    <p v-if="selectedPortfolio.githubBack" class="lineaOverlay">gitHub backend: <a class="link" target="_blank" :href="selectedPortfolio.githubBack">{{ selectedPortfolio.githubBack }}</a></p>
                </div>
            </div>

            <carrusel :selectedPortfolio2="selectedPortfolio"/>



            <div class="overlayFlex descripcionOverlay">
                <p>Descripcion:</p>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque natus rem quod quo, assumenda doloribus dolore aperiam vero repellat. Libero dolorum consequatur corporis ratione obcaecati est delectus non maxime nostrum!</p>
            </div>
        </div>
    </div>
</template>

<script>
import carrusel from "@/components/Portfolio/OverlayCarrusel/carrusel.vue"

export default{
    props:{
        overlay:{
            type: Boolean
        },
        selectedPortfolio:{
            type: Object
        }
    },
    components:{
    carrusel
}
}
</script>

<style>
    /* ovrlay ------------------- */

    #OverlayPortfolio{
        background-color: rgba(241, 239, 239, 0.199);
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
        border: 20px solid rgba(0, 0, 0, 0.541);
    }


    .tituloOverlay{
        text-align: center;
        margin-top: 1rem;
    }

    .gridOverlay{
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 1.5rem 0 2rem 2rem;
    }

    .overlayFlex{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .descripcionOverlay{
        margin-left: 2rem;
        margin-right: 2rem;
        margin-top: 2rem;
    }

    .lineaOverlay{
        border-bottom: 2px solid rgb(255,255,1);
        padding: 0 0 2px 0;
        margin: 0 10px 0 10px;
    }

    .cerrarOverlay{
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
    }
</style>