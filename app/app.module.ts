import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewDrinkComponent } from './new-drink.component';
import { DrinkListComponent} from './drink-list.component';
import { EditDrinkComponent } from './edit-drink.component';
import { PricePipe } from './price.pipe';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
   ],
  declarations: [
    AppComponent,
    NewDrinkComponent,
    DrinkListComponent,
    EditDrinkComponent,
    PricePipe
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
