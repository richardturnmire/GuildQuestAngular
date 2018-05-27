import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedvehiclesComponent } from './featuredvehicles.component';

describe('FeaturedvehiclesComponent', () => {
  let component: FeaturedvehiclesComponent;
  let fixture: ComponentFixture<FeaturedvehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedvehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedvehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
