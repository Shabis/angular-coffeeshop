import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Drink } from './drink.model';

@Component({
  selector: 'drink-list',
  template: `
  <select (change)="onChangePrice($event.target.value)" class="filter">
    <option value="all">All Drinks</option>
    <option value="low">Discount Drinks</option>
    <option value="high">Premium Drinks</option>
  </select>
  <select (change)="onChangeType($event.target.value)" class="filter">
    <option value="all">All Types</option>
    <option value="coffee">Coffee</option>
    <option value="tea">Tea</option>
  </select>
  <br>
  <br>

  <div class="table-responsive">
    <table class="drinks table table-striped">
      <tr>
        <th>Name</th>
        <th>Company</th>
        <th>Size</th>
        <th>Shots</th>
        <th>Flavor</th>
        <th>milk</th>
        <th>price</th>
        <th>Edit?</th>
      </tr>
      <tr *ngFor="let currentDrink of childDrinkList | price:selectedPrice | type:selectedType">
        <td >{{ currentDrink.name }}</td>
        <td>{{ currentDrink.company }}</td>
        <td>{{ currentDrink.size }}</td>
        <td>{{ currentDrink.shots }} shots!</td>
        <td>{{ currentDrink.flavor }}</td>
        <td>{{ currentDrink.milk }}</td>
        <td> {{ currentDrink.price | currency: 'USD':true }}</td>
        <td><button (click)="editButtonClick(currentDrink)">Edit</button></td>
      </tr>
    </table>
  </div>
  `
})

export class DrinkListComponent {
  @Input() childDrinkList: Drink[];
  @Output() clickSender = new EventEmitter();
  editButtonClick(drinkToEdit: Drink) {
    this.clickSender.emit(drinkToEdit);
  }

  public selectedPrice: string = "all";
  onChangePrice(optionFromMenu) {
    this.selectedPrice = optionFromMenu;
  }
  public selectedType: string = "all";
  onChangeType(optionFromMenu) {
    this.selectedType = optionFromMenu;
  }
}
