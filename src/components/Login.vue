<template>
  <div class="container">
		<section id="form"><!--form-->
			<div class="row">
				<div class="col-sm-4 col-sm-offset-1">
					<div class="login-fapi corn for backendorm"><!--login form-->
						<h2>Log in to your account :</h2>
						<form action="#">
							<input type="text" v-model="loginForm.username" placeholder="enter user name"/><br>
                            <input type="password" v-model="loginForm.password" placeholder="enter your password"/><br>
                            <button type="submit" class="btn btn-default" v-on:click="getLogin">Login</button>
						</form>
					</div><!--/login form-->
				</div>
			</div>
		</section>
	</div>
</template>
<script>
export default {
    name: 'Login',
    data(){
        return {
            loginForm:{
                username:null,
                password:null
            }
        }
    },
    methods:{
        getLogin(){
            console.log("getLogin called", this.loginForm.username,this.loginForm.password)
        }
    }
}
</script>