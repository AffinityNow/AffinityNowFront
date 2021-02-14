import {Component, OnInit} from '@angular/core';
import {User} from '../../shared/model/user.model';
import {FormControl, FormGroup} from '@angular/forms';
import {TopicService} from '../../shared/service/TopicService';
import {PrimeNGConfig} from 'primeng/api';
import {UserService} from '../../shared/service/user.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-match-option',
  templateUrl: './matchOption.component.html',
  styleUrls: ['./matchOption.component.css']
})
export class MatchOptionComponent implements OnInit {
  user: User = new User();

  constructor(private userService: UserService,
              private toastr: ToastrService) {

  }

  ngOnInit(): void {
  }

  selectedMethods = 3;
  matchMethods = [
    {id: 1, name: 'Match mehode 1'},
    {id: 2, name: 'Match mehode 2', disabled: true},
    {id: 3, name: 'Match mehode 3'},
    {id: 4, name: 'Match mehode 4'},
  ];


  public form: FormGroup = new FormGroup({
    username: new FormControl(),
  });

  check = 'red';
  colors = ['red', 'yellow', 'green'];

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
        this.toastr.success('User registration successful');
      }, error => {
        this.toastr.error('Something went wrong', 'Error', {
          positionClass: 'toast-top-center',
        });
      });
  }

  public clearForm(): void {
    this.form.reset();
  }
}


