import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; 
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [
  { path: '', component: SigninComponent},
  { path: 'sign-up', component: SignupComponent},
  { path: 'sign-in', component: SigninComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)],
  ], 
  exports: [RouterModule],
})
export class AppRoutingModule { }
