import { Component, OnInit } from '@angular/core';
import { SpecialsService } from 'app/Services/specials.service';
import { Observable } from 'rxjs/Rx';
import { Special } from 'app/Models/special.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.scss']
})
export class SpecialsComponent implements OnInit {
  public specials;

  constructor(
    private specService: SpecialsService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.getSpecials();

  }

  getSpecials() {
    this.specService.getSpecials().subscribe(
      data => { this.specials = data;
      this.spinner.hide();
      },
      err => console.error(err),
      () => console.log('done loading specials')
    );
  }
}
