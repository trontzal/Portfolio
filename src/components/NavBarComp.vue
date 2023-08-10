<template>
  <nav>
    <router-link to="/">Inicio</router-link>
    <router-link to="/sobreMi">Sobre mi</router-link>
    <router-link to="/portfolio">Portfolio</router-link>
    <router-link to="/contacto">Contacto</router-link>
  </nav>
</template>

<style>
    nav{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>