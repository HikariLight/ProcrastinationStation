<template>
  <h1>Procrastination Station</h1>
  
  <router-link to="/login"><button>Login</button></router-link>
  <router-link to="/register"><button>Register</button></router-link>
  <router-link to="/app"><button>App</button></router-link>

  <router-view/>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
button{
  padding: 10px;
  margin: 1em;
  border-radius: 5px;
  border: #FFFFFF;
  background-color: #14971F;
  color: #FFFFFF;
}
</style>