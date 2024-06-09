import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalPerfilComponent } from './personal-perfil/personal-perfil.component';
import { ListaAdministracionComponent } from '../administracion/lista-administracion/lista-administracion.component';


const routes: Routes = [
  {path: 'personal', component: ListaAdministracionComponent},
  {path: 'personal-perfil', component: PersonalPerfilComponent},
  {path: 'administracion-perfil', component: ListaAdministracionComponent},
];

/* {path: 'personal-perfil', component: PersonalPerfilComponent}, */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
