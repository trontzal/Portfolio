<template>
  <PerfilConFoto/>
  <DescripcionBreve/>
</template>

<script>
  import PerfilConFoto from "@/components/PerfilConFoto.vue"
  import DescripcionBreve from "@/components/DescripcionBreve.vue"

  export default {
    components:{
      PerfilConFoto,
      DescripcionBreve
    }
  }
</script>

<style>
@media  screen and (max-width:900px) {
      #PerfilConFoto{
        display: none;
      }
  }
</style>