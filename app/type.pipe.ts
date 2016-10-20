import { Pipe, PipeTransform } from '@angular/core';
import { Drink } from './drink.model';

@Pipe({
  name: "type",
  pure: false
})

export class TypePipe implements PipeTransform {
  transform(input: Drink[], drinkType) {
    var output: Drink[] = [];
    if (drinkType === "tea") {
      for (var i = 0; i < input.length; i++) {
        if(input[i].type === "tea") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (drinkType === "coffee") {
      for (var i = 0; i < input.length; i++) {
        if(input[i].type === "coffee") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input
    }
  }
}
