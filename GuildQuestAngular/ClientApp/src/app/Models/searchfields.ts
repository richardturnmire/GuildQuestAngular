import { Dollar } from 'app/models/dollar';
import { Year } from 'app/models/year';

export class Searchfields
{
  constructor(public searchMakeModel: string = '',
              public searchBeginDollar: Dollar = null,
              public searchEndDollar: Dollar = null,
              public searchBeginYear: Year = null,
              public searchEndYear: Year = null ) {
}

}
