import {
  TodoAction,
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  SEARCH_TODO,
  ISDONE_TODO,
  CLEAR_SEARCH,
} from './actions'

export interface Todo {
  id: number
  text: string
  isDone: boolean
}

export interface TodoState {
  todos: Todo[]
  filteredTodos: Todo[]
}

const initialState: TodoState = {
  todos: [],
  filteredTodos: [],
}
export interface RootState {
  todos: TodoState
  filteredTodos: TodoState
}
const TodoReducer = (
  state: TodoState = initialState,
  action: TodoAction,
): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { text: action.text, id: Date.now(), isDone: false },
        ],
      }

    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, text: action.newText } : todo,
        ),
      }
    case ISDONE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, isDone: action.isDone } : todo,
        ),
      }

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      }
    case SEARCH_TODO: {
      const searchText = action.searchText.toLowerCase()
      const filteredTodos = state.todos.filter((todo) =>
        todo.text.toLowerCase().includes(searchText),
      )

      return {
        ...state,
        filteredTodos,
      }
    }
    case CLEAR_SEARCH:
      return {
        ...state,
        filteredTodos: [], 
      };
    default:
      return state
  }
}

export default TodoReducer
