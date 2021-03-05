import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {

  currentUser: IUser;
  constructor() { }
  loginUser(userName: string, password: string) {
    this.currentUser = {
      userName,
      id: 1,
      firstName: 'John',
      lastName: 'Doe'
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(frmValues: any) {
    this.currentUser.firstName = frmValues.firstName;
    this.currentUser.lastName = frmValues.lastName;
  }
}

