<template>
    <div id="PerfilConFoto">
        <img src="@/assets/inicio/marcoConFoto.png" alt="" id="fotoCara">
        <p class="mediana">
            Gonzalo <br/>
            &nbsp;Lekunberri
        </p>
        <p class="mediana">
            Full Stack <br/>
            &nbsp;Developer
        </p>
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
        justify-content: center; /* Alinea horizontalmente el contenido */
    }

    #fotoCara{
        width: 80%;
        align-self: center;
    }

    #PerfilConFoto > p{
        color: white;
        margin-left: 20%;
    }
</style>