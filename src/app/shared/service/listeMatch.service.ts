import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()
export class ListeMatchService {
  constructor(private http: HttpClient){}
  fetchListeMatch(): Observable<Object> {
    return this.http.get('http://localhost:8080/utilisateur/10/match/score');

  }
}
