import {Component} from '@angular/core';
import '../../shared/model/ratedtopic.model';
import '../../shared/model/rateitem.model';
import {RateItem} from '../../shared/model/rateitem.model';
import {User} from '../../shared/model/user.model';
import {TopicService} from '../../shared/service/TopicService';
import {PrimeNGConfig} from 'primeng/api';
import {UserService} from '../../shared/service/user.service';
import {ToastrService} from 'ngx-toastr';
import {RatedTopic} from '../../shared/model/ratedtopic.model';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  user: User = new User();
  ratings: RateItem [] = [
    {name: '★★★★★', score: 'CINQ',},
    {name: '★★★★', score: 'QUATRE'},
    {name: '★★★', score: 'TROIS'},
    {name: '★★', score: 'DEUX'},
    {name: '★', score: 'UN'},
    {name: '', score: 'ZERO'}
  ];

  constructor(private topicService: TopicService,
              private primengConfig: PrimeNGConfig,
              private userService: UserService,
              private toastr: ToastrService) {

  }

  ngOnInit(): void {

    this.topicService.getTopics().then((topic) => {
        console.log(topic);
        this.user.topics = topic.map(t => new RatedTopic(t, this.ratings[5]));
      }
    );
  }

  public form: FormGroup = new FormGroup({
    username: new FormControl(),
  });



  public sign_up(): void {
    if (this.user.topics.every(ratedTopic => ratedTopic.rate.score == 'ZERO')) {
      this.toastr.error('No topic is noted!', 'Error', {
        positionClass: 'toast-top-center',
      });
      return;
    }
    this.userService.registerUser(this.user)
      .subscribe(data => {
        this.toastr.success('User registration successful');
      }, error => {
        this.toastr.error('Something went wrong', 'Error', {
          positionClass: 'toast-top-center',
        });
      });
  }


  public clearForm(): void {
    window.location.reload();
  }
}

