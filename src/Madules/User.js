import Vue from 'vue';
import {main} from '../main';

const state = {
  UserFullName: '',
  IsUserAuthenticated: false
};


const getters = {
  GetUserFullName(state) {
    return state.UserFullName;
  },
  IsUserAuthenticated(state) {
    return state.IsUserAuthenticated;
  }
};

const mutations = {
  SetAuthCookie(state, loginResult) {
    Vue.cookie.set(
      "TodoList",
      loginResult.body.token,
      loginResult.body.expireTime
    );
  },
  SetUserFullName(state, userFullName) {
    state.UserFullName = userFullName;
  },
  SetUserAuthenticated(state, isAuth) {
    state.IsUserAuthenticated = isAuth;
  },
  DeleteAuthCookie() {
    Vue.cookie.delete("TodoList");
  }
};

const actions = {
  RegisterUser(context, registerData) {
    Vue.http.post('Account/Register', registerData)
      .then(response => {
        if (response.status == 200) {
          console.log(response);
          alert("Registration completed successfully");
        }
        console.log(response);
      }, data => {
        console.log(data);
      });
  },
  LoginUser(context, loginData) {
    Vue.http.post('Account/Login', loginData).then(response => {
      console.log(response);
      if (response.body.result == "NotFound") {
        alert('A user with the entered profile could not be found');
      }

      if (response.body.result == "Done") {
        context.commit("SetAuthCookie", response);
        context.commit("SetUserFullName", response.body.user.name + " " + response.body.user.family);
        context.commit("SetUserAuthenticated", true);
        main.push('/');
      }

    });
  },

  CheckForLogin(context) {
    Vue.http.get('Account/CheckAuthentication').then(response => {
      console.log(response);
      if (response.status !== 401 && response.body.status) {
        context.commit("SetUserFullName", response.body.user.name + " " + response.body.user.family);
        context.commit("SetUserAuthenticated", true);
      }
    });
  },

  SignOutUser(context) {
    Vue.http.get('Account/SignOut').then(response => {
      console.log(response);
      if (response.status !== 401 && response.body.status == "success") {
        context.commit("SetUserFullName", '');
        context.commit("SetUserAuthenticated", false);
        context.commit("DeleteAuthCookie");
        main.push('/Login');
      }
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};