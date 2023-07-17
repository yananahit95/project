import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { SignupformComponent } from './signupform/signupform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupModalComponent } from './signup-modal/signup-modal.component';
import { AppHeaderComponent } from '../app-header/app-header.component';



@NgModule({
  declarations: [
    SignupComponent,
    SignupformComponent,
    SignupModalComponent,
    AppHeaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ], 
  exports: [
    SignupComponent
  ]
})
export class SignupModule { }

