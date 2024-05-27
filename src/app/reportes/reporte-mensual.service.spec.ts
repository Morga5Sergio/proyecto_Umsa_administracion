import { TestBed } from '@angular/core/testing';

import { ReporteMensualService } from './reporte-mensual.service';

describe('ReporteMensualService', () => {
  let service: ReporteMensualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReporteMensualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
