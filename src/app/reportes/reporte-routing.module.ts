import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReporteVeranoComponent } from './reporte-verano/reporte-verano.component';
import { ReporteMensualComponent } from './reporte-mensual/reporte-mensual.component';

const routes: Routes = [
  {path: 'reporte-verano', component: ReporteVeranoComponent},
  {path: 'reporte-mensual', component: ReporteMensualComponent},
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReporteRoutingModule { }
