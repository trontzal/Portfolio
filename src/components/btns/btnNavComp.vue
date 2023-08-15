<template>
    <div class="hover">
        <div class="conjuntoBtnNav">
            <div class="esquinaBtnNav arribaIzq"></div><div class="medioBtnNav"></div><div class="esquinaBtnNav abajoIzq"></div>
        </div>
        <div class="exteriorBtnNav">
            <div class="icono">
                <img :src="srcIcono" alt="">
            </div>
            <div class="textoHover">
                <slot></slot>
            </div>
        </div>
        <div class="conjuntoBtnNav">
            <div class="esquinaBtnNav arribaDrch"></div><div class="medioBtnNav"></div><div class="esquinaBtnNav abajoDrch"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        srcIcono: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
    .hover{
        display: flex;
    }
    .exteriorBtnNav{
        height: 45px;
        display: flex;
        align-items: center;
        align-self: center;
        position: relative;
    }

    .icono{
        width: 40px;
        height: 40px;
        justify-self: center;
        background-color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: rotate(-45deg);
        transition: transform 0.2s ease;
    }

    .icono > img{
        width: 25px;
        height: 25px;
        transform: rotate(45deg);
    }

    .textoHover{
        width: 0;
        overflow: hidden;
        text-align: center;
        transition: width 0.2s ease-in-out;
    }

    .conjuntoBtnNav{
        flex-direction: column;
    }

    .esquinaBtnNav{
        width: 8px;
        height: 8px;
    }

    .medioBtnNav{
        height: 34px;
    }

    .hover:hover .textoHover{
        width: 100px;
    }

    .hover:hover .icono{
        transform: rotate(-90deg);
    }

</style>