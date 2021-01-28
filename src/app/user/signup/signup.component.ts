import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {TopicService} from '../../shared/service/TopicService';
import {PrimeNGConfig} from 'primeng/api';
import {UserService} from '../../shared/service/user.service';
import '../../shared/model/ratedtopic.model';
import '../../shared/model/rateitem.model';
import {RatedTopic} from '../../shared/model/ratedtopic.model';
import {RateItem} from '../../shared/model/rateitem.model';
import {User} from '../../shared/model/user.model';


@Component({
  selector: 'app-signin',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  user: User = new User();
  ratings: RateItem [];
  selection: RateItem;

  constructor(private topicService: TopicService,
              private primengConfig: PrimeNGConfig,
              private userService: UserService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.ratings = [
      {name: '★★★★★', score: '5'},
      {name: '★★★★', score: '4'},
      {name: '★★★', score: '3'},
      {name: '★★', score: '2'},
      {name: '★', score: '1'}
    ];


    this.resetForm();
    this.topicService.getTopics().then(topic => this.user.topics = topic.map(t => new RatedTopic(t, this.ratings[4])));
    this.primengConfig.ripple = true;


  }

  resetForm(form?: NgForm): void {
    if (form != null) {
      form.reset();
    }
    this.user = new User();
  }

  OnSubmit(): void {
    this.userService.registerUser(this.user)
      .subscribe(data => {
        this.resetForm();
        this.toastr.success('User registration successful');
      }, error => {
        this.toastr.error(error);
      });
  }

}
