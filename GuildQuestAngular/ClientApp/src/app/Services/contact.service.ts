import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';

import { Router, ActivatedRoute } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  constructor(private _http: HttpClient) {
    

  }

  getContacts() {
    return this._http.get('api/Contact/Index')
      .pipe(map((response: Response) => response.json()), catchError(this.errorHandler));
  }

  getContactById(id: number) {
    return this._http.get("api/Contact/Details/" + id)
      .pipe(map((response: Response) => response.json()), catchError(this.errorHandler));
  }

  saveContact(contact) {
    return this._http.post('api/Misc/Contact/Create', contact)
      .pipe(map((response: Response) => response.json()), catchError(this.errorHandler));
  }

  updateContact(contact) {
    return this._http.put('api/Contact/Edit', contact)
      .pipe(map((response: Response) => response.json()), catchError(this.errorHandler));
  }

  deleteContact(id) {
    return this._http.delete("api/Contact/Delete/" + id)
      .pipe(map((response: Response) => response.json()), catchError(this.errorHandler));
  }

  errorHandler(error: Response) {
    console.log(error);
    return throwError(error);
  }
}
