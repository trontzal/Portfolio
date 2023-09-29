<template>
    <div v-if="overlay" id="OverlayPortfolio" @click.self="overlay = false">
        <div class="overlayDentro">
            <h3 class="tituloOverlay">TITULO</h3>
            <div class="gridOverlay">
                <div class="overlayFlex">
                    <p>Autor: Trabajo grupal en peñascal</p>
                    <p>Tecnologias:  Vue, figma, etc</p>
                </div>
                <div class="overlayFlex">
                    <p>gitHub: <a href="">Link</a></p>
                    <p>gitHub backend: <a href=""></a>Link</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        overlay:{
            type: Boolean
        },
        selectedPortfolio:{
            type: Object
        }
    }
}
</script>

<style>
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

    .gridOverlay{
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 1.5rem 0 0 2rem;
    }

    .overlayFlex{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>