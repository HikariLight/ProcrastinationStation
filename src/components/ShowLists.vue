<template>
    <div class="container">
        <h3>{{getTodos.title}}</h3>    
        <ul>
        <li v-for="(todo, index) in getTodos.todos" :key="index">
            <input @change="$store.commit('doneTodo', index)" type="checkbox">
            <label :class="{ done : todo.done}">{{todo.content}}</label>
            <button class="list-buttons" id="edit-button" @click="$store.commit('editTodo', index)"></button>
            <button class="list-buttons" id="delete-button" @click="$store.commit('deleteTodo', index)"></button>
        </li>
        </ul>
    </div>
</template>

<script>
export default {
	name: 'ToDoList',
	computed: {
		getTodos() {
			return this.$store.getters.getTodos
		}
	}
}
</script>

<style scoped>
.container{
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

li{
	margin: 10px 0px;
	list-style-type: none;
}

.done{
	text-decoration: line-through;
}

.list-buttons {
	background-color: #ffffff;
	border: none;
	margin: 0px 5px;
	height: 16px;
	width: 16px;
	cursor: pointer;
}

#edit-button{
	background-image: url('../assets/edit-button.png');
	background-repeat: no-repeat;
	background-size: contain;
}

#delete-button{
	background-image: url('../assets/delete.png');
	background-repeat: no-repeat;
	background-size: contain;
}

</style>
