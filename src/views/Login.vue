<template>
	<h2>Log in to your account</h2>
	<form>
        <label>Username: </label>
		<input type="text" placeholder="Enter your Username"/><br>
        <label>Password: </label>
        <input type="password" placeholder="Enter your password"/><br>
        <button>Login</button>
	</form>
</template>


<script>
export default {
}
</script>

<style scoped> 
form{
    text-align: center;
}

input{
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    margin: 10px 0px;
    display: inline-block;
}

button{
  padding: 10px;
  margin: 1em;
  border-radius: 5px;
  border: #FFFFFF;
  background-color: purple;
  color: #FFFFFF;
}
</style>