import { TestBed, inject } from '@angular/core/testing';

import { CustomLazyMapsAPILoader } from './custom-lazy-apikey-loader.service';
// temp
describe('CustomLazyMapsAPILoader', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomLazyMapsAPILoader]
    });
  });

  it('should be created', inject([CustomLazyMapsAPILoader], (service: CustomLazyMapsAPILoader) => {
    expect(service).toBeTruthy();
  }));
});
