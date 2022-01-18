import { TestBed } from '@angular/core/testing';

import { ManagerEmpListService } from './manager-emp-list.service';

describe('ManagerEmpListService', () => {
  let service: ManagerEmpListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerEmpListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
