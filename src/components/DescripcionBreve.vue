<template>
    <div id="DescripcionBreve">
        <div class="titulo">
            <img src="../assets/inicio/titulo.png" alt="">
        </div>
        <p class="cyberpunk mediana sombra" id="sobreMi">
            Sobre mi
        </p>
        <p class="pequena" id="descripcion">
            Apasionado de la programación Full Stack con experiencia del bootcamp de Peñascal F5. Comprometido con la creación de soluciones tecnológicas y con un enfoque tanto en el desarrollo front-end como en el back-end. Listo para aportar mi entusiasmo y habilidades a proyectos innovadores.
        </p>

        <button class="button-49" role="button">Saber mas</button>
    </div>
</template>

<script>

</script>

<style>
    #DescripcionBreve{
        width: 75%;
        margin-left: 3%;
        display: flex;
        flex-direction: column;
    }

    #sobreMi{
        color: white;
    }

    #descripcion{
        width: 80%;
        margin-top: 2rem;
        margin-bottom: 2rem;
        border-left: solid 2px #FF0000;
        padding-left: 1rem;
    }

/* CSS */
.button-49,
.button-49:after {
  align-self: center;
  width: 150px;
  height: 76px;
  line-height: 78px;
  font-size: 1.3rem;
  font-family: 'Bebas Neue', sans-serif;
  background: linear-gradient(45deg, transparent 5%, #FF013C 5%);
  border: 0;
  color: #fff;
  letter-spacing: 3px;
  box-shadow: 6px 0px 0px #00E6F6;
  outline: transparent;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-49:after {
  --slice-0: inset(50% 50% 50% 50%);
  --slice-1: inset(80% -6px 0 0);
  --slice-2: inset(50% -6px 30% 0);
  --slice-3: inset(10% -6px 85% 0);
  --slice-4: inset(40% -6px 43% 0);
  --slice-5: inset(80% -6px 5% 0);
  
  content: 'ALTERNATE TEXT';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 3%, #00E6F6 3%, #00E6F6 5%, #FF013C 5%);
  text-shadow: -3px -3px 0px #F8F005, 3px 3px 0px #00E6F6;
  clip-path: var(--slice-0);
}

.button-49:hover:after {
  animation: 1s glitch;
  animation-timing-function: steps(2, end);
}

@keyframes glitch {
  0% {
    clip-path: var(--slice-1);
    transform: translate(-20px, -10px);
  }
  10% {
    clip-path: var(--slice-3);
    transform: translate(10px, 10px);
  }
  20% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 10px);
  }
  30% {
    clip-path: var(--slice-3);
    transform: translate(0px, 5px);
  }
  40% {
    clip-path: var(--slice-2);
    transform: translate(-5px, 0px);
  }
  50% {
    clip-path: var(--slice-3);
    transform: translate(5px, 0px);
  }
  60% {
    clip-path: var(--slice-4);
    transform: translate(5px, 10px);
  }
  70% {
    clip-path: var(--slice-2);
    transform: translate(-10px, 10px);
  }
  80% {
    clip-path: var(--slice-5);
    transform: translate(20px, -10px);
  }
  90% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 0px);
  }
  100% {
    clip-path: var(--slice-1);
    transform: translate(0);
  }
}



</style>