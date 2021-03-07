import {Component, OnInit} from '@angular/core';
import {User} from '../../shared/model/user.model';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../shared/service/user.service';
import {ToastrService} from 'ngx-toastr';
import {MatchMethods, Topic} from '../../shared/model/topic.model';
import {PrimeNGConfig} from 'primeng/api';
import {TopicService} from '../../shared/service/TopicService';


@Component({
  selector: 'app-match-option',
  templateUrl: './matchOption.component.html',
  styleUrls: ['./matchOption.component.css'],
})
export class MatchOptionComponent implements OnInit {
  user: User = new User();
  matchRes;
  methods;
  selectedMethods;
  check = 'red';
  pseudo:String = "          Your pseudo";
  toggle = false;
  topics: Topic[];
  selectedTopics=[];
  selectedValue: string = 'include';

  constructor(private userService: UserService,
              private topicService: TopicService,
              private primengConfig: PrimeNGConfig,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.methods = [MatchMethods.SCOREDOUBLE, MatchMethods.SEEKEDDOUBLE];
    this.topicService.getTopics().then((topic) => {
      this.topics=topic;
      }
    );
  }

  public form: FormGroup = new FormGroup({
    username: new FormControl(),
  });

  getResMethodMatch(libelle: string) : void{
    this.selectedMethods = libelle;
    this.toggle = !this.toggle;
  }

  login() {
    const res = this.selectedMethods;
      if(!res){
      this.toastr.error('Pic a method !', 'Error', {
        positionClass: 'toast-top-center',
      });
      return;
    }
    this.userService.getMatchedUsers(this.user.userName, res )
      .subscribe(data => {
        this.toastr.success('Maching succeeded');
        this.matchRes = data;
        console.log('match result',this.matchRes);
      }, error => {
        this.toastr.error(' unknown User', 'Error', {
          positionClass: 'toast-top-center',
        });
      });
    this.toggle = false;
  }

  refresh(): void {
    window.location.reload();
  }

}


