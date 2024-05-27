import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';

import { PersonalPerfilComponent } from './personal/personal-perfil/personal-perfil.component';
import { PagesComponent } from './pages/pages.component';
import { PersonalRegistroComponent } from './personal/personal-registro/personal-registro.component';

import { ListaAdministracionComponent } from './administracion/lista-administracion/lista-administracion.component';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component: AuthComponent},
  {path: 'dashboard', component: PagesComponent,
  children:[
    {
      path: 'personal', loadChildren: () => import('./personal/personal.module').then(m => m.PersonalModule)
    },
    {
      path: 'reporte', 
      loadChildren: () => import('./reportes/reporte-routing.module').then(m => m.ReporteRoutingModule)
    },
    {
      path: 'administracion-lista', component: ListaAdministracionComponent , 
    },
    {
      path: 'personal-perfil', component: PersonalPerfilComponent ,
    },
    {
      path: 'personal-registro', component: PersonalRegistroComponent ,
    },
    
  /*   {
      path: 'personal',
      loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
    } */
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
