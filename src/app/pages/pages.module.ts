import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';

// material 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { AuthModule } from '../auth/auth.module';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';





@NgModule({
  declarations: [
    PagesComponent,
    
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatButtonModule,
    AuthModule,
    RouterModule,
    MatTableModule
  ]
})
export class PagesModule { }
