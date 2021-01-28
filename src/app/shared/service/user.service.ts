import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user.model';
import {Observable} from 'rxjs';


@Injectable()
export class UserService {
  readonly rootUrl = 'http://localhost:8080/utilisateur';

  constructor(private http: HttpClient) {
  }

  registerUser(user: User): Observable<User> {
    const body = {
      pseudo: user.userName,
      topics: user.topics.map(function(t) {
        return {
          id: t.topic.id,
          score: t.rate.score
        };
      })
    };
    return this.http.post<User>(this.rootUrl + '/topics', body);
  }

}
