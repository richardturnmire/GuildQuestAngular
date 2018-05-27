import { Pipe, PipeTransform } from '@angular/core';
import { Vehicleviewmodel } from 'app/viewmodels/vehicleviewmodel';
import { Dollar } from 'app/models/dollar';

@Pipe( {
  name: 'pricefilter'
} )

export class PricefilterPipe implements PipeTransform
{

  transform( items: Vehicleviewmodel[], startprice?: Dollar, endprice?: Dollar )
  {
    if ( !items || ( !startprice && !endprice ) )
    {
      return items;
    }

    var startx: number = -1;
    var end: number = 10000000;

    if ( !startprice || startprice == undefined || startprice == null || startprice.amount == undefined )
    {
      startx = -1;
    } else
    {
      startx = startprice.amount;
    }

    if ( !endprice || endprice == undefined || endprice == null || endprice.amount == undefined )
    {
      end = 10000000;
    } else
    {
      end = endprice.amount;
    }

    return items.filter( item => ( item.salesPrice >= startx ) && ( item.salesPrice <= end ) );
  }
}
