<template>

    <router-view/>
    <div id="navBar">
      <NavBarComp />
    </div>

</template>

<script>
  import NavBarComp from './components/NavBarComp.vue';
  export default {
    components: {
      NavBarComp,
    }
  }
</script>

<style lang="scss">
  @font-face {
    font-family: 'Cyberpunk';
    src: url('@/assets/fonts/Cyberpunk.otf') format('truetype');
  }

  @font-face {
    font-family: 'DotGothic16';
    src: url('@/assets/fonts/DotGothic16-Regular.ttf') format('truetype');
  }

  *{
    margin: 0;
  }
  #app {
    background: rgb(255,255,1);
    background: linear-gradient(180deg, rgba(255,255,1,1) 0%, rgba(255,255,1,1) 40%, rgba(0,0,0,1) 100%);
    height: 100vh;
    display: flex;
    font-family: DotGothic16;
  }

  // fuentes ***********************************************
  .pequena{
    font-size: 1.5rem;
  }

  .mediana{
    font-size: 2rem;
  }

  .sombra {
    font-weight: bold;
    color: white;
    text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.5);
  }

  .cyberpunk{
    font-family: Cyberpunk;
  }
  

  #navBar {
    display: flex;
    align-items: center; /* Centramos verticalmente los elementos solo en el NavBarComp */
    margin-left: auto;
    margin-right: 1rem;
  }
</style>
