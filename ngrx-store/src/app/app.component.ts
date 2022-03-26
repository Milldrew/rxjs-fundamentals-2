import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './app-state';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newProduct = '';
  counter$ = this.store.select('counter');
  title = 'ngrx-store';
  constructor(private store: Store<AppState>) {}
  add() {
    this.store.dispatch({ type: 'ADD', payload: { load: 'hi' } });
  }

  increment() {
    this.store.dispatch({ type: 'INCREMENT' });
  }
  decrement() {
    this.store.dispatch({ type: 'DECREMENT' });
  }
  reset() {
    this.store.dispatch({ type: 'RESET' });
  }
}
