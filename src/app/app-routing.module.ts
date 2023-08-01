import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; 
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  { path: '', component: SignupComponent},
  { path: 'sign-up', component: SignupComponent},
  { path: 'sign-in', component: SigninComponent},
  { path: 'user-list', component: UserListComponent}
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
