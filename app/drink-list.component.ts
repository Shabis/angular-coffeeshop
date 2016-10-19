import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Drink } from './drink.model';

@Component({
  selector: 'drink-list',
  template: `
    <div *ngFor="let currentDrink of childDrinkList" class="col-md-4">
      <h2 >{{ currentDrink.name }}</h2>
      <h5>{{ currentDrink.company }}</h5>
      <h5>{{ currentDrink.size }}</h5>
      <h5>{{ currentDrink.shots }} shots!</h5>
      <h5>{{ currentDrink.Flavor }}</h5>
      <h5>{{ currentDrink.milk }}</h5>
      <h5> {{ "Price: $" + currentDrink.price}}</h5>
      <button (click)="editButtonClick(currentDrink)">Edit</button>
    </div>
  `
})

export class DrinkListComponent {
  @Input() childDrinkList: Drink[];
  @Output() clickSender = new EventEmitter();
  editButtonClick(drinkToEdit: Drink) {
    this.clickSender.emit(drinkToEdit);
  }
}
