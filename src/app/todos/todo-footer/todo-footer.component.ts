import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actionsFilter from '../../filter/filter.actions';
import * as actionsTodo from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  currentFilter: actionsFilter.validFilters = 'all';
  filters: actionsFilter.validFilters[] = ['all', 'active', 'complete'];

  pendingItems: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.changeFilter(this.currentFilter);
    this.store.subscribe((state) => {
      this.pendingItems = state.todos.filter((todo) => !todo.completed).length;
    });
  }

  changeFilter(filter: actionsFilter.validFilters) {
    this.currentFilter = filter;
    this.store.dispatch(actionsFilter.setFilter({ filter }));
  }

  clearCompleted() {
    this.store.dispatch(actionsTodo.removeCompleted());
  }
}
