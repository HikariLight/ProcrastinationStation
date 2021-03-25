import { createStore } from 'vuex'
// import immo from './immo';

export default createStore({
  state: {
    currentList: "Uni tasks",
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

    addTodo(state, todo_content){
      let selected_list = state.todolists.find(todo => todo.title === state.currentList).todos;

      selected_list.push({
        index: (selected_list.length) + 1,
        done: false,
        content: todo_content
      });
    },

    deleteTodo(state,todo_index){
      state.todolists.find(todo => todo.title === state.currentList).todos.splice(todo_index, 1);
    },

    editTodo(state, todo_index){
      let edit = prompt("To what do you want to change the entry?")
      state.todolists.find(todo => todo.title === state.currentList).todos[todo_index].content = edit;
    },

    doneTodo(state, todo_index){
      state.todolists.find(todo => todo.title === state.currentList).todos[todo_index].done = !state.todolists.find(todo => todo.title === state.currentList).todos[todo_index].done;
    },

    setCurrentList(state, list_name){
      state.currentList = list_name;
    },

    deleteTodoList(state, index){
      console.log(state.todolists.splice(index, 1));
      state.todolists.splice(index, 1);
    },

    editTodoList(state, index){
      let edit = prompt("To what do you want to change the entry?")
      state.todolists[index].title = edit;
    },

  },

  actions: {},

  getters: {
    getLists(state){
      return state.todolists;
    },

    getTodos(state){
      return state.todolists.find(todo => todo.title === state.currentList)
    },

    getCurrentList(state){
      return state.currentList;
    }
  },
  modules: {}
})
