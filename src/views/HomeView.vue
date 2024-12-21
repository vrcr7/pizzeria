<template>
  <div>
    <b-container>
      <!-- Título central -->
      <div class="text-center my-4">
        <h1 class="display-4">¡Bienvenido a nuestra Pizzería!</h1>
      </div>

      <!-- Barra de búsqueda -->
      <b-input-group class="my-4">
        <b-form-input
          v-model="busqueda"
          placeholder="Buscar por nombre o ingredientes..."
        ></b-form-input>
        <b-dropdown text="Ordenar por precio" variant="outline-secondary" class="ml-2">
          <b-dropdown-item @click="ordenarPorPrecio('asc')">Ascendente</b-dropdown-item>
          <b-dropdown-item @click="ordenarPorPrecio('desc')">Descendente</b-dropdown-item>
        </b-dropdown>
      </b-input-group>

      <!-- Lista de productos -->
      <h2 class="text-center">Lista de Pizzas</h2>
      <b-row>
        <b-col
          v-for="producto in productosFiltrados"
          :key="producto.id"
          cols="12"
          md="4"
        >
          <CardComponent :producto="producto" @add-to-cart="agregarCarrito" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CardComponent from "../components/CardComponent.vue";

export default {
  components: {
    CardComponent,
  },
  data() {
    return {
      busqueda: "", // Control de búsqueda
      orden: null,  // Control de ordenamiento
    };
  },
  computed: {
    ...mapGetters(["pizzas"]),
    // Filtrado dinámico por nombre o ingredientes
    productosFiltrados() {
      let pizzas = this.pizzas.filter((pizza) =>
        `${pizza.nombre} ${pizza.ingredientes.join(" ")}`.toLowerCase().includes(this.busqueda.toLowerCase())
      );
      if (this.orden === "asc") {
        pizzas.sort((a, b) => a.precio - b.precio);
      } else if (this.orden === "desc") {
        pizzas.sort((a, b) => b.precio - a.precio);
      }
      return pizzas;
    },
  },
  methods: {
    ...mapActions(["addToCart"]),
    agregarCarrito(producto) {
      this.addToCart(producto);
      alert(`¡${producto.nombre} se agregó al carrito con éxito!`); // Alerta al agregar al carrito
    },
    ordenarPorPrecio(orden) {
      this.orden = orden;
    },
  },
};
</script>

<style scoped>
h1 {
  font-family: "Arial", sans-serif;
  color: #d35400;
}
h2 {
  font-family: "Verdana", sans-serif;
  color: #2c3e50;
}
</style>
