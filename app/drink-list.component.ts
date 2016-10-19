import { Component, Input } from '@angular/core';
import { Drink } from './drink.model';

@Component({
  selector: 'drink-list',
  template: `
    <div *ngFor="let currentDrink of childDrinkList">
      <h2 >{{ currentDrink.name }} {{ "Price: $" + currentDrink.price}}</h2>
      <h4>{{ currentDrink.shots }} shots!</h4>
    </div>
  `
})

export class DrinkListComponent {
  @Input() childDrinkList: Drink[];
}
