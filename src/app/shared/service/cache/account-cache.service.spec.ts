import { TestBed, inject } from '@angular/core/testing';

import { AccountCacheService } from './account-cache.service';

describe('AccountCacheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountCacheService]
    });
  });

  it('should be created', inject([AccountCacheService], (service: AccountCacheService) => {
    expect(service).toBeTruthy();
  }));
});
