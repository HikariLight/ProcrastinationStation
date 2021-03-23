import { createStore } from 'vuex'
// import immo from './immo';

export default createStore({
  state: {
    todos: [{
      index: 1,
      done: false,
      content: "Finish this project",
    },{
      index: 2,
      done: false,
      content: "Present the project",      
    },{
      index: 3,
      done: false,
      content: "Work on all the other projects",
    }],

    users: [{
        username: "admin",
        password: "admin",
    }]
  },
  mutations: {
    addTodo(state, todo){
      state.todos.push({
        index: (state.todos.length) + 1,
        done: false,
        content: todo
      });
    },

    deleteTodo(state, index){
      state.todos.splice(index, 1);
    },

    editTodo(state, index){
      let edit = prompt("To what do you want to change the entry?", state.todos[index].content)
      state.todos[index].content = edit;
    }
  },
  actions: {},
  modules: {}
})
