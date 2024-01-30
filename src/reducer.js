export const initialState = {
  todos: []
};


const updateLocalstorage = (data) => {
  localStorage.setItem("todos", JSON.stringify(data))
}

const initialStateWithLoacalStorage = (state) => {
  debugger
  let data = localStorage.getItem("todos")
  if (!data) return initialState 
  try {
    data = JSON.parse(data)
  } catch (error) {
    data = initialState
  }
  return data
}

// Add State not reove it 

export const reducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE": 
   const data = initialStateWithLoacalStorage()
    return data

    case "ADD_TODO":

    const addTodo = {
      ...state,
      todos: [...state.todos, action.payload]
    };

    updateLocalstorage(addTodo)
      return addTodo

    case "DELETE_TODO":

    const deleteTodo = {
      ...state,
      todos: [...state.todos.filter(item => item.id !== action.payload)]
    }

    updateLocalstorage(deleteTodo, action.payload)
      return deleteTodo


    case "UPDATE_TODO":
      
    const updatemap = (item) => {
      if (item.id == action.payload.id) {
        item.todoState = action.payload.todoState
        return item
      } else {
        return item
      }
    }

    const updateTodo = {
      ...state,
      todos: [...state.todos.map(item => updatemap(item))]
    }

    updateLocalstorage(updateTodo)
    
    return updateTodo

    case "REMOVE_COMPLETED_TODO":

    const complete = {
      ...state,
      todos: [...state.todos.filter(item => item.todoState !== action.payload.todoState)]
    }

    updateLocalstorage(complete, action.payload)
      return complete

    default:
      return state;
  }
};
