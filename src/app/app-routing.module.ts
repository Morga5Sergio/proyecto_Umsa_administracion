import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { PagesComponent } from './pages/pages.component';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component: AuthComponent},
  {path: 'dashboard', component: PagesComponent,
  children:[
    {
      path: 'personal',
      loadChildren: () => import('./personal/personal.module').then(m => m.PersonalModule)
    },
    {
      path: 'personal',
      loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
