import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list-modal',
  templateUrl: './user-list-modal.component.html',
  styleUrls: ['./user-list-modal.component.css']
})
export class UserListModalComponent {

  ages: number[] = [];
  constructor(private http:HttpClient) {
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
    },
  )
  addAges() {
    for (let i = 2023; i >= 1930; i--) {
      this.ages.push(i)
    }
  };
 }