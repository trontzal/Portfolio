<template>
    <div id="Portfolio">
      <div class="tituloSobreMi">
        <h2 class="tituloVista">PORTFOLIO</h2>
        <h2 class="sombraTitulo">PORTFOLIO</h2>
      </div>
        <Cuadrado class="cuadradoPortfolio">
            <ItemPortfolio
                @click="showOverlay(portfolio1)"
                v-for="(portfolio1,index) in portfolio"
                :portfolio="portfolio1"
                :key="index">
            </ItemPortfolio>
        </Cuadrado>

        <OverlayPortfolio 
            :overlay="overlay" 
            :selectedPortfolio="selectedPortfolio" 
            @cerrarOverlay="cerrarOverlay"/>
    </div>
   
</template>

<script>
import ItemPortfolio from "@/components/Portfolio/ItemPortfolio.vue"
import Cuadrado from "@/components/cuadradoComp.vue";
import OverlayPortfolio from "@/components/Portfolio/OverlayPortfolio.vue";

export default{
    components:{
        ItemPortfolio,
        Cuadrado,
        OverlayPortfolio
    },
    methods: {
        showOverlay(portfolio1) {
            this.overlay = true;
            this.selectedPortfolio = portfolio1;
            console.log(this.overlay)
        },
        cerrarOverlay(){
            this.overlay = false;
        }
    },
    data(){
        return{
            overlay: false,
            selectedPortfolio: null,
            portfolio:{
                'MemoryQuest':{
                    imagenPortada: "MemoryQuest/principalMemory.png",
                    titulo: "Memory Quest",
                    autor: "Gonzalo Lecumberri",
                    tecnologias: "Vue 3, Figma, Python, Flask, MySQL, Railway",
                    githubFront: "https://github.com/trontzal/MemoryQuestFront",
                    githubBack: "https://github.com/trontzal/MemoryQuestBack",
                    descripcion: "",
                    imagenes:{
                        imagenPortada: "MemoryQuest/principalMemory.png",
                        img1: "MemoryQuest/secundariaWeather.png",
                        img2: "MemoryQuest/terceraWeather.png",
                        img3: "MemoryQuest/cuartaMemory.png"
                    }

                },
                'WeatherApp':{
                    imagenPortada: "WeatherApp/principalWeather.png",
                    titulo: "Weather App",
                    autor: "Jonathan Echeverria, Yorlin Pachajoa, Edurne Montalban, Gonzalo Lecumberri,     Jone Guerrero, May Torres",
                    tecnologias: "Vue 3, Figma, Bootstrap, Jest, Trello, Canva",
                    githubFront: "https://github.com/trontzal/AppWeather",
                    githubBack: "",
                    descripcion: "",
                    imagenes:{
                        imagenPortada: "WeatherApp/principalWeather.png",
                        img1: "WeatherApp/secundariaWeather.png",
                        img2: "WeatherApp/terceraWeather.png",
                        img3: "WeatherApp/cuartaWeather.png"
                    }
                },
                'ToPets':{
                    imagenPortada: "ToPets/topetsprincipal.png",
                    titulo: "ToPets",
                    autor: "Amaia Berrocal, Anyell Mendoza, Nasser Oufallah, Gonzalo Lecumberri y Jessica Mosteiro",
                    tecnologias: "Html5, Css3, Sass, Bootstrap5, JavaScript, Trello, Canvas, Figma",
                    githubFront: "https://github.com/trontzal/ToPets-Ecomerce",
                    githubBack: "",
                    descripcion: "",
                    imagenes:{
                        imagenPortada: "ToPets/topetsprincipal.png",
                        img1: "ToPets/topetssegunda.png",
                        img2: "ToPets/topetstercera.png"
                    }
                },
                'Montano':{
                    imagenPortada: "Montano/montanoprincipal.png",
                    titulo: "Montano",
                    autor: "Gonzalo Lecumberri, Jesus Pinto, Jone Guerrero, Jonathan Echeverria, Mohamed el Hibrahimi",
                    tecnologias: "Vue 3, Python, Flask, MySQL, Jest, Boostrap, Figma, Trello",
                    githubFront: "https://github.com/trontzal/Montano_Front",
                    githubBack: "https://github.com/trontzal/Montano_Back",
                    descripcion: "",
                    imagenes:{
                        imagenPortada: "Montano/montanoprincipal.png",
                        img1: "Montano/montanoSecundaria.png",
                        img2: "Montano/montanoTercera.png"
                    }
                },
                'ToDo':{
                    imagenPortada: "",
                    titulo: "To Do",
                    autor: "",
                    tecnologias: "",
                    githubFront: "",
                    githubBack: "",
                    descripcion: "",
                    imagenes:{
                        imagenPortada: "",
                    }
                },
                '':{
                    imagenPortada: "",
                    titulo: "",
                    autor: "",
                    tecnologias: "",
                    githubFront: "",
                    githubBack: "",
                    descripcion: "",
                    imagenes:{
                        imagenPortada: "",
                    }
                }
            }
        }
    }
}

</script>

<style>
    #Portfolio{
        display: flex;
        width: 100%;
        flex-direction: column;
    }

    .cuadradoPortfolio > div{
        color: white;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    @media  screen and (max-width:768px) {
        .cuadradoPortfolio > div{
            margin-bottom: 3rem;
        }
    }
    
</style>