<template>
  <div id="app">
    <HeaderComponent />  <!-- Компонент шапки -->
    <router-view />      <!-- Здесь будут отображаться маршруты, например, HomePage -->
    <FooterComponent />  <!-- Компонент подвала -->
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'; // Импортируем компонент шапки
import FooterComponent from './components/FooterComponent.vue'; // Импортируем компонент подвала

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* Можешь добавить здесь свои стили, если нужно */
</style>
