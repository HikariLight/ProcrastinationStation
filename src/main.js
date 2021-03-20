import { createApp } from 'vue'
import App from './App.vue'
import { Routes } from './Routes'

const router =[{ Routes }];
const app = createApp(App);
app.use(router);
app.mount('#app');
//createApp(App).use(router).mount('#app');

export const main = [{
    path: '/',
    component: Routes,
}];

