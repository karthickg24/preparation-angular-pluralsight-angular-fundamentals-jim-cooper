import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IUser } from './user.model';

@Injectable()
export class AuthService {

  currentUser: IUser;
  constructor(private http: HttpClient) { }
  loginUser(userName: string, password: string): Observable<any> {
    // this.currentUser = {
    //   userName,
    //   id: 1,
    //   firstName: 'John',
    //   lastName: 'Doe'
    // }; 
    const loginInfo = {
      username: userName,
      password
    };
    const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post('/api/login', loginInfo, options)
      .pipe(tap((data) => {
        this.currentUser = <IUser>data['user'];
      }))
      .pipe(catchError(err => {
        return of(false);
      }));
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  checkAuthenticationStatus() {
    this.http.get('/api/currentIdentity')
      .pipe(tap(data => {
        if (data instanceof Object) {
          this.currentUser = <IUser>data;
        }
      }))
      .subscribe();
  }

  updateCurrentUser(frmValues: any): Observable<any> {
    this.currentUser.firstName = frmValues.firstName;
    this.currentUser.lastName = frmValues.lastName;

    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
    return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
  }

  logout(): Observable<any> {
    this.currentUser = undefined;
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
    return this.http.post('/api/logout', {}, options);
  }
}

