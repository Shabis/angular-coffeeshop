import { Component } from '@angular/core';
import { Drink } from './drink.model';

@Component ({
  selector: 'my-coffee-shop',
  template: `
  <div class="container">
    <h1>Coffee Shop</h1>
    <h3 (click)="doStuff(currentDrink)" *ngFor="let currentDrink of drinks">{{ currentDrink.name }} {{ "Price: $" + currentDrink.price.toFixed(2)}}</h3>
  </div>
  `
})

export class AppComponent {
  public drinks: Drink[] = [
    new Drink("latte", "grande", 12, "hazelnut", "2%", "coffee", "Starbucks", 10.50),
    new Drink("mocha", "grande", 2, "hazelnut", "2%", "coffee", "Starbucks", 4.50),
    new Drink("flat white", "venti", 4, "toffee nut", "whole", "coffee", "Starbucks", 6.50),
    new Drink("Caramel Macchiato", "tall", 3, "", "soy milk", "coffee", "Starbucks", 6.50),
    new Drink("Caramel Macchiato", "tall", 3, "", "soy milk", "coffee", "Starbucks", 6.50)
  ];
}
