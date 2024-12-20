import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';

// Создаем экземпляр Pinia
const pinia = createPinia();

// Создаем приложение Vue
const app = createApp(App);

// Подключаем роутер и Pinia
app.use(router);
app.use(pinia);

// Монтируем приложение
app.mount('#app');
