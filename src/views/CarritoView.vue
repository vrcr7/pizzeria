<template>
    <div>
      <b-container>
        <h1>Carrito</h1>
  
        <b-table :items="carrito" :fields="fields">
          <template #cell(imagen)="row">
            <img :src="row.item.imagen" alt="Miniatura" class="miniatura" />
          </template>
          <template #cell(actions)="row">
            <b-button @click="increase(row.item.id)" variant="success">+</b-button>
            <b-button @click="decrease(row.item.id)" variant="danger">-</b-button>
          </template>
        </b-table>
  
        <h3>Total: {{ totalCompra }}$</h3>
  
        <b-button variant="success" @click="pagar">Comprar</b-button>
  
        <b-alert
          v-if="showAlert"
          variant="danger"
          dismissible
          class="mt-4"
          @dismissed="clearAlert"
        >
          {{ alertMessage }}
        </b-alert>
  
        <b-modal id="compraModal" title="Resumen de tu compra" @hide="handleModalClose" hide-footer>
          <b-table :items="carrito" :fields="['imagen', 'nombre', 'cantidad', 'precio']" class="mb-3">
            <template #cell(imagen)="row">
              <img :src="row.item.imagen" alt="Miniatura" class="miniatura" />
            </template>
          </b-table>
          <h4>Total: {{ totalCompra }}$</h4>
  
          <div v-if="comprando" class="text-center">
            <b-spinner variant="primary" class="mb-3"></b-spinner>
            <p>Procesando compra...</p>
          </div>
  
          <div v-else class="text-center">
            <b-button
              v-if="!compraFinalizada"
              variant="primary"
              @click="finalizarCompra"
              class="mr-3"
            >
              Comprar
            </b-button>
            <b-button
              v-if="!compraFinalizada"
              variant="secondary"
              @click="cerrarModal"
            >
              Volver
            </b-button>
            <h5 v-if="compraFinalizada">Gracias por tu compra!</h5>
          </div>
        </b-modal>
      </b-container>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from "vuex";
  
  export default {
    data() {
      return {
        showAlert: false,
        alertMessage: "",
        comprando: false,
        compraFinalizada: false,
      };
    },
    computed: {
      ...mapGetters(["carrito"]),
      fields() {
        return ["imagen", "nombre", "cantidad", "precio", "actions"];
      },
      totalCompra() {
        return this.carrito
          .reduce((total, item) => total + item.cantidad * item.precio, 0)
          .toFixed(2);
      },
    },
    methods: {
      ...mapActions([
        "increaseQuantity",
        "decreaseQuantity",
        "clearCarrito",
      ]),
      increase(id) {
        this.increaseQuantity(id);
      },
      decrease(id) {
        this.decreaseQuantity(id);
      },
      pagar() {
        if (this.carrito.length === 0) {
          this.showAlertMessage("El carrito está vacío. Agrega productos antes de comprar.");
          return;
        }
        this.$bvModal.show("compraModal");
      },
      finalizarCompra() {
        this.comprando = true;
        setTimeout(() => {
          this.comprando = false;
          this.compraFinalizada = true;
          this.clearCarrito();
          setTimeout(() => this.irAlInicio(), 2000); // Después del spinner, redirigir al inicio
        }, 3000);
      },
      showAlertMessage(message) {
        this.alertMessage = message;
        this.showAlert = true;
      },
      clearAlert() {
        this.showAlert = false;
        this.alertMessage = "";
      },
      cerrarModal() {
        this.$bvModal.hide("compraModal"); // Solo cierra el modal
      },
      irAlInicio() {
        this.$router.push("/"); // Redirige al inicio
      },
      handleModalClose() {
        if (this.compraFinalizada) {
          this.clearCarrito();
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .miniatura {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 5px;
  }
  .b-table th {
    text-align: center;
  }
  .b-button {
    margin-right: 5px;
  }
  </style>
  