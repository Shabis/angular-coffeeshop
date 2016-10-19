import { Component, Output, EventEmitter } from '@angular/core';
import { Drink } from './drink.model';

@Component({
  selector: 'new-drink',
  template: `
  <h1>Add a Drink</h1>
  <div>
    <label>Enter Coffee/Tea Name:</label>
    <input #newName type="text">
    <br>
    <label>Size:</label>
    <select #newSize>
      <option value="tall">Tall</option>
      <option value="grande">Grande</option>
      <option value="venti" selected="selected">Venti</option>
    </select>
    <br>
    <label>Enter # of Shots:</label>
    <input #newShots type="number">
    <br>
    <label>Enter Coffee Flavor:</label>
    <input #newFlavor type="text">
    <br>
    <label>Milk:</label>
    <select #newMilk>
      <option value="brevee">Brevee</option>
      <option value="whole" selected="selected">Whole</option>
      <option value="two">2%</option>
      <option value="nonfat">Non-fat</option>
      <option value="soy">Soy</option>
    </select>
    <br>
    <label>Type:</label>
    <select #newType>
      <option value="coffee" selected="selected">Coffee</option>
      <option value="tea">Tea</option>
    </select>
    <br>
    <label>Enter Compnay Name:</label>
    <input #newCompany type="text">
    <br>
    <label>Enter Drink Price:</label>
    <input #newPrice type="number" step=".01" min="0"/>
    <br>
    <button class="btn btn-success" (click)="addClicked(newName.value, newSize.value, newShots.value, newFlavor.value, newMilk.value, newType.value, newCompany.value, newPrice.value);
    newName.value='';
    ">Add Drink</button>
  </div>
  `
})
//Fix this....
export class NewDrinkComponent {
  @Output() newDrinkSender = new EventEmitter();
  addClicked(name: string, size: string, shots: number, flavor: string, milk: string, type: string, company: string, price: number) {
    var newDrinkToAdd: Drink = new Drink(name, size, shots, flavor, milk, type, company, price);
    this.newDrinkSender.emit(newDrinkToAdd);
  }
}
