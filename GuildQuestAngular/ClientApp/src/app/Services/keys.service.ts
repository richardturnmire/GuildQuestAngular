import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Globals } from '../Shared/globals';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class KeysService {
  
  headers: Headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getKeys() {
    return this.http.get('api/Misc');
  }
} 
