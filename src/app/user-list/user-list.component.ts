import { Component } from '@angular/core';
import { UsersService } from 'src/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  constructor(public userService: UsersService) {
    this.submitBtn()
  } 

  submitBtn() {
    this.userService.findUsers();
  }
}
