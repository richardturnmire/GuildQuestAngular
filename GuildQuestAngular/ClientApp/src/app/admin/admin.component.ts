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
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: []
} )

export class AdminComponent implements OnInit
{
  public vehicles: Vehicleviewmodel[] = [];

  model: Searchfields = new Searchfields();
  @ViewChild( 'myForm' ) form: any;

  currentPage: number = 1;
  pageSize: number = 5; // this.config.pageSize;

  beginYears: Year[];
  endYears: Year[];

  beginDollars: Dollar[];
  endDollars: Dollar[];

  filteredDollars: Dollar[];
  filteredYears: Year[];
  firstdollar: Dollar;
  firstyear: Year;


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
    this.setup.setup();

    this.spinner.show();
    this.getAvailableVehicles();

    this.beginYears = this.setup.beginYears;
    this.endYears = this.setup.endYears;
    this.beginDollars = this.setup.beginDollars;
    this.endDollars = this.setup.endDollars;

  }
  onSubmit()
  {
    this.form.reset();
  }

  getAvailableVehicles()
  {
    this.featService.getAllVehicles().subscribe(
      data =>
      {
        this.vehicles = data as Vehicleviewmodel[];
        //console.log( this.vehicles );
        this.spinner.hide();
      },
      err => console.error( err ),
      () => console.log( 'done loading available vehicles' )
    );
  }

  filterDollars( event: any )
  {
    this.firstdollar = this.beginDollars[event.target.selectedIndex - 1];
    this.filteredDollars = this.endDollars.filter( d => d.amount > this.firstdollar.amount );
  }

  filterYears( event: any )
  {
    this.firstyear = this.beginYears[event.target.selectedIndex - 1];
    this.filteredYears = this.endYears.filter( item => item.year > this.firstyear.year );
  }
}
