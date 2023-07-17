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
    ] ),
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

  constructor(public US: UsersService) {
    this.addAges();
  }

  addAges() {
    for (let i = 2023; i >= 1930; i--) {
      this.ages.push(i);
    }
  }

  passControl(): any {
    if (this.signupForm.get(['password'])?.value !== '' && this.signupForm.valid) {
      return this.signupForm.get(['password'])?.value === this.signupForm.get(['confirmPassword'])?.value;
    }
  }

  isPasswordMismatch: boolean = false;

  checkPasswordMatch() {
    const password = this.signupForm.get('password')?.value;
    const confirmPassword = this.signupForm.get('confirmPassword')?.value;
    this.isPasswordMismatch = password !== confirmPassword;
  }
  isSelectClicked = false;
  selectedValue = '';

  hideLabel(): void {
    this.isSelectClicked = true;
  }

  showLabel(): void {
    this.isSelectClicked = false;
  }

  hasSelectedValue(): boolean {
    return this.selectedValue !== '';
  }

  hasOptionSelected(): boolean {
    return this.selectedValue !== '' && this.selectedValue !== null && this.selectedValue !== undefined;
  }

  onSave() {
    const formValues = this.signupForm.value;
    this.US.user.push(formValues);
    sessionStorage.setItem('userArrayValues', JSON.stringify(this.US.user));
    this.successEvent.emit(this.signupForm.get('fullName')?.value);
    this.signupForm.reset();
  }
}
