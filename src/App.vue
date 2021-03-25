<template>
  <img id="logo" src="./assets/logo.png">
  <h1 id="headerTitle">Procrastination Station</h1>
  <TodoApp />
</template>

<script>
import TodoApp from '@/views/TodoApp.vue'

export default{
  components: {TodoApp}
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container{
    min-width: 45%;
    padding: 1em;
    margin: 0.5em, 0.5em;
    display: inline-block;
}

#headerTitle{
  display: inline-block;
}


#logo{
  display: inline-block;
  length: 36px;
  width: 36px;
}
</style>
