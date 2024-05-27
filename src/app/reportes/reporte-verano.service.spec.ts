import { TestBed } from '@angular/core/testing';

import { ReporteVeranoService } from './reporte-verano.service';

describe('ReporteVeranoService', () => {
  let service: ReporteVeranoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReporteVeranoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
