<template>

    <router-view class="routerView"/>

    <div id="navBar">
      <NavBarComp />
    </div>
    <div id="navBarPequeno">
      <NavBarPequeno/>
    </div>
  

</template>

<script>
  import NavBarComp from './components/NavBarComp.vue';
  import NavBarPequeno from '@/components/NavBarPequeno.vue';

  export default {
    components: {
      NavBarComp,
      NavBarPequeno
    }
  }
</script>

<style lang="scss">
  *{
    margin: 0;
  }
  #app {
    background: rgb(255,255,1);
    background: linear-gradient(180deg, rgba(255,255,1,1) 0%, rgba(255,255,1,1) 40%, rgba(0,0,0,1) 100%);
    width: 100%;
    height: 100vh;
    height: 100vh; /* Ajustamos la altura para ocupar toda la ventana */
    overflow: auto; /* Permitimos el desplazamiento vertical en el contenido */
    display: flex;
    font-family: Elianto;
  }

  #navBar {
    display: flex;
    align-items: center; /* Centramos verticalmente los elementos solo en el NavBarComp */
    margin-left: auto;
    margin-right: 1rem;
    width: 15%;
    justify-content: end;
    z-index: 1;
  }

  #navBarPequeno{
    background-color: rgb(0, 0, 0);
    position: fixed;
    bottom: 0;
    z-index: 100;
    width: 100%;
    height: 5rem;
    display: none;
    justify-content: space-between;
  }

  @media  screen and (max-width:768px) {
    #navBar{
      display: none;
    } 
    #navBarPequeno{
      display: flex;
    }  
  }
</style>
