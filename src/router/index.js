import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: '/:catchAll(.*)*', redirect: { name: 'Welcome' } }],
});

export default router;
