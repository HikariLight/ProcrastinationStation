<template>
	<h2>Register for an account:</h2>
	<form>
        <label>Choose a username: </label>
		<input type="text" placeholder="Enter your Username"/><br>
        <label>Email: </label>
        <input type="email" placeholder="Enter your Email"/><br>
        <label>Password: </label>
        <input type="password" placeholder="Enter your password"/><br>
        <label>Repeat your password: </label>
        <input type="password" placeholder="Repeat your password"/><br>
        <button>Sign up</button>
	</form>
</template>


<script>
export default {
}
</script>

<style scoped> 
form{
    display: inline-block;
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