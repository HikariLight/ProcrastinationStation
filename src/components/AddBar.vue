<template>
    <form @submit.prevent="$store.commit('addTodo', {list_index: 0, todo_content: newTodo})">
      <label>New entry:</label>
      <input v-model="newTodo" name="todo" autocomplete="off">
      <button id="add-button">Add Todo</button>
    </form>

</template>

<script>
export default {
	name: 'ToDoList',
}

</script>

<style scoped>
body{
	font-size: 16px;
}

label{
  padding: 0.5em;
}

input{
  padding: 1em;
}

#add-button{
  padding: 10px;
  margin: 1em;
  border-radius: 5px;
  border: #FFFFFF;
  background-color: #14971F;
  color: #FFFFFF;
}
</style>
