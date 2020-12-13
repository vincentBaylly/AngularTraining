import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/user';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private userService: UsersService) {}

  login(email: string, password: string): Observable<User> {
    return this.http
      .post<User>('http://localhost:4200/users/authenticate', {
        email,
        password,
      })
      .pipe((user) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
      });
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
  }
}
