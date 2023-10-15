import { createStore } from 'redux';
import todoReducer, { TodoState } from './reducer';

const loadState = (): TodoState | undefined => {
  try {
    const serializedState = localStorage.getItem('todos');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

const saveState = (state: TodoState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('todos', serializedState);
  } catch (error) {
    console.log('✅ error    ', error)
    
  }
};

const store = createStore(
  todoReducer,
  loadState()
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;