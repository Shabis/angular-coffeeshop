import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NewDrinkComponent } from './new-drink.component';


@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    NewDrinkComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
