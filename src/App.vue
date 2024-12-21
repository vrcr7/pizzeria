<template>
  <div id="app">
    <NavbarComponent />
    <b-container fluid class="mt-3" id="content-container">
      <router-view />
    </b-container>
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {
    NavbarComponent,
    FooterComponent,
  },
};
</script>

<style>
/* Estilo del contenedor principal */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* Esto asegura que el footer siempre esté al fondo */
}

#content-container {
  flex: 1;
  /* Este se expande para llenar el espacio disponible */
}

footer {
  background-color: #f8f9fa;
  padding: 15px;
  text-align: center;
  margin-top: auto;
  /* Asegura que el footer siempre esté al final */
}
</style>
