<template>
  <b-card :title="producto.nombre" class="mb-3 text-center">
    <!-- Imagen del producto -->
    <b-card-img
      :src="producto.imagen"
      alt="Imagen del producto"
      class="mb-3"
      style="max-height: 200px; object-fit: cover;"
    ></b-card-img>

    <!-- Ingredientes -->
    <b-card-text>
      <strong>Ingredientes:</strong> {{ producto.ingredientes.join(", ") }}
    </b-card-text>

    <!-- Precio -->
    <b-card-text>
      <strong>Precio:</strong> ${{ producto.precio }}
    </b-card-text>

    <!-- Botones -->
    <b-button variant="info" @click="verDetalles" class="mr-2">Detalles</b-button>
    <b-button variant="success" @click="agregarCarrito">Agregar</b-button>
  </b-card>
</template>

<script>
export default {
  props: ["producto"],
  methods: {
    agregarCarrito() {
      this.$emit("add-to-cart", this.producto);
    },
    verDetalles() {
      this.$router.push(`/producto/${this.producto.id}`);
    },
  },
};
</script>

<style scoped>
.b-card {
  border: 1px solid #e67e22;
  border-radius: 10px;
}

.b-card-title {
  font-family: "Verdana", sans-serif;
  font-size: 1.2em;
  color: #d35400;
}

.b-button {
  font-family: "Arial", sans-serif;
  font-weight: bold;
}
</style>
