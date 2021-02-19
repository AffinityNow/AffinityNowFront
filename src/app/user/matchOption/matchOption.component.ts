import {Component, OnInit} from '@angular/core';
import {User} from '../../shared/model/user.model';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../shared/service/user.service';
import {ToastrService} from 'ngx-toastr';
import {MatchMethods} from '../../shared/model/topic.model';


@Component({
  selector: 'app-match-option',
  templateUrl: './matchOption.component.html',
  styleUrls: ['./matchOption.component.css'],
})
export class MatchOptionComponent implements OnInit {
  user: User = new User();
  resMatch;
  methods: any[];
  selectedMethods;
  check = 'red';
  pseudo:String = "          Your pseudo";

  constructor(private userService: UserService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.methods = [MatchMethods.SCOREDOUBLE, MatchMethods.SEEKEDDOUBLE];
  }

  public form: FormGroup = new FormGroup({
    username: new FormControl(),
  });

  getResMethodMatch(libelle: string) : void{
    this.selectedMethods = libelle;

  }

  login() {
    const res = this.selectedMethods;
      if(!res){
      this.toastr.error('Pic a method !', 'Error', {
        positionClass: 'toast-top-center',
      });
      return;
    }
    this.userService.getMachedUsers(this.user.userName, res )
      .subscribe(data => {
        this.toastr.success('Maching succeeded');
        this.resMatch = data;
        console.log('match result',this.resMatch);
      }, error => {
        this.toastr.error(' unknown User', 'Error', {
          positionClass: 'toast-top-center',
        });
      });
  }

  refresh(): void {
    window.location.reload();
  }

}


