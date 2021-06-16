import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import {
  create,
  toggle,
  edit,
  remove,
  toggleAll,
  removeCompleted,
} from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Save the world'),
  new Todo('Study Vue.js'),
  new Todo('Cleaning the office'),
];

const _todoReducer = createReducer(
  initialState,
  on(create, (state, { text }) => [...state, new Todo(text)]),
  on(remove, (state, { id }) => state.filter((todo) => todo.id !== id)),
  on(removeCompleted, (state) => state.filter((todo) => !todo.completed)),
  on(toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });
  }),
  on(edit, (state, { id, text }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text,
        };
      } else {
        return todo;
      }
    });
  }),
  on(toggleAll, (state, { complete }) => {
    return state.map((todo) => {
      return {
        ...todo,
        completed: complete,
      };
    });
  })
);

export function todoReducer(state: Todo[] | undefined, action: Action) {
  return _todoReducer(state, action);
}
