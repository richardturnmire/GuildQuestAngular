import { Pipe, PipeTransform } from '@angular/core';
import { Vehicleviewmodel } from 'app/viewmodels/vehicleviewmodel';

@Pipe({
  name: 'vehiclefilter'
} )

export class VehiclefilterPipe implements PipeTransform {
 
  transform( items: Vehicleviewmodel[], filter: string ): any {
    if ( !items || !filter ) {
      return items;
    }
   
    return items.filter(item => item.yearMakeModel.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }
}
