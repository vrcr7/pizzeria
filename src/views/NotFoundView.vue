<template>
    <div class="text-center">
        <h1>404 - Página no encontrada</h1>
        <p>La página que buscas no existe o fue movida.</p>
        <b-button variant="primary" @click="irInicio">Ir al inicio</b-button>
    </div>
</template>

<script>
export default {
    methods: {
        irInicio() {
            this.$router.push("/");
        },
    },
};
</script>

<style scoped>
.text-center {
    text-align: center;
    margin-top: 50px;
}

h1 {
    font-size: 2.5rem;
    color: #ff6f61;
}

p {
    margin: 20px 0;
    font-size: 1.2rem;
}
</style>