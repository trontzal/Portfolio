<template>
    <div id="lineas">
    </div>
    <div id="DescripcionBreve">
        <div class="titulo">
            <h1 class="grande">GONZALO LECUMBERRI</h1>
        </div>
        <div>
            <p class="mediana sombra" id="sobreMi">
                Sobre mi
            </p>
        </div>
        <p class="pequena" id="descripcion">
            ¡Hola! Soy Gonzalo y tengo 27 años. Desde mi infancia, he sentido un interés especial por el mundo de la tecnología. Durante este último año, he completado un bootcamp en Peñascal, lo que me ha permitido adquirir habilidades en desarrollo Full Stack y ha convertido la programación en mi pasión, llegando incluso a trabajar en mis propios proyectos. <br>
            {{ parrafoRevelado }}
            <span class="blinking-cursor"></span>
        </p>

        <router-link to="/sobreMi" class="btnPaginaInicio">
            <btnComp>Saber mas</btnComp>
        </router-link>
    </div>
</template>

<script>
import btnComp from '@/components/btns/btnComp.vue';
export default{
    components:{
        btnComp
    },
    data(){
        return{
            parrafo: "En conclusion creo que seria un buen componente para cualquier equipo de desarrollo al que pueda aportar mi ilusion, compromiso y ganas de trabajar.",
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
            },15);
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
        width: 80%;
        margin-left: 3%;
        display: flex;
        flex-direction: column;
        z-index: 1;
        height: 100vh;
    }

    #sobreMi{
        color: white;
    }

    #descripcion{
        width: 90%;
        margin-top: 2rem;
        margin-bottom: 2rem;
        border-left: solid 2px #FF0000;
        padding-left: 1rem;
        height: auto;
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

    .titulo{
        text-shadow: 8px 6px 0px #FFFFFF;
        margin: 4rem 0 2rem 0;
    }


    @media  screen and (max-width:767px) {
        #DescripcionBreve{
            width: 100%;
        }
        .btnPaginaInicio{
            display: none;
        }
        #descripcion{
            padding-bottom: 6rem;
            height: auto;
        }
      
  }
</style>
