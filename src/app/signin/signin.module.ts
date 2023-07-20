import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { SigninformComponent } from './signinform/signinform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppHeaderModule } from '../app-header/app-header.module';


@NgModule({
  declarations: [
    SigninComponent,
    SigninformComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppHeaderModule
  ], 
  exports: [
    SigninComponent
  ]
})
export class SigninModule { }
