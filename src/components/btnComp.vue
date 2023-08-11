<template>
    <div class="btnContainer">
        <div class="btnBorde">
            <button class="btn">
                <slot></slot>
            </button>
        </div>
    </div>
</template>

<style>
    .btnContainer{
        height: 60px;   
        display: flex; 
        justify-content: center;
        align-items: center;
    }

    .btnBorde{
        display: inline-block;
        border: solid 1px black;
        padding: 7px;
        transition: padding 0.2s;
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
    }

    .btnBorde:hover{
        padding: 14px;
    }
</style>