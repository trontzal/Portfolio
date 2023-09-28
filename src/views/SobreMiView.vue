<template>
  <div id="SobreMiView">
    <div class="tituloSobreMi">
      <h2 class="tituloVista">SOBRE MI</h2>
      <h2 class="sombraTitulo">SOBRE MI</h2>
    </div>
    <div class="contenidosSobreMi">

      <cuadradoComp id="DatosPersonales">
        <datosPersonales class="dentroCuadrado datosPersonales"></datosPersonales>
      </cuadradoComp>


      <div class="juntosFlex">
        <cuadradoComp>
          <stack class="dentroCuadrado cuadradoStack"></stack>
        </cuadradoComp>


        <cuadradoComp>
          <experiencia class="dentroCuadrado flexExperiencia"></experiencia>
        </cuadradoComp>
      </div>

    </div>
  </div>
</template>

<script>
import cuadradoComp from "@/components/cuadradoComp.vue"
import datosPersonales from "@/components/SobreMi/datosPersonales.vue"
import stack from "@/components/SobreMi/stack.vue"
import experiencia from "@/components/SobreMi/experiencia.vue"

export default{
  components:{
    cuadradoComp,
    datosPersonales,
    stack,
    experiencia
  }
}
</script>

<style>

  #SobreMiView{
    display: flex;
    width: 100%;
    flex-direction: column;
  }

  .contenidosSobreMi{
    display: flex;
    flex-direction: row;
  }

  .tituloSobreMi{
    text-align: center;
    margin: 2rem;
    position: relative;

  }

  .dentroCuadrado{
    color: white;
    padding: 1rem;
  }

  .datosPersonales{
    width: 20rem;
  }

  .fixed{
    position: fixed;
  }



  .linea{
    border-bottom: 1px solid rgba(128, 128, 128, 0.295);
    padding-bottom: 0.3rem;
  }

  .linkedin{
    color: blue;
    font-size: 24px;
  }

  .gitHub{
    color:white;
    font-size: 24px;
  }

  .gmail{
    margin-top: 1rem;
  }

  @media  screen and (max-width:900px) {
      .contenidosSobreMi{
        display: flex;
        flex-direction: column;
      }
      .sombraTitulo{
        font-size: 3rem;
      }
      #DatosPersonales{
        width: 100%;
      }
      .datosPersonales{
        width: 90%;
      }
    }
</style>
