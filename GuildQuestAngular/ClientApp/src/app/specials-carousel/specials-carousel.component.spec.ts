import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialsCarouselComponent } from './specials-carousel.component';

describe('SpecialsCarouselComponent', () => {
  let component: SpecialsCarouselComponent;
  let fixture: ComponentFixture<SpecialsCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialsCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
