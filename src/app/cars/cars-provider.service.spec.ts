import { TestBed } from '@angular/core/testing';

import { CarsProviderService } from './cars-provider.service';

describe('CarsProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarsProviderService = TestBed.get(CarsProviderService);
    expect(service).toBeTruthy();
  });
});
