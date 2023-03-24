import { TestBed } from '@angular/core/testing';

import { ApisaleService } from './apisale.service';

describe('ApisaleService', () => {
  let service: ApisaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApisaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
