<template>
  <div class="container">
		<section id="form"><!--form-->
			<div class="row">
				<div class="col-sm-4 col-sm-offset-1">
					<div class="login-fapi corn for backendorm"><!--login form-->
						<h2>Log in to your account :</h2>
						<form>
							<input type="text" v-model="loginForm.username" placeholder="enter user name"/><br>
              <input type="password" v-model="loginForm.password" placeholder="enter your password"/><br>
              <button class="btn btn-default" click.prevent="LoginUser()">Login</button>
						</form>
					</div><!--/login form-->
				</div>
			</div>
		</section>
	</div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    LoginUser() {
      const login = {
        email: this.email,
        password: this.password
      };

      this.$store.dispatch("LoginUser",login);
    }
  }
};
</script>