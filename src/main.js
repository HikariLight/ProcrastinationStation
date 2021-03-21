import { createApp } from 'vue'
import App from './App.vue'
import { Routes } from './Routes'
import VueResource from 'vue-resource';
import Vuelidate from 'vuelidate';
import VueCookie from 'vue-cookie';


const router =[{ Routes }];

createApp(App).use(router).use(VueCookie).use(VueResource).use(Vuelidate).mount('#app');
/*VueResource.http.options.root = "http://localhost:13172/api/";
Vue.http.interceptors.push((request, next) => {

    request.headers.set('Authorization', 'Bearer ' + Vue.cookie.get('TodoList'));
  
    next();
  });
*/
export const main = [{
    path: '/',
    component: Routes,
    scrollBehavior(){
    return {
        x:0,
        y: 0
    }
}
}];

