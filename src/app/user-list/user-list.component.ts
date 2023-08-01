import { Component, Input } from '@angular/core';
import { UsersService } from 'src/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Input() signUpPage: { name: string; routL: string } = { name: '', routL: '' };

  constructor(public userService: UsersService, private router: Router) {}

  students: any[] = [];

  onFormSubmit(formData: any) {
    this.students.push(formData);
  }

  submitBtn() {
    this.router.navigate(['/sign-in']);
    this.router.navigate([], {
      queryParams: { showModal: 'true' },
      queryParamsHandling: 'merge',
    });
  }
}
