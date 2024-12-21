
# Mi Pizzería 🍕

Este es un proyecto de una pizzería online hecho con **Vue.js**. La idea es que los usuarios puedan explorar un catálogo de pizzas, agregarlas al carrito, y simular una compra. Lo hice para un examen de certificacion de un bootcamp, tambien para practicar y aprender más sobre Vue2, Vuex y BootstrapVue.

## Funcionalidades principales

- **Navegación**:  
  Hay una barra de navegación donde puedes ir al inicio o al carrito. También muestra cuántos productos hay en el carrito y el total de la compra.

- **Página principal**:  
  Muestra todas las pizzas disponibles. Puedes buscar por nombre o ingredientes y ordenar por precio (ascendente o descendente). Cada pizza está en una tarjeta con su imagen, ingredientes y precio. También puedes agregarla al carrito.

- **Carrito de compras**:  
  En la vista del carrito puedes ver todos los productos que agregaste, cambiar la cantidad de cada uno o eliminarlos. También se muestra el total de la compra.

- **Simulación de compra**:  
  Cuando compras, se abre un modal que muestra el resumen de tu compra. Después de unos segundos procesando, el carrito se vacía y aparece un mensaje de agradecimiento.

## Cómo ejecutar el proyecto

1. Instala las dependencias: 
    npm install
    

2. Inicia el servidor de desarrollo:
    npm run serve
  
3. Abre la app en el navegador en:  
   [http://localhost:8080](http://localhost:8080)   


## Tecnologías que usé

- **Vue.js**: Para toda la estructura de componentes.  
- **Vuex**: Para manejar el estado global (el carrito y las pizzas).  
- **BootstrapVue**: Para los estilos y los componentes como tablas, botones, modales, etc.  
- **CSS**: Para personalizar un poco más el diseño.

## Estructura básica del proyecto

- **App.vue**: Es el contenedor principal de la app.  
- **HomeView.vue**: La página principal donde están todas las pizzas.  
- **CardComponent.vue**: El componente para mostrar cada pizza en su tarjeta.  
- **CarritoView.vue**: La página del carrito con todas las funcionalidades para modificar o comprar.  
- **NavbarComponent.vue** y **FooterComponent.vue**: La barra de navegación y el pie de página.
- **ProductDetailView.vue** : Esta es una vista detallada de las Pizzas , aquí se pueden agregar pizzas tambien 
## Notas

Esto es solo un proyecto básico para practicar. Hay muchas cosas que se podrían mejorar o agregar, como:

- Manejar usuarios con cuentas.  
- Hacer un sistema real de pagos.   

¡Gracias por darle un vistazo! 
