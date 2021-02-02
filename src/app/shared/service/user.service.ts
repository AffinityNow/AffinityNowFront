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
    const requestBody = {
      pseudo: user.userName,
      connaissances: {} // objet connaissances vide
    };
   // je parcours les topics notés par le user, et pour chaque topic noté
    // on va construire un item connaissances (music -> topic, niveau)
    user.topics.forEach(ratedTopic => {
      //initialisation de la propriété ratedTopic de l'objet Connaissances
      requestBody.connaissances[ratedTopic.topic.name] = {
        'topic': ratedTopic.topic,
        'niveau': ratedTopic.rate.score
      };
    });


    return this.http.post<User>(this.rootUrl + '/connaissances', requestBody);
  }

}
