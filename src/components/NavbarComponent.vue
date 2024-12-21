<template>
    <b-navbar toggleable="lg" type="dark" variant="primary">
        <!-- Marca centrada -->
        <b-navbar-brand href="/" class="mx-auto position-absolute start-50 translate-middle-x">
            Mi Pizzeria
        </b-navbar-brand>

        <!-- Toggler para pantallas pequeñas -->
        <b-navbar-toggle target="nav-collapse" />

        <!-- Contenido colapsable -->
        <b-collapse id="nav-collapse" is-nav>
            <!-- Menú principal alineado a la izquierda -->
            <b-navbar-nav class="me-auto">
                <b-nav-item to="/" class="d-flex align-items-center">
                    <b-icon icon="house-fill" class="mr-2"></b-icon> Inicio
                </b-nav-item>
            </b-navbar-nav>

            <!-- Botón del carrito completamente a la derecha -->
            <b-navbar-nav class="ms-auto">
                <b-nav-item to="/carrito" class="d-flex flex-column align-items-center">
                    <span class="d-flex align-items-center">
                        🛒 Carrito 
                        <b-badge variant="light" class="ml-2">{{ totalCarrito }}</b-badge>
                    </span>
                    <span class="total-compra mt-1 px-4">${{ totalCompra.toFixed(2) }}</span>
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters(["carrito"]),
        
        // Calcula la cantidad total de productos en el carrito
        totalCarrito() {
            return this.carrito.reduce((total, item) => total + (item.cantidad || 0), 0);
        },

        // Calcula el precio total de la compra
        totalCompra() {
            return this.carrito.reduce(
                (total, item) => total + (item.cantidad || 0) * (item.precio || 0),
                0
            );
        },
    },
};
</script>

<style scoped>
/* Estilo para la marca de la tienda */
.b-navbar-brand {
    font-weight: bold;
    font-size: 1.5rem;
    position: absolute !important;
    left: 50%;
    transform: translateX(-50%);
}

/* Estilo para los enlaces de la barra de navegación */
.b-nav-item {
    font-weight: bold;
    font-size: 1rem;
    text-align: center; /* Centra el texto */
}

/* Estilo para la cantidad de productos en el carrito */
.b-badge {
    font-size: 0.9rem;
    font-weight: bold;
}

/* Estilo para el total de la compra */
.total-compra {
    font-size: 0.9rem;
    font-weight: bold;
    color: #fff; /* Se puede personalizar el color según el diseño */
}
</style>
