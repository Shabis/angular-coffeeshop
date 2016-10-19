import { Pipe, PipeTransform } from '@angular/core';
import { Drink } from './drink.model';

@Pipe({
  name: "price",
  pure: false
})

export class PricePipe implements PipeTransform {
  transform(input: Drink[], priceLevel) {
    var output: Drink[] = [];
    if (priceLevel >= 5) {
      for (var i = 0; i < input.length; i++) {
        if (input[i].price >= 4) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (priceLevel < 5) {
      for (var i = 0; i < input.length; i++) {
        if (input[i].price < 5) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
