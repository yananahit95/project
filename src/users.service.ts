// users.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: any[] = [];

  constructor() {}

  saveUser(user: any) {
    this.users.push(user);
    sessionStorage.setItem('userArrayValues', JSON.stringify(this.users));
  }

  findUser(user: any): boolean {
    let storedUsers = JSON.parse(sessionStorage.getItem('userArrayValues') || '[]');
    return storedUsers.some((storedUser: any) => storedUser.fullName === user.fullName && storedUser.password === user.password);
  }
}
