import { createStore } from 'vuex'
// import immo from './immo';

export default createStore({
  state: {
    todolists: [{
      title: "Uni tasks",
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
    },
    {
    title: "Personal tasks",
    todos: [{
      index: 1,
      done: false,
      content: "Do the dishes",
    },{
      index: 2,
      done: false,
      content: "Do the laundry",      
    },{
      index: 3,
      done: false,
      content: "Take out the trash",
    }],
  }
  
  ],
  
    users: [{
        username: "admin",
        password: "admin",
    }]
  },
  mutations: {

    addTodoList(state){
      let list_name = prompt("What would you like the list to be called?");
      state.todolists.push({
        title: list_name,
        todos: []
      })
    },

    addTodo(state, {list_index, todo_content}){
      let selected_list = state.todolists[list_index].todos;
      selected_list.push({
        index: (selected_list.length) + 1,
        done: false,
        content: todo_content
      });
    },

    deleteTodo(state, {list_index, todo_index}){
      state.todolists[list_index].todos.splice(todo_index, 1);
    },

    editTodo(state, {list_index, todo_index}){
      let edit = prompt("To what do you want to change the entry?")
      state.todolists[list_index].todos[todo_index].content = edit;
    },

    doneTodo(state, {list_index, todo_index}){
      state.todolists[list_index].todos[todo_index].done = !state.todolists[list_index].todos[todo_index].done;
    }

  },
  actions: {},
  getters: {
    getLists(state){
      return state.todolists;
    },

    getTodos(state){
      return state.todolists.find(todo => todo.title === "Uni tasks")
    },
  },
  modules: {}
})
