import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReporteRoutingModule } from './reporte-routing.module';
import { ReporteVeranoComponent } from './reporte-verano/reporte-verano.component';
import { ReporteMensualComponent } from './reporte-mensual/reporte-mensual.component';

import { PdfMakeWrapper } from 'pdfmake-wrapper';

//import pdfFonts from 'pdfmake/build/vfs_fonts';
import { MatNativeDateModule } from '@angular/material/core';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';

//import { MatCard } from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AuthService } from '../auth/auth.service';
import { AppComponent } from '../app.component';
import { ReporteVeranoService } from './reporte-verano.service';

@NgModule({
  declarations: [
    ReporteVeranoComponent,
    ReporteMensualComponent
  ],
  imports: [
    CommonModule,
    ReporteRoutingModule,
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
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    RouterModule
  ],
  providers:[ReporteVeranoService],
  bootstrap: [AppComponent]
})
export class ReporteModule { }
