// user.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private registeredUser: any = null;

  constructor() { }

  setRegisteredUser(user: any) {
    this.registeredUser = user;
  }

  getRegisteredUser() {
    return this.registeredUser;
  }
}

