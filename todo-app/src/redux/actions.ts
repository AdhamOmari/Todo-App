export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export interface AddTodoAction {
  type: typeof ADD_TODO;
  text: string;
}

export interface EditTodoAction {
  type: typeof EDIT_TODO;
  id: number;
  newText: string;
}

export interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  id: number;
}

export type TodoAction = AddTodoAction | EditTodoAction | DeleteTodoAction;

export const addTodo = (text: string): AddTodoAction => ({
  type: ADD_TODO,
  text,
});

export const editTodo = (id: number, newText: string): EditTodoAction => ({
  type: EDIT_TODO,
  id,
  newText,
});

export const deleteTodo = (id: number): DeleteTodoAction => ({
  type: DELETE_TODO,
  id,
});