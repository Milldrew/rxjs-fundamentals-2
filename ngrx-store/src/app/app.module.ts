import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const counterReducer = (state = 0, action: any) => {
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

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ counter: counterReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
