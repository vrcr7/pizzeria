<template>
  <div>
    <b-container class="mt-4">
      <b-row class="align-items-center">
        <!-- Imagen del producto -->
        <b-col cols="12" md="6" class="text-center">
          <b-img
            :src="producto.imagen"
            :alt="'Imagen de ' + producto.nombre"
            class="detalle-imagen"
            fluid
            rounded
          ></b-img>
        </b-col>

        <!-- Detalles del producto -->
        <b-col cols="12" md="6">
          <h1>{{ producto.nombre }}</h1>
          <p>{{ producto.descripcion }}</p>
          <p><strong>Precio:</strong> ${{ producto.precio }}</p>
          <p>
            <strong>Ingredientes:</strong>
            <ul>
              <li v-for="(ingrediente, index) in producto.ingredientes" :key="index">
                {{ ingrediente }}
              </li>
            </ul>
          </p>

          <!-- Selector de cantidad -->
          <div class="d-flex align-items-center mb-3">
            <b-button variant="outline-danger" @click="disminuirCantidad" class="mr-2">
              -
            </b-button>
            <b-form-input
              v-model="cantidad"
              type="number"
              min="1"
              class="text-center"
              style="width: 60px;"
            ></b-form-input>
            <b-button variant="outline-success" @click="aumentarCantidad" class="ml-2">
              +
            </b-button>
          </div>

          <!-- Botones -->
          <b-button variant="success" @click="agregarCarrito">
            Agregar {{ cantidad }} al Carrito
          </b-button>
          <b-button variant="secondary" @click="volver" class="ml-2">
            Volver
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      cantidad: 1,
    };
  },
  computed: {
    ...mapGetters(["pizzas"]),
    producto() {
      const id = this.$route.params.id;
      return this.pizzas.find((p) => p.id === id) || {};
    },
  },
  methods: {
    ...mapActions(["addToCart"]),
    agregarCarrito() {
      const productoConCantidad = { ...this.producto, cantidad: this.cantidad };
      this.addToCart(productoConCantidad);
      alert(`${this.cantidad} ${this.producto.nombre}(s) agregado(s) al carrito`);
    },
    volver() {
      this.$router.push("/");
    },
    aumentarCantidad() {
      this.cantidad++;
    },
    disminuirCantidad() {
      if (this.cantidad > 1) {
        this.cantidad--;
      }
    },
  },
};
</script>

<style scoped>
.detalle-imagen {
  max-width: 100%;
  max-height: 300px;
  object-fit: contain;
  margin: 0 auto;
}
h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
</style>
