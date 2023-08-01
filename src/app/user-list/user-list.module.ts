import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListModalComponent } from './user-list-modal/user-list-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserListHeaderModule } from './user-list-header/user-list-header.module';
import { Router, RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    UserListModalComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserListHeaderModule,
    RouterModule
  ],
  exports: [
    UserListModalComponent
  ]
})
export class UserListModule { }
