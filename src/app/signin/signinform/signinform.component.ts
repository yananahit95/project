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
  constructor(public US: UsersService){
   }

  //  findUser() {
  //   if(this.US.user.get(['password'])?.value === this.signinForm.get(['password'])?.value && this.US.user.get(['fullName'])?.value === this.signinForm.get(['fullName'])?.value) {
  //     alert('ok');
  //   }
  //  }
  findUser() {
    let matched = false;
    this.US.user.forEach((person: any) => {
      if (
        person.get(['fullName'])?.value === this.signinForm.get(['fullName'])?.value &&
        person.get(['password'])?.value === this.signinForm.get(['password'])?.value
      ) {
        matched = true;
        return;
      }
    });

    if(matched) {
      alert('Ok');
    } else {
      alert('Invalid Full Name or Password');
    };

    this.signinForm.reset();
  }
}
