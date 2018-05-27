import { Component, OnInit } from '@angular/core';
import { Special } from '../Models/special.model';

@Component({
  selector: 'app-home',
  template: `
<app-specials-carousel></app-specials-carousel>
<app-featuredvehicles></app-featuredvehicles>
  `
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
