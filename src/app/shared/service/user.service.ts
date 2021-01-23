import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user.model';


@Injectable()
export class UserService {
  readonly rootUrl = 'http://localhost:8080/utilisateur/{id}/topics';
  constructor(private http: HttpClient) {
  }

  // registerUser(user: User): Observable<User>{
  //   const body: User = {
  //     UserName: user.UserName,
  //     Password: user.Password,
  //     Email: user.Email,
  //     FirstName: user.FirstName,
  //     LastName: user.LastName
  //   };
  //   return this.http.post<User>(this.rootUrl + '/api/User/Register', body);
  // }

}
