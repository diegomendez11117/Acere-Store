import { TestBed } from '@angular/core/testing';

import { DashboardserviceService } from './dashboard.service';

describe('DashboardserviceService', () => {
  let service: DashboardserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
