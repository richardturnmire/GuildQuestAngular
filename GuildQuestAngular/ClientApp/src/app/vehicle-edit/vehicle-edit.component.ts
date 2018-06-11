import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import
  {
  FormBuilder,
  FormGroup,
  FormControl,
  FormControlDirective
} from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';

import { VehiclesService } from 'app/Services/vehicles.service';
import { MiscService } from 'app/Services/misc.service';
import { SearchService } from 'app/Services/search.service';
import { Vehicleviewmodel } from 'app/viewmodels/vehicleviewmodel';

import { BodyStyle } from 'app/models/bodystyle';
import { ExteriorColor } from 'app/models/exteriorcolor';
import { InteriorColor } from 'app/models/interiorcolor';
import { Make } from 'app/models/make';
import { MakeModel } from 'app/models/makemodel';
import { TransmissionType } from 'app/models/transmissiontype';
import { Year } from 'app/models/year';
import { Globals } from 'app/Shared/globals';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.scss']
} )

export class VehicleEditComponent implements OnInit {

  myForm: FormGroup;
  vehicle: Vehicleviewmodel;
  makes: Make[];
  makemodels: MakeModel[];
  interiorcolors: InteriorColor[];
  exteriorcolors: ExteriorColor[];
  years: Year[];
  bodystyles: BodyStyle[];
  transmissions: TransmissionType[];
  id: string;
  closeResult: string;
  url: any;
  options: any;

  constructor( fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private featService: VehiclesService,
    private searchService: SearchService,
    private miscService: MiscService,
    private spinner: NgxSpinnerService,
    private modalService: NgbModal,
    private config: Globals) {
    this.spinner.show();
    this.searchService.setup();
    this.years = this.searchService.endYears;
    this.options = this.config.options;

    this.miscService.getData().subscribe(
      data => {
        this.bodystyles = data[0] as BodyStyle[];
        this.exteriorcolors = data[1] as ExteriorColor[];
        this.interiorcolors = data[2] as InteriorColor[];
        this.makes = data[3] as Make[];
        this.makemodels = data[4] as MakeModel[];
        this.transmissions = data[5] as TransmissionType[];
        //debugger;
      },
      err => {
        console.error(err);
        this.spinner.hide();
      },
      () => this.getVehicle()
    );

    this.myForm = fb.group({
      'make': '', 
      'model': '',
      'year': '',
      'viNumber': '',
      'bodystyle': '',
      'transmisison': '',
      'color': '',
      'interior': '',
      'msrp': '',
      'salesprice': '',
      'mileage': '',
      'sold': '',
      'featured': '',
      'description': ''
    }); 
   
   
  }

  ngOnInit() {
     
  }

  src( viNumber )
  {
    return this.config.imageLocation + viNumber + ".jpg";
  }

  onClick()
  {
    this.goBack();
  }
  getVehicle()
  {
    console.log( this.route );
    this.route.paramMap.subscribe( params =>
    {
      console.log( params.get( 'id' ) );
      this.id = params.get( 'id' );
    } );
    // const id = this.route.snapshot.paramMap.get('id');
    console.log( "looking for vehicle " + this.id );
    this.featService.getVehicle( this.id ).subscribe(
      data =>
      {
        this.vehicle = data[0] as Vehicleviewmodel;
        this.url = this.src(this.vehicle.viNumber);
        this.spinner.hide();
      },
      err => console.error( err ),
      () => console.log( 'done getting vehicle info' )
    );
  }

  
  

  goBack(): void
  {
    console.log( this.location );
    this.location.back();
  }
 
  onSubmit( value: string ): void
  {
    console.log( 'you submitted form: ', this.myForm.value );
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = reader.result;

      }
    }
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
