import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Email} from '../../shared/model/email.model';
import { EmailService} from '../../shared/service/email.service';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ej} from '@syncfusion/ej2-data/dist/global';


@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
  }

  onSubmit(data){
    this.http.post('http://localhost:8080/mail', data).subscribe((result) => {
      console.warn('result', result);
  });
    console.warn(data);
  }

}
