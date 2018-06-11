import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Special } from '../Models/special.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SpecialsService {
  
  headers: Headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getSpecials() {
    return this.http.get('api/Specials');
     
  }
}
