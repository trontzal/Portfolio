<template>
    <div class="dentroStack">
        <div class="tituloPequeno">
            <h3>HABILIDADES</h3>
        </div>
        <div class="wrapStack">
            <div>
                <img class="iconoStack" src="@/assets/IconosHabilidades/html5.png" alt="" title="Html5">
            </div>
            <div>
                <img class="iconoStack" src="@/assets/IconosHabilidades/css3.png" alt="" title="CSS3">
            </div>
            <div>
                <img class="iconoStack" src="@/assets/IconosHabilidades/js.png" alt="" title="JavaScript">
            </div>
            <div>
                <img class="iconoStack" src="@/assets/IconosHabilidades/vue.png" alt="" title="Vue3">
            </div>
            <div>
                <img class="iconoStack" src="@/assets/IconosHabilidades/python.png" alt="" title="Python">
            </div>
            <div>
                <img class="iconoStack" src="@/assets/IconosHabilidades/figma.png" alt="" title="Figma">
            </div>
            <div>
                <img class="iconoStack" src="@/assets/IconosHabilidades/boostrap.png" alt="" title="Bootstrap">
            </div>
            <div>
                <img class="iconoStack" src="@/assets/IconosHabilidades/mysql.png" alt="" title="MySQL">
            </div>
            <div>
                <img class="iconoStack" src="@/assets/IconosHabilidades/flask.jpg" alt="" title="Flask">
            </div>
            <div>
                <img class="iconoStack" src="@/assets/IconosHabilidades/quasar.png" alt="" title="Quasar">
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