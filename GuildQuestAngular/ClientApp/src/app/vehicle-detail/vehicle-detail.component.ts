import { Component, OnInit, Input } from '@angular/core';
import { Vehicleviewmodel } from 'app/viewmodels/vehicleviewmodel';
import { VehiclesService } from 'app/Services/vehicles.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vehicledetail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss']
})
export class VehicleDetailComponent implements OnInit {
 feature: Vehicleviewmodel;
  id: string;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private featService: VehiclesService,
    private spinner: NgxSpinnerService
  )
  {
    this.spinner.show();
    this.getVehicle();
  }
  
  ngOnInit()
  {
    
  }
  ngOnDestroy()
  {
    
  }

  onClick() {
    this.goBack();
  }
  getVehicle() {
    console.log(this.route);
    this.route.paramMap.subscribe(params =>
    {
      console.log(params.get('id'));
      this.id = params.get('id');
    });
    // const id = this.route.snapshot.paramMap.get('id');
    console.log("looking for vehicle " + this.id);
    this.featService.getVehicle(this.id).subscribe(
      data => {
        console.log('Returned data');
        console.log(data);
        this.feature = data[0] as Vehicleviewmodel;
        this.spinner.hide();
      },
      err => console.error(err),
      () => console.log('done getting vehicle info')
    );
  }

  goBack(): void {
    console.log(this.location);
    this.location.back();
  }
}
