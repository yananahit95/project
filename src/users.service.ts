import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  postRequest(data: any) {
    const url = 'http://localhost:3000/users/sign-up';
    return this.http.post(url, data)
  }

  getUser(user: any) {
    this.postRequest(user).subscribe(
      response => {
        console.log('Post request successful:', response);
      },
      error => {
        console.error('Error occurated', error)
      }
    )
  };

  getRequest() {
    return this.http.get('http://localhost:3000/users')
  };

  findUsers() {
    this.http.get('http://localhost:3000/users').subscribe((data: any) => {
      console.log(data)
    }, error => {
      console.error('Error', error)
    }
    )
  }
 }

