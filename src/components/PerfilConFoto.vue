<template>
    <div id="PerfilConFoto">
        <img src="@/assets/inicio/marcoConFoto.png" alt="" id="fotoCara">
        <div class="mediana">
            <div>
                <p>GONZALO</p>
                <p>&nbsp;LECUMBERRI</p>
            </div>
            <div>
                <p class="efecto">FULL STACK</p>
                <p>&nbsp;DEVELOPER</p>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
    #PerfilConFoto{
        background-color: black;
        width: 25%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        justify-content: center;
        z-index: 1;
        height: 100vh;
    }

    #fotoCara{
        width: 80%;
        align-self: center;
    }
    #PerfilConFoto > div >div{
        margin-top: 1rem;
    }

    #PerfilConFoto > div > div > p{
        color: white;
        margin-left: 20%;
    }
</style>