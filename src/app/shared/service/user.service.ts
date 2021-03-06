import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user.model';
import {Observable} from 'rxjs';
import {Topic} from '../model/topic.model';


@Injectable()
export class UserService {
  readonly rootUrl = 'http://localhost:8080/user';
   constructor(private http: HttpClient) {
  }

  registerUser(user: User): Observable<User> {
    const requestBody = {
      pseudo: user.userName,
      likedTopics: {}, // objet likedTopics vide
      seekedTopics: {} // objet seekedTopics vide
    };
    // je parcours les topics notés par le user, et pour chaque topic noté
    // on va construire un item connaissances (music -> topic, niveau)
    user.topics
      .filter(ratedTopic => ratedTopic.liked.score != 'ZERO')
      .forEach(ratedTopic => {
        //initialisation de la propriété ratedTopic de l'objet likedTopics
        requestBody.likedTopics[ratedTopic.topic.name] = {
          'topic': ratedTopic.topic,
          'niveau': ratedTopic.liked.score
        };
      });

    user.topics
      .filter(ratedTopic => ratedTopic.seeked.score != 'ZERO')
      .forEach(ratedTopic => {
        //initialisation de la propriété ratedTopic de l'objet seekedTopics
        requestBody.seekedTopics[ratedTopic.topic.name] = {
          'topic': ratedTopic.topic,
          'niveau': ratedTopic.seeked.score
        };
      });
    console.log(requestBody)

    return this.http.post<User>(this.rootUrl + '/knowledges', requestBody);
  }

  getMachedUsers(userName: String, methodName: String[]): Observable<any>{
    return this.http.get<any>(this.rootUrl + '/' + userName + '/match/' + methodName);
  }
  getUser(userName: String): Observable<any>{
     return this.http.get<any>(this.rootUrl + '/username');
  }
  getFriend(userName: String): Observable<any>{
     return this.http.get<any>(this.rootUrl + '/' + userName + '/friend');
  }
}
