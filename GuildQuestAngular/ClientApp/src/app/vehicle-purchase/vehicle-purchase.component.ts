import { Component, OnInit } from '@angular/core';
import { Globals } from 'app/Shared/globals';
@Component({
  selector: 'app-vehicle-purchase',
  templateUrl: './vehicle-purchase.component.html',
  styleUrls: ['./vehicle-purchase.component.scss']
})
export class VehiclePurchaseComponent implements OnInit {

  constructor(
    private config: Globals) { }

  ngOnInit() {
  }

  src( viNumber )
  {
    return this.config.imageLocation + viNumber + ".jpg";
  }

}
