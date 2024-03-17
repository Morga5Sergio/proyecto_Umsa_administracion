import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalPerfilComponent } from './personal-perfil/personal-perfil.component';
import { PersonalRegistroComponent } from './personal-registro/personal-registro.component';
import { PersonalRoutingModule } from './personal-routing.module';



@NgModule({
  declarations: [
    PersonalPerfilComponent,
    PersonalRegistroComponent
  ],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    
  ]
})
export class PersonalModule { }
