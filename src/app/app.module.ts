import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SignupModule } from './signup/signup.module';
import { SigninModule } from './signin/signin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppHeaderModule } from './app-header/app-header.module';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    SignupModule,
    SigninModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
