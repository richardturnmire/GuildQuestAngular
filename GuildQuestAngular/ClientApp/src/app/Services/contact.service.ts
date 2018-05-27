import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  constructor(private _http: HttpClient) {
    

  }

  getContacts() {
    return this._http.get('api/Contact/Index')
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  getContactById(id: number) {
    return this._http.get("api/Contact/Details/" + id)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  saveContact(contact) {
    return this._http.post('api/Misc/Contact/Create', contact)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  updateContact(contact) {
    return this._http.put('api/Contact/Edit', contact)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  deleteContact(id) {
    return this._http.delete("api/Contact/Delete/" + id)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }
}
