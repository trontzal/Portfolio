<template>
    <div id="ItemPortfolio">
        <div class="tituloItemPortfolio">
            <p class="tituloDentro mediana">{{ portfolio.titulo }}</p>
        </div>
        <img :src="portfolio.imagenPortada" alt="" class="imagenPrincipal">
    </div>
</template>

<script>
export default{
    props:[
        'portfolio'
    ]
}

</script>

<style>
    #ItemPortfolio{
        width:auto;
        height: auto;
        margin:1rem;
        position: relative;
    }

    #ItemPortfolio:hover > div{
        background-color: rgba(0, 0, 0, 0);
        color: black;
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