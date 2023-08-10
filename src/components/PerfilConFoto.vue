<template>
    <div id="PerfilConFoto">
        <img src="@/assets/inicio/marcoConFoto.png" alt="" id="fotoCara">
        <div class="mediana">
            <div>
                <p>Gonzalo</p>
                <p>&nbsp;Lekunberri</p>
            </div>
            <div>
                <p class="efecto">Full Stack </p>
                <p>&nbsp;Developer</p>
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
    }

    #fotoCara{
        width: 80%;
        align-self: center;
    }

    #PerfilConFoto > div > div > p{
        color: white;
        margin-left: 20%;
    }
</style>