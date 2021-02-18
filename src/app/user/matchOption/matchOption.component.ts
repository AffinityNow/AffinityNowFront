import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../shared/model/user.model';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../shared/service/user.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-match-option',
  templateUrl: './matchOption.component.html',
  styleUrls: ['./matchOption.component.css'],
})
export class MatchOptionComponent implements OnInit {
  user: User = new User();
  resMatch;

  constructor(private userService: UserService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
  }

  selectedMethods = 3;
  matchMethods = [
    {id: 1, name: 'scoreBool'},
    {id: 2, name: 'scoreDouble'},
    {id: 3, name: 'seekedDouble'},
    {id: 4, name: 'Match mehode 4', disabled: true},
  ];

  public form: FormGroup = new FormGroup({
    username: new FormControl(),
  });

  check = 'red';
  colors = ['red', 'yellow', 'green'];
  pseudo:String = "votre pseudo";

  login() {
    const res: any = this.matchMethods.find(m=> m.id==this.selectedMethods);
      if(!res){
      this.toastr.error('No topic is noted!', 'Error', {
        positionClass: 'toast-top-center',
      });
      return;
    }
    this.userService.getMachedUsers(this.user.userName, res.name )
      .subscribe(data => {
        this.toastr.success('Maching avec succes');
        this.resMatch = data;
        console.log('match result',this.resMatch);
      }, error => {
        this.toastr.error(' Utilisateur inconnu', 'Error', {
          positionClass: 'toast-top-center',
        });
      });
  }

  refresh(): void {
    window.location.reload();
  }
}


