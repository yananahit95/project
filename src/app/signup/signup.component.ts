import { Component } from '@angular/core';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  fullName: string = '';

  getFullName(fullName: any) {
    this.fullName = fullName;
    console.log(fullName, 3333)
  }
}
