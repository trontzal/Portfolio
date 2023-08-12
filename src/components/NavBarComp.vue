<template>
  <nav>
    <router-link to="/" class="router"><btnNavComp>Inicio</btnNavComp></router-link>
    <router-link to="/sobreMi" class="router"><btnNavComp>Sobre Mi</btnNavComp></router-link>
    <router-link to="/portfolio" class="router"><btnNavComp>Portfolio</btnNavComp></router-link>
    <router-link to="/contacto" class="router"><btnNavComp>Contacto</btnNavComp></router-link>
  </nav>
</template>

<script>
  import btnNavComp from "@/components/btns/btnNavComp.vue"

  export default{
    components:{
      btnNavComp
    }
  }
</script>

<style>
    nav{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .router{
      display: flex;
      justify-content: end;
    }
</style>