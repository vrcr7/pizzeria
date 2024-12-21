import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pizzas: [
      {
        id: "p001",
        nombre: "napolitana",
        descripcion:
          "La pizza napolitana, de masa tierna y delgada pero bordes altos, es la versión propia de la cocina napolitana de la pizza redonda.",
        precio: 5950,
        ingredientes: ["mozzarella", "tomates", "jamón", "orégano"],
        imagen: require("@/assets/img/pizzas/napolitana.jpg"),
      },
      {
        id: "p002",
        nombre: "española",
        descripcion:
          "La pizza española consiste en un pan plano cubierto con salsa de tomate, queso y otros ingredientes como choricillo y jamón.",
        precio: 7250,
        ingredientes: ["mozzarella", "tomates", "jamón", "choricillo"],
        imagen: require("@/assets/img/pizzas/espanola.jpg"),
      },
      {
        id: "p003",
        nombre: "salame",
        descripcion:
          "La pizza con salame es una preparación clásica que combina mozzarella, tomates y orégano con el delicioso sabor del salame.",
        precio: 5990,
        ingredientes: ["mozzarella", "tomates", "salame", "orégano"],
        imagen: require("@/assets/img/pizzas/salame.jpg"),
      },
      {
        id: "p004",
        nombre: "cuatro estaciones",
        descripcion:
          "La pizza cuatro estaciones divide sus ingredientes en cuatro partes: salame, champiñones, aceitunas y mozzarella.",
        precio: 9590,
        ingredientes: ["mozzarella", "salame", "aceitunas", "champiñones"],
        imagen: require("@/assets/img/pizzas/cuatro_estaciones.jpg"),
      },
      {
        id: "p005",
        nombre: "bacon",
        descripcion:
          "La pizza con bacon incluye mozzarella, tomates cherry, bacon y orégano para un sabor inigualable.",
        precio: 6450,
        ingredientes: ["mozzarella", "tomates cherry", "bacon", "orégano"],
        imagen: require("@/assets/img/pizzas/bacon.jpg"),
      },
    ],
    carrito: JSON.parse(localStorage.getItem("carrito"))?.map((item) => ({
      ...item,
      cantidad: item.cantidad > 0 ? item.cantidad : 1,
    })) || [],
  },
  mutations: {
    ADD_TO_CART(state, pizza) {
      const item = state.carrito.find((p) => p.id === pizza.id);
      if (item) {
        item.cantidad += pizza.cantidad || 1; // Incrementa la cantidad si ya existe
      } else {
        state.carrito.push({ ...pizza, cantidad: pizza.cantidad || 1 }); // Agrega con cantidad mínima de 1
      }
      localStorage.setItem("carrito", JSON.stringify(state.carrito));
    },
    REMOVE_FROM_CART(state, pizzaId) {
      state.carrito = state.carrito.filter((p) => p.id !== pizzaId);
      localStorage.setItem("carrito", JSON.stringify(state.carrito));
    },
    INCREASE_QUANTITY(state, pizzaId) {
      const item = state.carrito.find((p) => p.id === pizzaId);
      if (item) {
        item.cantidad++;
        localStorage.setItem("carrito", JSON.stringify(state.carrito));
      }
    },
    DECREASE_QUANTITY(state, pizzaId) {
      const item = state.carrito.find((p) => p.id === pizzaId);
      if (item) {
        if (item.cantidad > 1) {
          item.cantidad--;
        } else {
          state.carrito = state.carrito.filter((p) => p.id !== pizzaId);
        }
        localStorage.setItem("carrito", JSON.stringify(state.carrito));
      }
    },
    CLEAR_CART(state) {
      state.carrito = []; // Limpia el carrito
      localStorage.setItem("carrito", JSON.stringify(state.carrito));
    },
  },
  actions: {
    addToCart({ commit }, pizza) {
      commit("ADD_TO_CART", pizza);
    },
    removeFromCart({ commit }, pizzaId) {
      commit("REMOVE_FROM_CART", pizzaId);
    },
    increaseQuantity({ commit }, pizzaId) {
      commit("INCREASE_QUANTITY", pizzaId);
    },
    decreaseQuantity({ commit }, pizzaId) {
      commit("DECREASE_QUANTITY", pizzaId);
    },
    clearCarrito({ commit }) {
      commit("CLEAR_CART");
    },
  },
  getters: {
    pizzas: (state) => state.pizzas,
    carrito: (state) => state.carrito,
    totalCarrito: (state) =>
      state.carrito.reduce((total, item) => {
        const cantidad = Number(item.cantidad) || 0;
        const precio = Number(item.precio) || 0;
        return total + cantidad * precio;
      }, 0),
  },
});
