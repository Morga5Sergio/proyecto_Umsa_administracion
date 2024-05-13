import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteVeranoComponent } from './reporte-verano.component';

describe('ReporteVeranoComponent', () => {
  let component: ReporteVeranoComponent;
  let fixture: ComponentFixture<ReporteVeranoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReporteVeranoComponent]
    });
    fixture = TestBed.createComponent(ReporteVeranoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
