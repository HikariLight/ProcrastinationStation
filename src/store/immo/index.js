// import state from './state'
// import * as getters from './getters'
// import * as mutations from './mutations'
// import * as actions from './actions'

// export default new Vuex.Store({
//     state:{
//         todos:[
//         {
//             id: 1,
//              done: false,
//             title: "one",
//         },
//         {
//             id: 2,
//              done: false,
//             title: "two",
//         },
//         {
//             id: 3,
//              done: false,
//             title: "three",
//         }
//     ]
//     },
//     getters: {
//         allTodos: (state) => state.todos,
//     },
//     actions: {
//         addTodo({commit}, todo ){
//             commit('add_todo', todo);
//         }
//     },
//     mutations: {
//         add_todo(state, todo){
//             state.todos.push(todo);
//         }
//     },
//     modules: {},
// })