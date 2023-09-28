<template>
    <div class="dentroStack">
        <div class="tituloPequeno">
            <h3>HABILIDADES</h3>
        </div>
        <div class="wrapStack">
            <div>
                <img class="iconoStack" src="@/assets/IconosHabilidades/html5.png" alt="">
            </div>
            <div>
                <img class="iconoStack" src="@/assets/IconosHabilidades/css3.png" alt="">
            </div>
            <div>
                <img class="iconoStack" src="@/assets/IconosHabilidades/js.png" alt="">
            </div>
            <div>
                <img class="iconoStack" src="@/assets/IconosHabilidades/vue.png" alt="">
            </div>
            <div>
                <img class="iconoStack" src="@/assets/IconosHabilidades/python.png" alt="">
            </div>
            <div>
                <img class="iconoStack" src="@/assets/IconosHabilidades/figma.png" alt="">
            </div>
            <div>
                <img class="iconoStack" src="@/assets/IconosHabilidades/boostrap.png" alt="">
            </div>
            <div>
                <img class="iconoStack" src="@/assets/IconosHabilidades/mysql.png" alt="">
            </div>
            <div>
                <img class="iconoStack" src="@/assets/IconosHabilidades/flask.jpg" alt="">
            </div>
            <div>
                <img class="iconoStack" src="@/assets/IconosHabilidades/quasar.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: "Stack"
    }
</script>

<style scoped>
    .wrapStack{
        display: flex;
        flex-direction: row;  
        gap: 3rem;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .iconoStack{
        height: 4rem;
    }

</style>