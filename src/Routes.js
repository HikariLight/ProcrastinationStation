import Index from './components/index/Index.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';


export const Routes = [{
  path: '/',
  component: Index
},
{
    path: '/Login',
    component: Login
  },
  {
    path: '/Register',
    component: Register
  }
];