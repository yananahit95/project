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


  onSubmit() {
      this.userService.findUsers()
    }

  }

