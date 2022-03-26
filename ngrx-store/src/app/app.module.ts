import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const counterReducer = (state = 0, action: any) => {
  console.log('hello');
  switch (action.type) {
    case 'INCREMENT':
      console.log('inc');
      return state++;
    case 'DECREMENT':
      console.log('dec');
      return state++;
    case 'RESET':
      console.log('rest');
      return 0;
    default:
      console.log('default');
      return state;
  }
};

const productsReducer = (state: any[] = [], action: any) => {
  console.log('hi');
  switch (action.type) {
    case 'ADD':
      return [...state, { ...action.payload }];
    default:
      return state;
  }
};

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ counter: counterReducer, products: productsReducer }),
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
