<template>
    <form @submit.prevent="addEntry">
      <label>New entry:</label>
      <input v-model="newEntry" name="entry" autocomplete="off">
      <button id="add-button">Add Entry</button>
    </form>

    <ul>
      <li v-for="(entry, index) in entryList" :key="index">
		<input @change="doneTodo(entry)" type="checkbox">
        <label :class="{ done : entry.done}">{{entry.todo}}</label>
		<button class="list-buttons" id="edit" @click="editEntry(entry)"></button>
		<button class="list-buttons" id="delete" @click="deleteEntry(index)"></button>
      </li>
    </ul>
</template>

<script>
import { ref } from "vue";

export default {
	setup(){
		localStorage.clear(); //Clearing out the list from previous browsing session
		const newEntry = ref("");

		const entryList = ref([{
			done: false,
			todo: "Finish this project"
		}]);

		function addEntry () {
			if (newEntry.value) {
				entryList.value.push({
					done: false,
					todo: newEntry.value
				});
				newEntry.value = "";
			}
			saveData();
		}

		function saveData () {
			const storageData = JSON.stringify(entryList.value);
			localStorage.setItem('entryList', storageData);
		}

		function doneTodo(todo){
			todo.done = !todo.done;
			saveData();
		}

		function deleteEntry (index) {
			entryList.value.splice(index, 1);
			saveData();
		}

		function editEntry(entry){
			let edit = prompt("To what  do you want to change the entry?", entry.todo);
			entry.todo = edit;
		}

		return {
			entryList,
			newEntry,
			addEntry,
			saveData,
			doneTodo,
			deleteEntry,
			editEntry
		}
	}
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

#edit{
	background-image: url('../assets/edit-button.png');
	background-repeat: no-repeat;
	background-size: contain;
}

#delete{
	background-image: url('../assets/delete.png');
	background-repeat: no-repeat;
	background-size: contain;
}

</style>
