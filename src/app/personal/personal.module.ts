import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalRoutingModule } from './personal-routing.module';
import { PersonalRegistroComponent } from './personal-registro/personal-registro.component';
import { PersonalPerfilComponent } from './personal-perfil/personal-perfil.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';



@NgModule({
  declarations: [
    PersonalPerfilComponent,
    PersonalRegistroComponent
  ],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    MatFormFieldModule, 
    MatInputModule,
    MatNativeDateModule, 
    MatDatepickerModule
   
  ]
})
export class PersonalModule { }
