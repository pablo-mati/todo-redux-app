import { ActionReducerMap } from '@ngrx/store';

import { filterReducer } from './filter/filter.reducer';
import { validFilters } from './filter/filter.actions';

import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/todo.reducer';

export interface AppState {
  todos: Todo[];
  filter: validFilters;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer,
};
