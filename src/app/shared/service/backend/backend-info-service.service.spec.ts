import { TestBed, inject } from '@angular/core/testing';

import { BackendInfoServiceService } from './backend-info-service.service';

describe('BackendInfoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackendInfoServiceService]
    });
  });

  it('should be created', inject([BackendInfoServiceService], (service: BackendInfoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
