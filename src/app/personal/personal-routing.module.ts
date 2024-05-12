import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalPerfilComponent } from './personal-perfil/personal-perfil.component';




const routes: Routes = [
  {path: 'personal', component: PersonalPerfilComponent},
  {path: 'personal-perfil', component: PersonalPerfilComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
