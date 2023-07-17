import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: any =[]
  
  

  constructor() { 
    if(sessionStorage.getItem('user')) {
          this.user= sessionStorage.getItem('user')
}
}
}
