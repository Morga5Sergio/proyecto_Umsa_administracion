import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAdministracionComponent } from './lista-administracion.component';

describe('ListaAdministracionComponent', () => {
  let component: ListaAdministracionComponent;
  let fixture: ComponentFixture<ListaAdministracionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaAdministracionComponent]
    });
    fixture = TestBed.createComponent(ListaAdministracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
