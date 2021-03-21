
<template>
  <div class="container">
    <section id="form">
      <!--form-->
      <div class="row">
        <div class="col-sm-4 col-sm-offset-1">
          <div class="signup-form">
            <!--sign up form-->
            <h2>Register new user</h2>
            <form action="#">
              <input type="text" placeholder="First Name" v-model="registerForm.name">
              <input type="text" placeholder="Last Name" v-model="registerForm.family">

              <input type="email" placeholder="Email adress" v-model="registerForm.email" @input="$v.email.$touch()" :class="{invalid:$v.email.$error}">
              <p class="text-danger" v-if="!$v.email.email">Email is not correct</p>
               <p class="text-danger" v-if="!$v.email.unique && $v.email.$dirty">Email is duplicated</p>
              <p class="text-danger" v-if="!$v.email.required && $v.email.$dirty">Please Enter your email</p>
              <p class="text-danger" v-if="!$v.email.maxLength">User email can not be more than {{$v.email.$params.maxLength.max}} caracters</p>

              <input type="password" placeholder=" Password" v-model="registerForm.password" @blur="$v.password.$touch()" :class="{invalid:$v.password.$error}">
              <p class="text" v-if="!$v.password.required && $v.password.$dirty">Please enter your password</p>

              <p class="text" v-if="!$v.password.minLength">User email musr have more than {{$v.password.$params.minLength.min}} caracters</p>

              <input type="password" placeholder=" Repeat your password " v-model="registerForm.rePassword" @input="$v.rePassword.$touch()" :class="{invalid:$v.rePassword.$error}">

              <p class="text" v-if="!$v.rePassword.sameAs && $v.rePassword.$dirty">The password isn't correct</p>

              <textarea id="Address" rows="5" placeholder=" Adress" v-model="registerForm.address"></textarea>
              <br>
              <br>
              <a @click.prevent="RegisterUser()" class="btn btn-success btn-block" :disabled="$v.$invalid"> Register</a>
            </form>
          </div>
          <!--/sign up form-->
        </div>
        <div style="direction:ltr">{{$v}}</div>
      </div>
    </section>
  </div>
</template>


<script>
import {required, maxLength,minLength,sameAs, email} from "vuelidate/lib/validators";
export default {
  name: 'Register',
  data() {
    return {
      registerForm:{
      name: "",
      family: "",
      email: "",
      password: "",
      rePassword: "",
      address: ""
    }
    }
  },
  methods: {
    RegisterUser() {
      const register = {
        name: this.name,
        family: this.family,
        email: this.email,
        password: this.password,
        address: this.address
      };
      this.$store.dispatch("RegisterUser", register);
    }
  },
  
validations: {
    email: {
      required,
      email,
      maxLength: maxLength(100),
      unique: function(val) {
        if (val === "") return true;

        return this.$http
          .get("IsExistUserByEmail", {
            params: { email: val }
          })
          .then(
            response => {
              console.log(response);
              return !response.body.isExist;
            },
            error => {
              console.log(error);
            }
          );
      }
    },
    password: {
      minLength: minLength(6),
      required
    },
    rePassword: {
      sameAs: sameAs("password")
    }
  }
};

</script>

<style>
.invalid {
  border: 1px solid red !important;
  box-shadow: 0 0 5px red !important;
  background-color: lightpink !important;
}

</style>
