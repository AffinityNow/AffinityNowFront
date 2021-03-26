import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Email} from '../../shared/model/email.model';
import { EmailService} from '../../shared/service/email.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  constructor(private http: HttpClient, private emailService: EmailService) { }

  mail: Email = new Email();

  ngOnInit() {
  }

   envoyerEmail() {
    this.emailService.envoyerEmail(this.mail)
      .subscribe(data => console.log(data));
  }

   onSubmit() {
    this.envoyerEmail();
  }

}
