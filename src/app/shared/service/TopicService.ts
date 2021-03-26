import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';


@Injectable()
export class TopicService {
  readonly rootUrl = 'http://localhost:8080/topic';

  constructor(private http: HttpClient) {
  }

  // Adding HTTP Error Handling with RxJS catchError() & HttpClient
  handleError(error: HttpErrorResponse) {
    let errorMessage;
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `(Erreur Serveur) Echec de la récupération des topics`;
      //errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  getTopics():Observable<any> {
    return this.http.get<any>(this.rootUrl).pipe(retry(3), catchError(this.handleError));
  }
}
