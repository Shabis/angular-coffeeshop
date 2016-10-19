import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Drink } from './drink.model';

@Component({
  selector: 'edit-drink',
  template: `
    <div *ngIf="childSelectedDrink">
      <h1>Edit Drink</h1>
      <div>
        <label>Enter Coffee/Tea Name:</label>
        <input [(ngModel)]="childSelectedDrink.name">
        <br>
        <label>Size:</label>
        <select [(ngModel)]="childSelectedDrink.size">
          <option value="tall">Tall</option>
          <option value="grande">Grande</option>
          <option value="venti">Venti</option>
        </select>
        <br>
        <label>Enter # of Shots:</label>
        <input [(ngModel)]="childSelectedDrink.shots" type="number" min="0" step="1" />
        <br>
        <label>Enter Coffee Flavor:</label>
        <input [(ngModel)]="childSelectedDrink.flavor" type="text">
        <br>
        <label>Milk:</label>
        <select [(ngModel)]="childSelectedDrink.milk">
          <option value="brevee">Brevee</option>
          <option value="whole" selected="selected">Whole</option>
          <option value="two">2%</option>
          <option value="nonfat">Non-fat</option>
          <option value="soy">Soy</option>
        </select>
        <br>
        <label>Type:</label>
        <select [(ngModel)]="childSelectedDrink.type">
          <option value="coffee" selected="selected">Coffee</option>
          <option value="tea">Tea</option>
        </select>
        <br>
        <label>Enter Compnay Name:</label>
        <input [(ngModel)]="childSelectedDrink.company" type="text">
        <br>
        <label>Enter Drink Price:</label>
        <input [(ngModel)]="childSelectedDrink.price" type="number" step=".01" min="0"/>
        <br>
        <button class="btn btn-success" (click)="doneClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditDrinkComponent {
  @Input() childSelectedDrink: Drink;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
