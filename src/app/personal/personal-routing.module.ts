import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalPerfilComponent } from './personal-perfil/personal-perfil.component';
import { PersonalRegistroComponent } from './personal-registro/personal-registro.component';

const routes: Routes = [
  {path: 'personal', component: PersonalPerfilComponent},
  {path: 'personalesreg', component: PersonalRegistroComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
