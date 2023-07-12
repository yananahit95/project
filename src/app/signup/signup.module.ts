import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { SignupformComponent } from './signupform/signupform.component';
import { SignupheaderComponent } from './signupheader/signupheader.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupModalComponent } from './signup-modal/signup-modal.component';



@NgModule({
  declarations: [
    SignupComponent,
    SignupformComponent,
    SignupheaderComponent,
    SignupModalComponent,
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

