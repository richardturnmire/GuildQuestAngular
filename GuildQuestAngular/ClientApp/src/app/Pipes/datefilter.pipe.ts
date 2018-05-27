import { Pipe, PipeTransform } from '@angular/core';
import { Vehicleviewmodel } from 'app/viewmodels/vehicleviewmodel';
import { Year } from 'app/Models/year';

@Pipe({
  name: 'datefilter'
} )

export class DatefilterPipe implements PipeTransform {

  transform( items: Vehicleviewmodel[], startyear?: Year, endyear?: Year ) {
   
    if ( !items || ( !startyear && !endyear ) )
    {
      return items;
    }

    var startx: number = 1900;
    var end: number = 9999;

    if (!startyear || startyear == undefined || startyear == null || startyear.year == undefined) {
      startx = 1990;
    } else {
      startx = startyear.year;
    }

    if (!endyear || endyear == undefined || endyear == null || endyear.year == undefined) {
      end = 9999;
    } else {
      end = endyear.year;
    }
   
    return items.filter( item => item.year >= startx && item.year <= end );
  }
}
