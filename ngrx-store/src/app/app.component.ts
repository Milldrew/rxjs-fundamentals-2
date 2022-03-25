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
  counter$: Observable<number>;
  title = 'ngrx-store';
  constructor(private store: Store<AppState>) {
    this.counter$ = this.store.select('counter');
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
