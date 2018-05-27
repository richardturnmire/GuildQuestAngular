import { Component, OnInit } from '@angular/core';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';
//import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import { Observable } from 'rxjs/Rx';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Globals } from 'app/Shared/globals';

@Component({
  selector: 'app-root',
  styleUrls: ['./main.component.scss'],
  templateUrl:  './main.component.html' 
})

export class AppComponent implements OnInit {
  navbarCollapsed = true;
  private keys: Observable<string[]>;

  constructor(private globals: Globals) {
  }
  //title = 'app';
  //faCoffee = faCoffee;
  //faTwitter = faTwitter;

  ngOnInit() {
    
  }

  //getKeys() {
  //  this.keyServ.getKeys().subscribe(
  //    data => {
  //      this.keys = <Observable<string[]>>(data);
  //     // this.globals.googleMapKey = this.keys[0];
  //    },
  //    err => console.error(err),
  //    () => console.log('done loading keys')
  //  );
  //}
}
