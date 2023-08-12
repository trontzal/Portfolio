<template>
    <div class="btnContainer">
        <div class="conjuntoBtn">
            <div class="arribaIzq esquina"></div><div class="centroBtn"></div><div class="arribaDrch esquina"></div>
        </div>
        <button class="btn">
            <slot></slot>
        </button>
        <div class="conjuntoBtn">
            <div class="abajoIzq esquina"></div><div class="centroBtn"></div><div class="abajoDrch esquina"></div>
        </div>
    </div>
</template>

<style>
    .btnContainer{
        height: 100px;
        width: 250px;
        display: flex; 
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .btnBorde{
        display: inline-block;
    }

    .btn{
        background-color: black;
        color: #F8F005;
        font-family:  Elianto;
        height: 45px;
        width: 170px;
        font-size: 1.2rem;
        border: none;
        padding: 0;
        cursor: pointer;
    }

    .conjuntoBtn{
        display: flex;
        justify-content: space-between;
    }

    .centroBtn{
        width: 170px;
    }

    .esquina{
        width: 8px;
        height: 8px;  
        transition: padding 0.3s ease;
    }

    .arribaIzq{
        border-top: solid 1px black;
        border-left: solid 1px black;
    }

    .arribaDrch{
        border-top: solid 1px black;
        border-right: solid 1px black;
    }

    .abajoIzq{
        border-bottom: solid 1px black;
        border-left: solid 1px black;
    }

    .abajoDrch{      
        border-bottom: solid 1px black;
        border-right: solid 1px black;
    }

    .btnContainer:hover > div > .esquina{
        padding: 3px;
    }
</style>