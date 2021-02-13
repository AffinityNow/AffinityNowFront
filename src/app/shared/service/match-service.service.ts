import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utilisateur} from '../model/utilisateur.model';
import {catchError, retry} from 'rxjs/operators';
import {User} from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class MatchServiceService {
  private serviceUrl = 'http://localhost:8080/utilisateur/10/match/score';
  constructor(private http: HttpClient){}
  getUser(): Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>(this.serviceUrl);
  }
}
