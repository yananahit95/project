import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { SignupformComponent } from './signupform/signupform.component';
import { SignupheaderComponent } from './signupheader/signupheader.component';



@NgModule({
  declarations: [
    SignupComponent,
    SignupformComponent,
    SignupheaderComponent,
  ],
  imports: [
    CommonModule
  ], exports: [
    SignupComponent
  ]
})
export class SignupModule { }
