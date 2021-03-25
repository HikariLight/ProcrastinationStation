<template>
    <AddBar />
    <ShowLists />
    <Sidebar />
</template>

<script>
import AddBar from '../components/AddBar.vue'
import Sidebar from '../components/Sidebar.vue'
import ShowLists from '../components/ShowLists.vue'

export default {
  name: 'ActualApp',
  components: {AddBar, Sidebar, ShowLists}
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