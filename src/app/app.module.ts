import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SignupModule } from './signup/signup.module';
import { SigninModule } from './signin/signin.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserListModule } from './user-list/user-list.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserListHeaderModule } from './user-list/user-list-header/user-list-header.module';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    SignupModule,
    SigninModule,
    AppRoutingModule,
    HttpClientModule,
    UserListModule,
    UserListHeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
