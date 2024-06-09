import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalPerfilComponent } from './personal-perfil.component';

describe('PersonalPerfilComponent', () => {
  let component: PersonalPerfilComponent;
  let fixture: ComponentFixture<PersonalPerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalPerfilComponent]
    });
    fixture = TestBed.createComponent(PersonalPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
