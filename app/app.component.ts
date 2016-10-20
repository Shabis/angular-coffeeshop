import { Component } from '@angular/core';
import { Drink } from './drink.model';

@Component ({
  selector: 'my-coffee-shop',
  template: `
  <div class="jumbotron">
    <img class="logo" src="../../resources/img/logo.png">
  </div>
  <div class="container">
    <drink-list
      [childDrinkList]="masterDrinkList"
      (clickSender)="showDetails($event)"
    ></drink-list>
    <edit-drink
      [childSelectedDrink]="selectedDrink"
      (doneClickedSender)="finishedEditing()"
    ></edit-drink>
    <button (click)="addDrinkDiv()" class="btn" *ngIf="!hideDrinkButton">Add a Drink</button>
    <div *ngIf="addADrink" id="addDrink">
      <new-drink
        (newDrinkSender)="addDrink($event)"
      ></new-drink>
    </div>
  </div>
  `
})

export class AppComponent {
  public masterDrinkList: Drink[] = [
    new Drink("latte", "grande", 12, "hazelnut", "2%", "coffee", "Starbucks", 10.50),
    new Drink("mocha", "grande", 2, "hazelnut", "2%", "coffee", "Starbucks", 4.50),
    new Drink("flat white", "venti", 4, "toffee nut", "whole", "coffee", "Starbucks", 6.50),
    new Drink("Caramel Macchiato", "tall", 3, "", "soy milk", "coffee", "Starbucks", 6.50),
    new Drink("Chai", "venti", 0, "caramel", "non-fat", "tea", "Starbucks", 4.50)
  ];

  addADrink = false;
  hideDrinkButton = false;
  addDrinkDiv() {
    this.addADrink = true;
    this.hideDrinkButton = true;
  }
  selectedDrink: Drink = null;
  showDetails(clickedDrink: Drink) {
    this.selectedDrink = clickedDrink;
  }
  finishedEditing() {
    this.selectedDrink = null;
  }
  addDrink(newDrinkFromChild: Drink) {
    this.masterDrinkList.push(newDrinkFromChild);
    this.hideDrinkButton = false;
    this.addADrink = false;
  }
}
