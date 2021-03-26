import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Email } from '../model/email.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) {
  }

  private baseUrl = 'http://localhost:8080/user/email';

  envoyerEmail(email: Email): Observable<any> {
    return this.http.post(`${this.baseUrl}`, email);
  }

}
