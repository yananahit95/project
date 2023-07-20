import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersService } from 'src/users.service';

@Component({
  selector: 'app-signinform',
  templateUrl: './signinform.component.html',
  styleUrls: ['./signinform.component.css']
})
export class SigninformComponent {
    signinForm = new FormGroup({
    fullName: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(public userService: UsersService) {}
  findUser() {
    let user = this.signinForm.value;1
    let isUserFound = this.userService.findUser(user);
    if (isUserFound) {
      alert('Ok!');
    } else {
      alert('User not found!');
    }
    this.signinForm.reset();
  }
}
