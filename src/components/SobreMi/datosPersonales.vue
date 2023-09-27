<template>
    <div class="dentroCuadrado">
        <div class="tituloPequeno"><h3>Datos personales</h3></div>
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
            <div class="linkedin"><a href="https://www.linkedin.com/in/gonzalo-lecumberri-496686259/" target="_blank" class="linkedin"><font-awesome-icon :icon="['fab', 'linkedin']" /></a></div>
        </div>
        <div class="grid linea">
            <p>GitHub:</p>
            <div class="gitHub"><font-awesome-icon :icon="['fab', 'github']" /></div>
        </div>
        <div>
            <p>Gmail:</p>
            <p class="gmail"><a :href="'mailto:gonzalo.lekunberri@gmail.com'">gonzalo.lekunberri@gmail.com</a></p>
        </div>
    </div>
</template>

<script>
    export default{
        name: "DatosPersonales"
    }
</script>