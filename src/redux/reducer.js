const initState = {
  todoList: [
    { id: 1, name: 'Dinh', todo: 'yes' },
    { id: 2, name: 'Trang', todo: 'yes' },
    { id: 3, name: 'Tram', todo: 'no' }
  ]
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'todoList/addTodo': 
      return {
        ...state,
        todoList: [
          ...state.todoList,
          action.payload
        ]
      }
    default: 
      return state
  }
}

export default rootReducer;