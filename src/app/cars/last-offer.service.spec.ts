import { TestBed } from '@angular/core/testing';

import { LastOfferService } from './last-offer.service';

describe('LastOfferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LastOfferService = TestBed.get(LastOfferService);
    expect(service).toBeTruthy();
  });
});
