import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utilisateur} from '../model/utilisateur.model';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MatchServiceService {
  constructor(private http: HttpClient){}
  fetchListeMatch(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>('http://localhost:8080/utilisateur/10/match/score');
  }
}
