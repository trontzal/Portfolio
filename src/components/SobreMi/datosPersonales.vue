<template>
    <div class="dentroCuadrado flexDatosPersonales">
        <div class="tituloPequeno"><h3>DATOS PERSONALES</h3></div>
        <div class="grid linea">
            <p>Nombre:</p>
            <p>Gonzalo</p>
        </div>
        <div class="grid linea">
            <p>Apellidos:</p>
            <p>Lecumberri Bergareche</p>
        </div>
        <div class="grid linea">
            <p>Linkedin:</p>
            <div class="linkedin"><a href="https://www.linkedin.com/in/gonzalo-lecumberri-496686259/" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" /></a></div>
        </div>
        <div class="grid linea">
            <p>GitHub:</p>
            <div class="gitHub"><a href="https://github.com/trontzal" target="_blank"><font-awesome-icon :icon="['fab', 'github']" /></a></div>
        </div>
        <div>
            <p>Gmail:</p>
            <p class="gmail"><a class="link" :href="'mailto:gonzalo.lekunberri@gmail.com'">gonzalo.lekunberri@gmail.com</a></p>
        </div>
    </div>
</template>

<script>
    export default{
        name: "DatosPersonales"
    }
</script>

<style>
  .grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .flexDatosPersonales{
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>