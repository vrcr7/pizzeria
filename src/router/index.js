import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import CarritoView from "../views/CarritoView.vue";
import ProductDetailView from "../views/ProductDetailView.vue";
import NotFoundView from "../views/NotFoundView.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/carrito", name: "Carrito", component: CarritoView },
  {
    path: "/producto/:id",
    name: "ProductDetail",
    component: ProductDetailView,
  },
  // Ruta 404: Debe colocarse al final para que coincida con cualquier ruta no definida
  { path: "*", name: "NotFound", component: NotFoundView },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
