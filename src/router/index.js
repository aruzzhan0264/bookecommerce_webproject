// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  // Другие маршруты, если нужны
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
