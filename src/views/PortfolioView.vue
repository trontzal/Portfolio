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
                    descripcion: "Proyecto personal de Peñascal. En este proyecto final e individual de Peñascal, se nos pidió desarrollar tanto el frontend como el backend. En mi caso, opté por crear una página de juegos cognitivos que constaba de un frontend con varios juegos y un backend que permitía el registro de usuarios y la gestión de las puntuaciones. Esto posibilitaba la creación de gráficos de promedios y un ranking de jugadores.",
                    imagenes:{
                        imagenPortada: "MemoryQuest/principalMemory.png",
                        img1: "MemoryQuest/secundariaWeather.png",
                        img2: "MemoryQuest/terceraWeather.png",
                        img3: "MemoryQuest/cuartaMemory.png",
                        figma: "MemoryQuest/figmaMemory.png"
                    }

                },
                'WeatherApp':{
                    imagenPortada: "WeatherApp/principalWeather.png",
                    titulo: "Weather App",
                    autor: "Jonathan Echeverria, Yorlin Pachajoa, Edurne Montalban, Gonzalo Lecumberri,     Jone Guerrero, May Torres",
                    tecnologias: "Vue 3, Figma, Bootstrap, Jest, Trello, Canva, API externa",
                    githubFront: "https://github.com/trontzal/AppWeather",
                    githubBack: "",
                    descripcion: "En este proyecto, se nos solicitó crear una página frontend que utilizara una API externa, en nuestro caso, una aplicación de pronóstico del tiempo. El valor agregado de nuestra aplicación radicaba en mostrar las mejores horas del día para realizar actividades deportivas al aire libre. En este proyecto de grupo, mi principal responsabilidad fue desarrollar el componente principal encargado de mostrar la información meteorológica actual y determinar si era apropiado para la práctica deportiva, además de colaborar en la integración de la API.",
                    imagenes:{
                        imagenPortada: "WeatherApp/principalWeather.png",
                        img1: "WeatherApp/secundariaWeather.png",
                        img2: "WeatherApp/terceraWeather.png",
                        img3: "WeatherApp/cuartaWeather.png",
                        mobil: "WeatherApp/mobileWeather.png",
                        tablet: "WeatherApp/tabletWeather.png"
                    }
                },
                'ToPets':{
                    imagenPortada: "ToPets/topetsprincipal.png",
                    titulo: "ToPets",
                    autor: "Amaia Berrocal, Anyell Mendoza, Nasser Oufallah, Gonzalo Lecumberri y Jessica Mosteiro",
                    tecnologias: "Html5, Css3, Sass, Bootstrap5, JavaScript, Trello, Canvas, Figma",
                    githubFront: "https://github.com/trontzal/ToPets-Ecomerce",
                    githubBack: "",
                    descripcion: "Proyecto E-commerce: creamos una tienda en línea llamada 'Topets' en la que se venden productos para animales en tres idiomas diferentes: Euskera, Inglés y Español. En este proyecto, aún no teníamos conocimiento de ningún framework, por lo que utilizamos puro HTML, CSS y JavaScript. Mi responsabilidad principal abarcó tanto el diseño como la funcionalidad del carrito de la compra, además de trabajar en el sistema de cambio de idioma.",
                    imagenes:{
                        imagenPortada: "ToPets/topetsprincipal.png",
                        img1: "ToPets/topetssegunda.png",
                        img2: "ToPets/topetstercera.png",
                        figma: "ToPets/FigmaTopets.png"
                    }
                },
                'Montano':{
                    imagenPortada: "Montano/montanoprincipal.png",
                    titulo: "Montano",
                    autor: "Gonzalo Lecumberri, Jesus Pinto, Jone Guerrero, Jonathan Echeverria, Mohamed el Hibrahimi",
                    tecnologias: "Vue 3, Python, Flask, MySQL, Jest, Boostrap, Figma, Trello",
                    githubFront: "https://github.com/trontzal/Montano_Front",
                    githubBack: "https://github.com/trontzal/Montano_Back",
                    descripcion: "Montano fue nuestro último proyecto de grupo en Peñascal. En este trabajo, teníamos que poner en práctica todo lo aprendido durante el bootcamp, trabajando con un cliente real, la Escuela de Hostelería Montano. Nos solicitaron que mantuviéramos la fidelidad al diseño original del sitio weby tambien que incorporáramos nuevas funcionalidades. Logramos hacer que el menú del restaurante fuera dinámico mediante el uso de una base de datos, además de implementar varias mejoras en comparación con la página original.",
                    imagenes:{
                        imagenPortada: "Montano/montanoprincipal.png",
                        img1: "Montano/montanoSecundaria.png",
                        img2: "Montano/montanoTercera.png"
                    }
                },
                'Iturritek':{
                    imagenPortada: "Iturritek/IturritekPrincipal.png",
                    titulo: "Iturritek",
                    autor: "Front: Equipo de frontend. Back: Gonzalo Lecumberri",
                    tecnologias: "Python, Flask, html, css, javascript, sqlite",
                    githubFront: "https://github.com/ikatza1967/iturritek-web",
                    githubBack: "https://github.com/trontzal/iturritek-back",
                    descripcion: "Practicas del bootcamp. En este proyecto, se desarrolló el backend de una página web, en complemento al trabajo del equipo de frontend. Utilizando Python y el framework Flask, se creó una base de datos relacional, se implementó un sistema de autenticación con JWT, se diseñó una intranet para administrar servicios y categorías, y se habilitó una funcionalidad de contacto que envía correos electrónicos automáticos. Estas implementaciones permitieron la creación de una plataforma dinámica y segura, mejorando la experiencia del usuario y facilitando la expansión de la página. ",
                    imagenes:{
                        imagenPortada: "Iturritek/IturritekPrincipal.png",
                        img1: "Iturritek/IturritekSecundaria.png",
                        img2: "Iturritek/IturritekTercera.png",
                        img3: "Iturritek/IturritekCuarta.png"
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