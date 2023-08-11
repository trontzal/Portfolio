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
  *{
    margin: 0;
  }
  #app {
    background: rgb(255,255,1);
    background: linear-gradient(180deg, rgba(255,255,1,1) 0%, rgba(255,255,1,1) 40%, rgba(0,0,0,1) 100%);
    height: 100vh;
    width: 100%;
    display: flex;
    font-family: Blanka;
  }





  #navBar {
    display: flex;
    align-items: center; /* Centramos verticalmente los elementos solo en el NavBarComp */
    margin-left: auto;
    margin-right: 1rem;
  }
</style>
