import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Drink } from './drink.model';

@Component({
  selector: 'drink-list',
  template: `
  <div class="row col-xs-offset-4">
    <div class="col-xs-4">
      <select (change)="onChangePrice($event.target.value)" class="filter form-control">
        <option value="all">All Drinks</option>
        <option value="low">Discount Drinks</option>
        <option value="high">Premium Drinks</option>
      </select>
    </div>
    <div class="col-xs-4">
      <select (change)="onChangeType($event.target.value)" class="filter form-control">
        <option value="all">All Types</option>
        <option value="coffee">Coffee</option>
        <option value="tea">Tea</option>
      </select>
    </div>
  </div>
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
