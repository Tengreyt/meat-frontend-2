<template>
  <div id="app">
    <!-- Шапка сайта -->
    <HeaderComponent />

    <!-- Основной контент -->
    <router-view />

    <!-- Футер сайта -->
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style>
/* Глобальные стили */
#app {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
