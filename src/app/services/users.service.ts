import { Injectable } from '@angular/core';
import { USERS } from 'src/app/classes/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  getUsers() {
    return USERS;
  }
}
