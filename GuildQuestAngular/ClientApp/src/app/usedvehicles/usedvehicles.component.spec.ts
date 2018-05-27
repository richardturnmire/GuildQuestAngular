import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedvehiclesComponent } from './usedvehicles.component';

describe('UsedvehiclesComponent', () => {
  let component: UsedvehiclesComponent;
  let fixture: ComponentFixture<UsedvehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsedvehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsedvehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
