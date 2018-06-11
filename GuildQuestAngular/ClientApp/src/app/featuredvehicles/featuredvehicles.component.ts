import
{
  Component,
  OnInit,
  Input,
  ViewChild
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

import
{
  NgbCarousel

} from '@ng-bootstrap/ng-bootstrap';
import { VehiclesService } from 'app/Services/vehicles.service';
import { Vehicleviewmodel } from 'app/viewmodels/vehicleviewmodel';
import { NgxSpinnerService } from 'ngx-spinner';
import { SearchService } from 'app/Services/search.service';
import * as _ from 'lodash';
import { Year } from 'app/Models/year';
import { Dollar } from 'app/Models/dollar';
import { Searchfields } from 'app/Models/searchfields';
import { Globals } from 'app/Shared/globals';

@Component( {
  selector: 'app-featuredvehicles',
  templateUrl: './featuredvehicles.component.html',
  styleUrls: ['./featuredvehicles.component.scss'],
  providers: []
} )

export class FeaturedvehiclesComponent implements OnInit
{
  public featured: Vehicleviewmodel[] = [];

  constructor(
    private featService: VehiclesService,
    private spinner: NgxSpinnerService,
    private setup: SearchService,
    private config: Globals

  ) { }

  src( viNumber )
  {
    return this.config.imageLocation + viNumber + ".jpg";
  }

  ngOnInit()
  {
    this.spinner.show();
    this.getFeaturedVehicles();
  }
 
  getFeaturedVehicles()
  {
    this.featService.getFeatured().subscribe(
      data =>
      {
        this.featured = data as Vehicleviewmodel[];
        //console.log( this.featured );
        this.spinner.hide();
      },
      err => console.error( err ),
      () => console.log( 'done loading used vehicles' )
    );
  }
}
