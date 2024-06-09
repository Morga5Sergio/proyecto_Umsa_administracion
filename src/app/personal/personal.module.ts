import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalRoutingModule } from './personal-routing.module';
import { PersonalRegistroComponent } from './personal-registro/personal-registro.component';
import { PersonalPerfilComponent } from './personal-perfil/personal-perfil.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { MatCard } from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';


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
    MatDatepickerModule,
    MatCardModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatListModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule
  ]
})
export class PersonalModule { }
