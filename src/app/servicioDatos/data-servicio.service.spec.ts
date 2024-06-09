import { TestBed } from '@angular/core/testing';

import { DataServicioService } from './data-servicio.service';

describe('DataServicioService', () => {
  let service: DataServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
