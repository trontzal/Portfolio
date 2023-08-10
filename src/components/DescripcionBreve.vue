<template>
    <div id="DescripcionBreve">
        <div class="titulo">
            <img src="../assets/inicio/titulo.png" alt="">
        </div>
        <div>
            <p class="cyberpunk mediana sombra" id="sobreMi">
                Sobre mi
            </p>
        </div>
        <p class="pequena" id="descripcion">
            Apasionado de la programación Full Stack con experiencia del bootcamp de Peñascal F5. Comprometido con la creación de soluciones tecnológicas y con un enfoque tanto en el desarrollo front-end como en el back-end. Listo para aportar mi entusiasmo y habilidades a proyectos innovadores.
        </p>

        <router-link to="/sobreMi" class="btnPaginaInicio"><button class="button-49" role="button">Saber mas</button></router-link>
    </div>
</template>

<script>

</script>

<style>
    #DescripcionBreve{
        width: 75%;
        margin-left: 3%;
        display: flex;
        flex-direction: column;
    }

    #sobreMi{
        color: white;
    }

    #descripcion{
        width: 80%;
        margin-top: 2rem;
        margin-bottom: 2rem;
        border-left: solid 2px #FF0000;
        padding-left: 1rem;
    }

    .btnPaginaInicio{
        align-self: center;
    }

/* CSS */


</style>