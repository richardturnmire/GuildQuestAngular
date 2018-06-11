import { Pipe, PipeTransform } from '@angular/core';
import { MakeModel } from 'app/models/makemodel';

@Pipe({
  name: 'modelfilter'
})
export class ModelPipe implements PipeTransform {

  transform(items: MakeModel[], filter: number): any {
    if (!items || !filter) {
      return items;
    }

    return items.filter(item => item.makeID === filter);

  }

}

