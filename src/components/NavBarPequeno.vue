<template>
    <router-link to="/" class="routerPequeno">
        <img src="@/assets/iconos/icon_home_.png" alt="" class="iconoPequeno">
        <p>INICIO</p>
    </router-link>
    <router-link to="/sobreMi" class="routerPequeno">
        <img src="@/assets/iconos/usuario.png" alt="" class="iconoPequeno">
        <p>SOBRE MI</p>
    </router-link>
    <router-link to="/portfolio" class="routerPequeno">
        <img src="@/assets/iconos/portfolio.png" alt="" class="iconoPequeno">
        <p>PORTOLIO</p>
    </router-link>

    <!-- <router-link to="/contacto" class="routerPequeno">
        <img src="@/assets/iconos/contacto.png" alt="" class="iconoPequeno">
        <p>CONTACTO</p>
    </router-link> -->
</template>

<script>

</script>

<style>
    .routerPequeno{
        display: flex;
        flex-direction: column;
        color: white;
        width: 100%;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }

    .iconoPequeno{
        display: flex;
        width: 20px;
        height: 20px;
        margin: 0 auto;
        margin-top: 10px;
    }

    .routerPequeno > p{
        text-align: center;
    }
</style>