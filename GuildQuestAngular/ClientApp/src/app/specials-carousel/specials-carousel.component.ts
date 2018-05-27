import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { SpecialsService } from 'app/Services/specials.service';
import { Observable } from 'rxjs/Rx';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { Special } from 'app/Models/special.model';

@Component({
  selector: 'app-specials-carousel',
  templateUrl: './specials-carousel.component.html',
  styleUrls: ['./specials-carousel.component.scss'],
  styles: [`
    /deep/ .carousel-item.active {
      border: solid .8em;
      border-color: purple;
      background-color: lightblue;
    },
    /deep/ .carousel-indicators li {
      color: blue;
      background-color: green;
}
  `]
})

export class SpecialsCarouselComponent  {
  public specials;

  constructor(config: NgbCarouselConfig, private specService: SpecialsService) {
    // customize default values of carousels used by this component tree

    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    
  }

  ngOnInit() {
    this.getSpecials();
  }

  getSpecials() {
    this.specService.getSpecials().subscribe(
      data => { this.specials = data; },
      err => console.error(err),
      () => console.log('done loading specials')
    );
  }
}
