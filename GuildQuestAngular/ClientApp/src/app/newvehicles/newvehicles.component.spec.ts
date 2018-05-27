import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewvehiclesComponent } from './newvehicles.component';

describe('NewvehiclesComponent', () => {
  let component: NewvehiclesComponent;
  let fixture: ComponentFixture<NewvehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewvehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewvehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
