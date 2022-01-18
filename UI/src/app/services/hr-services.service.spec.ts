import { TestBed } from '@angular/core/testing';

import { HrServicesService } from './hr-services.service';

describe('HrServicesService', () => {
  let service: HrServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
