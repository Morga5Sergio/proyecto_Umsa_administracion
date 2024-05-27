import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import { PersonalModule } from './personal/personal.module';
import { PagesModule } from './pages/pages.module';
import { ReporteVeranoComponent } from './reporte-verano/reporte-verano.component';
import { ReporteMensualComponent } from './reporte-mensual/reporte-mensual.component';
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import { ListaAdministracionComponent } from './administracion/lista-administracion/lista-administracion.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
//import pdfFonts from 'pdfmake/build/vfs_fonts';

@NgModule({
  declarations: [
    AppComponent,
    ReporteVeranoComponent,
    ReporteMensualComponent,
    ListaAdministracionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    PagesModule,
    PersonalModule,
    BrowserAnimationsModule,
    AuthModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatButtonModule,
    NgbModule,
    RouterModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }