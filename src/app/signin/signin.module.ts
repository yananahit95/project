import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { SigninformComponent } from './signinform/signinform.component';
import { SigninheaderComponent } from './signinheader/signinheader.component';



@NgModule({
  declarations: [
    SigninComponent,
    SigninformComponent,
    SigninheaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SigninComponent
  ]
})
export class SigninModule { }
