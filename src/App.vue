<template>
    <h1>Procrastination Station</h1>
    
    <form @submit.prevent="addEntry">
      <label>New Entry</label>
      <input v-model="newEntry" name="entry">
      <button>Add Entry</button>
    </form>

    <ul>
      <li v-for="(entry, index) in entryList" :key="index">
        <h3>{{entry.todo}}</h3>
      </li>
    </ul>

    <!-- <h4 v-if="entryList.length === 0">Nothing here</h4> -->
</template>

<script>
import { ref } from "vue";

export default {
  setup(){
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

			return {
				entryList,
				newEntry,
				addEntry,
				saveData
			}
    }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
  border-radius: 10px;
  border: #FFFFFF;
  background-color: #14971F;
  color: #FFFFFF;
}
</style>
