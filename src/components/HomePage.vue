<!-- HomePage.vue -->
<template>
  <div class="textHotel">
    <h1 class="text-4xl font-bold mb-4">Hotel Exe Sevilla Macarena</h1>
    <h1 class="text-4xl font-bold mb-4">19 de Octubre 2024</h1>
    <div>
      <a
        href="https://www.eventbrite.es/e/entradas-sevilla-card-show-939724249527"
        target="_blank"
        class="btn-entradas"
      >
        Reserva tus entradas
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style>
.textHotel {
  display: flex;
  flex-direction: column;
  color: rgb(255, 255, 255);
  margin-top: 2%;
  text-align: center;
}

/* Estilos para el botón (aplicados a la etiqueta <a>) */
.btn-entradas {
  background-color: #ff5c5c; /* Color de fondo del botón */
  color: white; /* Color del texto del botón */
  padding: 10px 20px; /* Espaciado del botón */
  font-size: 16px; /* Tamaño del texto */
  text-decoration: none; /* Sin subrayado */
  border-radius: 5px; /* Bordes redondeados */
  display: inline-block; /* Asegura que actúe como un botón */
  margin-top: 20px; /* Espaciado superior */
  transition: background-color 0.3s ease; /* Animación de transición */
}

.btn-entradas:hover {
  background-color: #ff1f1f; /* Color al pasar el mouse */
}
</style>
