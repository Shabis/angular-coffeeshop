import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewDrinkComponent } from './new-drink.component';
import { DrinkListComponent} from './drink-list.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
   ],
  declarations: [
    AppComponent,
    NewDrinkComponent,
    DrinkListComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
