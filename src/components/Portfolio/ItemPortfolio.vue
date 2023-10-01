<template>
    <div id="ItemPortfolio">
        <div class="tituloItemPortfolio">
            <p v-if="portfolio.titulo" class="tituloDentro mediana">{{ portfolio.titulo }}</p>
        </div>
        <img v-if="portfolio.imagenPortada" :src="require(`@/assets/Portfolio/${portfolio.imagenPortada}`)" class="imagenPrincipal">
        <img v-else src="@/assets/Portfolio/enProceso.jpg" alt="No hay imagen" class="imagenPrincipal">
    </div>
</template>

<script>
export default{
    props:[
        'portfolio'
    ],
}

</script>

<style>
    #ItemPortfolio{
        width:auto;
        height: auto;
        margin:1rem;
        position: relative;
        cursor: pointer;
    }

    #ItemPortfolio:hover > div{
        background-color: rgba(0, 0, 0, 0);
        color: rgba(0, 0, 0, 0);
    }

    .imagenPrincipal{
        width: 20rem;
        height: max-content;
    }

    .tituloItemPortfolio{
        position: absolute;
        z-index: 2;
        background-color: rgba(0, 0, 0, 0.514);
        width: 100%;
        height: 100%;
        display: flex;
        transition: background-color 1s ease;
    }

    .tituloDentro{
        align-self: center;
        width: 100%;
        text-align: center;
        transition: color 1s ease;;
    }

    


</style>