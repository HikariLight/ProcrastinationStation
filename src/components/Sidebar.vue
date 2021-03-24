<template>
    <div class="container">
        <h3>To do lists:</h3>

        <ul v-for="(list, index) in getLists" :key="index">
            <li @click="$store.commit('setCurrentList', list.title)">{{ list.title }}</li>
        </ul>

        <button @click="$store.commit('addTodoList')">Add new todolist</button>
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
    padding: 1em;
    color: white;
    margin: 0px auto;
    background-color: purple;
    border-radius: 2px;
}

li{
	list-style-type: none;
    cursor: pointer;
}
li:hover{
    background-color: white;
    color: purple;
}

button{
  padding: 10px;
  margin: 1em;
  border-radius: 5px;
  border: #FFFFFF;
  background-color: #14971F;
  color: #FFFFFF;
  cursor: pointer;
}

</style>
