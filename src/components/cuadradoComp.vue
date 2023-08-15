<template>
    <div id="Cuadrado">
        <div class="conjuntoBtn">
            <div class="arribaIzq esquinaCuadrado"></div><div></div><div class="arribaDrch esquinaCuadrado"></div>
        </div>
        <div class="fondoCuadrado">
            <slot></slot>
        </div>
        <div class="conjuntoBtn">
            <div class="abajoIzq esquinaCuadrado"></div><div></div><div class="abajoDrch esquinaCuadrado"></div>
        </div>
    </div>
</template>

<style>
/* #Cuadrado > *{
    border: solid 1px black;
} */

    #Cuadrado{
        margin: 1rem;
        max-width: min-content;
    }

    .esquinaCuadrado{
        width: 20px;
        height: 20px;
    }

    .fondoCuadrado{
        background-color: black;
        margin: 0 20px 0 20px;    
    }


</style>