import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  postRequest(data: any) {
    const url = 'http://localhost:3000/users/sign-up'; 
    return this.http.post(url, data);
  }
}

// saveUser(user: any) {
//   sessionStorage.setItem('userArrayValues', JSON.stringify(this.users));
// }
// findUser(user: any): boolean {
//   let storedUsers = JSON.parse(sessionStorage.getItem('userArrayValues') || '[]');
//   return storedUsers.some((storedUser: any) => storedUser.fullName === user.fullName && storedUser.password === user.password);
// }
