// src/main.js

import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Импортируем router

const app = createApp(App);
app.use(router); // Подключаем router
app.mount('#app'); // Монтируем приложение
