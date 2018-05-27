import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Featured } from 'app/Models/featured.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class VehiclesService {
 
  headers: Headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getFeatured() {
    return this.http.get('api/Vehicles/Featured');
  }
  getVehicles() {
    return this.http.get('api/Vehicles');
  }
  getAllVehicles()
  {
    return this.http.get('api/Vehicles/All');
  }
  getNewVehicles() {
    return this.http.get('api/Vehicles/New');
  }
  getUsedVehicles() {
    return this.http.get('api/Vehicles/Used');
  }
  getVehicle(vehicleId: string)
  {
    return this.http.get('api/Vehicles/Detail/' + vehicleId);
  }
}

