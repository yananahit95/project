import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/users.service';

@Component({
  selector: 'app-signinform',
  templateUrl: './signinform.component.html',
  styleUrls: ['./signinform.component.css']
})
export class SigninformComponent {
  signinForm = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20)
    ]),
  });

  constructor(private userService: UsersService) {}
  signInPost(data: any){
    this.userService.sendSignInData(data).subscribe()
  }

  onSubmit() {
    if (this.signinForm.valid) {
      let signInValue = this.signinForm.value;
      this.userService.sendSignInData(signInValue);
      this.userService.signInUser(signInValue);
      this.signInPost(signInValue)
      this.signinForm.reset();
   }
  }
}