<template>
  <nav>
    <router-link to="/" class="router">
      <btnNavComp :srcIcono="require('@/assets/iconos/icon_home_.png')">INICIO</btnNavComp>
    </router-link>
    <router-link to="/portfolio" class="router">
      <btnNavComp :srcIcono="require('@/assets/iconos/portfolio.png')">PORTFOLIO</btnNavComp>
    </router-link>
    <router-link to="/sobreMi" class="router">
      <btnNavComp :srcIcono="require('@/assets/iconos/usuario.png')">SOBRE MI</btnNavComp>
    </router-link>
    <router-link to="/contacto" class="router">
      <btnNavComp :srcIcono="require('@/assets/iconos/contacto.png')">CONTACTO</btnNavComp>
    </router-link>
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