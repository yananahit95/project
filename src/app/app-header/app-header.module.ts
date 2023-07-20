import { NgModule } from '@angular/core';
import { CommonModule,  } from '@angular/common';
import { AppHeaderComponent } from './app-header.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AppHeaderComponent
  ]
})
export class AppHeaderModule {

 }
