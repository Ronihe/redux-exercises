const INITIAL_STATE = { todos: [] };

function rootReducer(state = INITIAL_STATE, action) {
  const copy = { ...state };
  switch (action.type) {
    case 'ADD':
      // this is alright
      return { ...state, todos: [...copy.todos, action.payload] };
    case 'UPDATE': {
      // use the map to get search for the id
      // if there is no id match, return the todo
      // if find the id, return the updatedTdo
      const newTodoCopy = copy.todos.map(todo => {
        if (todo.id === action.payload.id) {
          todo.task = action.payload.updatedTask;
          return todo;
        } else {
          return todo;
        }
      });

      return { ...state, todos: newTodoCopy };
    }

    case 'DELETE':
      // use the filter to get the filtered
      return {
        ...state,
        todos: copy.todos.filter(todo => todo.id !== action.payload)
      };

    default:
      return state;
  }
}

export default rootReducer;
