import { createAction, props } from '@ngrx/store';

export type validFilters = 'all' | 'complete' | 'active';

export const setFilter = createAction(
  '[Filter] Set Filter',
  props<{ filter: validFilters }>()
);
