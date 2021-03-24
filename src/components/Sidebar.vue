<template>
    <div class="container">
        <h3>To do lists:</h3>

        <ul v-for="(list, index) in getLists" :key="index">
            <li>{{ list.title }}</li>
        </ul>
    </div>
</template>

<script>
export default {
	name: 'Sidebar',

    computed: {
        getLists() {
            return this.$store.getters.getLists
        }
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
}

</style>
