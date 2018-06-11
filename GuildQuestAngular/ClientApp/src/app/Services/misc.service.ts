import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable,forkJoin } from 'rxjs';

import { Globals } from '../Shared/globals';
import { BodyStyle } from 'app/models/bodystyle';
import { ExteriorColor } from 'app/models/exteriorcolor';
import { InteriorColor } from 'app/models/interiorcolor';
import { Make } from 'app/models/make';
import { MakeModel } from 'app/models/makemodel';
import { TransmissionType } from 'app/models/transmissiontype';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MiscService {
  apiBase: string = 'api/Misc';
  headers: Headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getData() {
    return forkJoin(
      this.http.get(this.apiBase + '/BodyStyles'),
      this.http.get(this.apiBase + '/ExteriorColors'),
      this.http.get(this.apiBase + '/InteriorColors'),
      this.http.get(this.apiBase + '/Makes'),
      this.http.get(this.apiBase + '/MakeModels'),
      this.http.get(this.apiBase + '/Transmissions')
    );
  }
  getKeys() {
    return this.http.get(this.apiBase);
  }
  
} 
