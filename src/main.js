import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './index.css';

import App from './App.vue';
import router from './router';
import { createHead } from '@vueuse/head';

const app = createApp(App);
const head = createHead();

app.use(head);

app.use(createPinia());
app.use(router);

app.mount('#app');
