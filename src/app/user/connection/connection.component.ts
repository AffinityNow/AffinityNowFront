import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../shared/service/user.service';
import {User} from '../../shared/model/user.model';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
  loginForm: any;
  userName: string;
  pseudo: string;
  constructor(  private userService: UserService, private toastr: ToastrService, private router: Router, private _formBuilder: FormBuilder) {
    this.loginForm = this._formBuilder.group({
      pseudo: [ "", Validators.required ],
    });
  }

  ngOnInit(): void {
  }

  login() {
      this.userService.getUser(this.pseudo)
          .subscribe(user => {
          this.toastr.success('Connection succeeded');
          this.userService.setConnectedUser(user);
          console.log("user est :", user)
          this.router.navigate(['./profil']);

          console.log('connection succeeded');
        }, error => {
          this.toastr.error(' unknown User', 'Error', {
            positionClass: 'toast-top-center',
          });
        });
  }
}
