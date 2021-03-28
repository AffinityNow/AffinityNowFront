import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User, UserProfil} from '../model/user.model';
import {Observable} from 'rxjs';


@Injectable()
export class UserService {
  connectedUser:UserProfil;
  readonly rootUrl = 'http://localhost:8080/user';
   constructor(private http: HttpClient) {
  }

  registerUser(user: User): Observable<User> {
    const requestBody = {
      pseudo: user.pseudo,
      likedKnowledges: {}, // objet likedTopics vide
      seekedKnowledges: {} // objet seekedTopics vide
    };
    // je parcours les topics notés par le user, et pour chaque topic noté
    // on va construire un item connaissances (music -> topic, niveau)
    user.topics
      .filter(ratedTopic => ratedTopic.likedKnowledges.score != 'ZERO')
      .forEach(ratedTopic => {
        //initialisation de la propriété ratedTopic de l'objet likedTopics
        requestBody.likedKnowledges[ratedTopic.topic.name] = {
          'topic': ratedTopic.topic,
          'level': ratedTopic.likedKnowledges.score
        };
      });

    user.topics
      .filter(ratedTopic => ratedTopic.seekedKnowledges.score != 'ZERO')
      .forEach(ratedTopic => {
        //initialisation de la propriété ratedTopic de l'objet seekedTopics
        requestBody.seekedKnowledges[ratedTopic.topic.name] = {
          'topic': ratedTopic.topic,
          'level': ratedTopic.seekedKnowledges.score
        };
      });
    console.log(requestBody)

    return this.http.post<User>(this.rootUrl + '/knowledges', requestBody);
  }

  getMatchedUsers(userName: String, methodName:String[], selectedTopics:String[]) : Observable<any>{
    return this.http.post<any>(this.rootUrl+ '/'+ userName+'/match/'+methodName, selectedTopics);
  }

  getAllUsers(): Observable<any>{
     return this.http.get<any>(this.rootUrl);
  }
  getMyFriends(userName: String) : Observable<any>{
    return this.http.get<any>(this.rootUrl+'/'+userName+'/friend');
  }

  addFriend(myPseudo: String, user:User) : Observable<any>{
    return this.http.put<any>(this.rootUrl+'/'+myPseudo+'/friend',user);
  }

  deleteFriend(myPseudo: String, friend:string) : Observable<any>{
    return this.http.delete<any>(this.rootUrl+'/'+myPseudo+'/friend/'+friend);
  }

  getUser(userName: String) : Observable<UserProfil>{
    return this.http.get<any>(this.rootUrl+'/'+userName);
  }
  getConnectedUser():UserProfil{
     return this.connectedUser;
  }
  setConnectedUser(connectedUser : UserProfil){
    this.connectedUser = connectedUser;
  }
}
