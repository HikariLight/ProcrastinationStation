import Vue from 'vue';
import Vuex from 'vuex';
import user from './Modules/User';
import order from './Modules/Order';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {},
  modules: {
    user,
    order
  }
});