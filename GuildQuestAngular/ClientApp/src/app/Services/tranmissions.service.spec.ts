import { TestBed, inject } from '@angular/core/testing';

import { TranmissionsService } from './tranmissions.service';

describe('TranmissionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranmissionsService]
    });
  });

  it('should be created', inject([TranmissionsService], (service: TranmissionsService) => {
    expect(service).toBeTruthy();
  }));
});
