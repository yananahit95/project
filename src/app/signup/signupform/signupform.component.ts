import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/users.service';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent {
  @Output() successEvent = new EventEmitter<any>();
  ages: number[] = [];
  signupForm = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    theAge: new FormControl('', [
      Validators.required,
    ]),
    profession: new FormControl('', [
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20)
    ]),
  });

  constructor(public userService: UsersService) {
    this.addAges();
  }

  addAges() {
    for (let i = 99; i >= 1; i--) {
      this.ages.push(i);
    }
  }
  isPasswordMismatch: boolean = false;
    checkPasswordMatch(): any {
      const password = this.signupForm.get('password')?.value;
      const confirmPassword = this.signupForm.get('confirmPassword')?.value;
      this.isPasswordMismatch = password !== confirmPassword;
    }

  onSave() {
    if (this.signupForm.valid) {
      const formData = this.signupForm.value;
      this.userService.signUpUser(formData)
   }
   this.successEvent.emit(this.signupForm.get('fullName')?.value);
   this.signupForm.reset();
  };
}