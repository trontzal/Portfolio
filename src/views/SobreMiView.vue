<template>
  <div id="SobreMiView">
    <div class="tituloSobreMi">
      <h2 class="tituloVista">SOBRE MI</h2>
      <h2 class="sombraTitulo">SOBRE MI</h2>
    </div>
    <div class="contenidosSobreMi">
      <cuadradoComp>
        <datosPersonales></datosPersonales>
      </cuadradoComp>

      <cuadradoComp>
        <stack></stack>
      </cuadradoComp>

      <cuadradoComp>
        <div class="dentroCuadrado">
          <p>aqui peñascal f5 </p>
        </div>
      </cuadradoComp>

      <!-- meter el otro componente aqui para responsive -->
    </div>
  </div>
</template>

<script>
import cuadradoComp from "@/components/cuadradoComp.vue"
import datosPersonales from "@/components/SobreMi/datosPersonales.vue"
import stack from "@/components/SobreMi/stack.vue"

export default{
  components:{
    cuadradoComp,
    datosPersonales,
    stack,
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
    flex-wrap: wrap;

  }

  .tituloSobreMi{
    text-align: center;
    margin: 2rem;
    position: relative;

  }

  .dentroCuadrado{
    color: white;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .linea{
    border-bottom: 1px solid rgba(128, 128, 128, 0.295);
    padding-bottom: 0.3rem;
  }

  .tituloVista{
    position: relative;
    z-index: 2;
    padding-top: 13px;
    font-size: 2rem;
  }

  .sombraTitulo{
    position: absolute;
    text-align: center;
    width: 100%;
    color: rgba(255, 255, 255, 0.702);
    font-size: 5rem;
    top: 0;
    left: 0;
  }

  .tituloPequeno{
    align-self: center;
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
</style>
