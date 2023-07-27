import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { SignupformComponent } from './signupform/signupform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupModalComponent } from './signup-modal/signup-modal.component';
import { AppHeaderModule } from '../app-header/app-header.module';



@NgModule({
  declarations: [
    SignupComponent,
    SignupformComponent,
    SignupModalComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppHeaderModule
  ], 
  exports: [
    SignupComponent
  ]
})
export class SignupModule { }

