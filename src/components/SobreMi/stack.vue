<template>
    <div class="dentroStack">
        <div class="tituloPequeno">
            <h3>Habilidades</h3>
        </div>
        <div class="wrapStack">
            <div class="iconoStack">
                <font-awesome-icon :icon="['fab', 'html5']" />
            </div>
            <div class="iconoStack">
                <font-awesome-icon :icon="['fab', 'css3']" />
            </div>
            <div class="iconoStack">
                <font-awesome-icon :icon="['fab', 'js']" />
            </div>
            <div class="iconoStack">
                <font-awesome-icon :icon="['fab', 'html5']" />
            </div>
            <div class="iconoStack">
                <font-awesome-icon :icon="['fab', 'html5']" />
            </div>
            <div class="iconoStack">
                <font-awesome-icon :icon="['fab', 'html5']" />
            </div>
            <div class="iconoStack">
                <font-awesome-icon :icon="['fab', 'html5']" />
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

    .dentroStack{
        color: white;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        margin: 0 20px 0 20px;
    }

    .wrapStack{
        display: flex;
        flex-direction: row;  
        gap: 2rem;
    }

</style>