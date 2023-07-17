import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { SigninformComponent } from './signinform/signinform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppHeaderComponent } from '../app-header/app-header.component';



@NgModule({
  declarations: [
    SigninComponent,
    SigninformComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
  ], 
  exports: [
    SigninComponent
  ]
})
export class SigninModule { }
