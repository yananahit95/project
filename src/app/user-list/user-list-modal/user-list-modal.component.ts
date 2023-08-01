import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-list-modal',
  templateUrl: './user-list-modal.component.html',
  styleUrls: ['./user-list-modal.component.css']
})
export class UserListModalComponent {
  ages: number[] = [];
  @Output() formDataEmitter = new EventEmitter<any>();

  constructor() {
    this.addAges();
  }

  formListForm = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    age: new FormControl('', [
      Validators.required,
    ]),
    profession: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  addAges() {
    for (let i = 99; i >= 1; i--) {
      this.ages.push(i)
    }
  }

  submitForm() {
    if (this.formListForm.valid) {
      this.formDataEmitter.emit(this.formListForm.value);
      this.formListForm.reset();
    }
  }
}
