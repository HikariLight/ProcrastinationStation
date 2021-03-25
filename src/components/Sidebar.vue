<template>
    <div class="container">
        <h3>To do lists:</h3>

        <ul v-for="(list, index) in getLists" :key="index">
            <li @click="$store.commit('setCurrentList', list.title)">{{ list.title }}</li>
            <button class="list-buttons" id="edit-button" @click="$store.commit('editTodoList', index)"></button>
            <button class="list-buttons" id="delete-button" @click="$store.commit('deleteTodoList', index)"></button>
        </ul>

        <button id="addTodoListBtn" @click="$store.commit('addTodoList')">Add new todolist</button>
    </div>
</template>

<script>
export default {
	name: 'Sidebar',

    computed: {
        getLists() {
            return this.$store.getters.getLists
        },
    }
}
</script>

<style scoped>

.container{
    border: 1px solid purple;
    float:left;
}

h3{
    color: purple;
}

li{
	list-style-type: none;
    cursor: pointer;
    margin: 10px 0px;
    padding: 0.5em;
}
li:hover{
    color: purple;
}

#addTodoListBtn{
  padding: 10px;
  margin: 1em;
  border-radius: 5px;
  border: #FFFFFF;
  background-color: #14971F;
  color: #FFFFFF;
  cursor: pointer;
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
