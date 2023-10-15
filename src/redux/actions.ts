export const ADD_TODO = 'ADD_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const ISDONE_TODO = 'ISDONE_TODO'
export const SEARCH_TODO = 'SEARCH_TODO'
export const CLEAR_SEARCH = 'CLEAR_SEARCH';
export interface AddTodoAction {
  type: typeof ADD_TODO
  text: string

}

export interface EditTodoAction {
  type: typeof EDIT_TODO
  id: number
  newText: string
}
export interface IsDoneTodoAction {
  type: typeof ISDONE_TODO
  id: number
  isDone: boolean
}

export interface DeleteTodoAction {
  type: typeof DELETE_TODO
  id: number
}
export interface SearchTodoAction {
  type: typeof SEARCH_TODO
  searchText: string
}
export interface ClearSearchAction {
  type: typeof CLEAR_SEARCH;
}

export type TodoAction =
  | AddTodoAction
  | EditTodoAction
  | DeleteTodoAction
  | SearchTodoAction
  | IsDoneTodoAction
  |ClearSearchAction

export const addTodo = (text: string): AddTodoAction => ({
  type: ADD_TODO,
  text,

})

export const editTodo = (id: number, newText: string): EditTodoAction => ({
  type: EDIT_TODO,
  id,
  newText,
})
export const isDoneTodo = (id: number, isDone: boolean): IsDoneTodoAction => ({
  type: ISDONE_TODO,
  id,
  isDone,
})

export const deleteTodo = (id: number): DeleteTodoAction => ({
  type: DELETE_TODO,
  id,
})
export const searchTodoAction = (searchText: string): SearchTodoAction => ({
  type: SEARCH_TODO,
  searchText,
})
export const clearSearch = (): ClearSearchAction => ({
  type: CLEAR_SEARCH,
});