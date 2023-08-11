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
            Apasionado de la programación Full Stack con experiencia del bootcamp de Peñascal F5. Comprometido con la creación de soluciones tecnológicas y con un enfoque tanto en el desarrollo front-end como en el back-end. {{ parrafoRevelado }}<span class="blinking-cursor"></span>
        </p>

        <router-link to="/sobreMi" class="btnPaginaInicio"><button class="button-49" role="button">Saber mas</button></router-link>
    </div>
</template>

<script>
export default{
    data(){
        return{
            parrafo: "Listo para aportar mi entusiasmo y habilidades a proyectos innovadores.",
            parrafoRevelado: ""
        };
    },
    mounted(){
        this.revelarTexto();
    },
    methods:{
        revelarTexto(){
            const texto = this.parrafo.split("");
            let indexActual = 0;

            const revealInterval = setInterval(() =>{
                if (indexActual < texto.length){
                    this.parrafoRevelado += texto[indexActual];
                    indexActual++;
                }else{
                    clearInterval(revealInterval);
                }
            },30);

            // Actualizar la vista en cada iteración
            const updateView = () => {
                this.$forceUpdate();
                if (indexActual < texto.length) {
                    requestAnimationFrame(updateView);
                }
            };
            
            requestAnimationFrame(updateView);
        }
    }
}
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
        height: 12rem;
    }

    .blinking-cursor {
        display: inline-block;
        width: 1px;
        height: 1.2em;
        background-color: #000; /* Color de la barra parpadeante */
        animation: blink 0.8s infinite;
        vertical-align: middle;
    }

        @keyframes blink {
        0%, 100% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
    }

    .btnPaginaInicio{
        align-self: center;
    }

</style>
