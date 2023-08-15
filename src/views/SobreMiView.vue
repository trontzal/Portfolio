<template>
  <div id="SobreMiView">
    <div class="tituloSobreMi">
      <h2 class="tituloVista">SOBRE MI</h2>
      <h2 class="sombraTitulo">SOBRE MI</h2>
    </div>
    <div class="wrap">
      <cuadradoComp>
        <div class="dentroCuadrado">
          <p>Nombre:</p>
            <p>Gonzalo</p>
          <p>Apellidos:</p>
            <p>Lecumberri Bergareche</p>
        </div>
      </cuadradoComp>

      <!-- meter el otro componente aqui para responsive -->
    </div>
  </div>
</template>

<script>
import cuadradoComp from "@/components/cuadradoComp.vue"

export default{
  components:{
    cuadradoComp
  }
}
</script>

<style>
  #SobreMiView{
    display: flex;
    width: 100%;
    flex-direction: column;
  }

  .tituloSobreMi{
    text-align: center;
    margin: 2rem;
    position: relative;

  }

  .dentroCuadrado{
    color: white;
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
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
</style>
