import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {UserService} from '../../shared/service/user.service';
import {ToastrService} from 'ngx-toastr';
import {BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'app-userprofil',
  templateUrl: './userprofil.component.html',
  styleUrls: ['./userprofil.component.css']
})
export class UserprofilComponent implements OnInit {
  data: Array<any>;

  constructor( private user: UserService ) {
    this.data = new Array<any>();
  }

  ngOnInit(): void {
  }

  getUserinfo() {
    this.user.getUser().subscribe((data) => {
      console.log(data);
      this.data = data;
    });
  }

  updateUser() {

  }
}
