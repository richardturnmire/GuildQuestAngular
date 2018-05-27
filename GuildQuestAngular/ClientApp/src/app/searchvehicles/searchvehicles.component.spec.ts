import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchvehiclesComponent } from './searchvehicles.component';

describe('SearchvehiclesComponent', () => {
  let component: SearchvehiclesComponent;
  let fixture: ComponentFixture<SearchvehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchvehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchvehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
