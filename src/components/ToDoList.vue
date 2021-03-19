<template>    
    <form @submit.prevent="addEntry">
      <label>New Entry</label>
      <input v-model="newEntry" name="entry" autocomplete="off">
      <button>Add Entry</button>
    </form>

    <ul>
      <li v-for="(entry, index) in entryList" :key="index">
		<input @change="doneTodo(entry)" type="checkbox" id="checkbox">
        <label :class="{ done : entry.done}">{{entry.todo}}</label>
      </li>
    </ul>
</template>

<script>
import { ref } from "vue";

export default {
	setup(){
		localStorage.clear(); //Clearing out the list from previous browsing session
		const newEntry = ref("");
		const defaultData = [{
			done: false,
			todo: ""
		}]

		const entryData = JSON.parse(localStorage.getItem('entryList')) || defaultData;
		const entryList = ref(entryData);
		
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

		return {
			entryList,
			newEntry,
			addEntry,
			saveData,
			doneTodo,
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

button{
  padding: 10px;
  margin: 1em;
  border-radius: 5px;
  border: #FFFFFF;
  background-color: #14971F;
  color: #FFFFFF;
}

li{
	list-style-type: none;
}

.done{
	text-decoration: line-through;
}
</style>
