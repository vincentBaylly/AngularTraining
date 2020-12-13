import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { User } from '../classes/user';
//Nous verrons les Observables dans le chapitre suivant
import { Observable } from 'rxjs';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //private http: HttpClient
  constructor(private userService: UsersService) {}

  login(email: string, password: string): Observable<User> {
    //Avant retour au composant le service devrait avoir renvoyé un reponse contenant notre JWT.
    //On stockera celui-ci dans le localStorage.
    return this.mockUser(email, password);
    //return this.http.post<User>('/api/login', { email, password });
  }

  /**
   * On remplace l'appel d'un service par l'utilisation de notre tableau d'utilisateur
   * @param email
   * @param password
   */
  private mockUser(email: string, password: string): Observable<User> {
    //On bouchonne le retour d'un service de connection le but est de comprendre se que fait
    const mockedObservable: Observable<User> = new Observable((observer) => {
      var connectedUser = this.userService
        .getUsers()
        .filter(
          (user) => user.email === email && user.password.pwd === password
        )[0];
      // observable execution
      if (connectedUser) {
        observer.next(connectedUser);
      } else {
        observer.error('user not found');
      }
      observer.complete();
    });

    return mockedObservable;
  }
}
