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
import {Router} from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  user: User = new User();
  ratings: RateItem [] = [
    {name: '★★★★★', score: 'FIVE',},
    {name: '★★★★', score: 'FOUR'},
    {name: '★★★', score: 'THREE'},
    {name: '★★', score: 'TWO'},
    {name: '★', score: 'ONE'},
    {name: '', score: 'ZERO'}
  ];

  constructor(private topicService: TopicService,
              private primengConfig: PrimeNGConfig,
              private userService: UserService,
              private toastr: ToastrService,
              private router: Router) {

  }

  ngOnInit(): void {

    this.topicService.getTopics().then((topic) => {
        console.log(topic);
        this.user.topics = topic.map(t => new RatedTopic(t, this.ratings[5], this.ratings[5]));
      }
    );
  }

  public form: FormGroup = new FormGroup({
    username: new FormControl(),
  });


  public sign_up(): void {
    if (this.user.topics.every(ratedTopic => ratedTopic.likedKnowledges.score == 'ZERO') ||
      this.user.topics.every(ratedTopic => ratedTopic.seekedKnowledges.score == 'ZERO')) {
      this.toastr.error('Please mark out topics!', 'Error', {
        positionClass: 'toast-top-center',
      });
      return;
    }
    this.userService.registerUser(this.user)
      .subscribe(data => {
        this.toastr.success('User registration successful');
        setTimeout(() => {
          this.router.navigate(['./matchOption']);
        }, 2000)

      }, error => {
        this.toastr.error('Username already taken', 'Error', {
          positionClass: 'toast-top-center',
        });
      });
  }


  public clearForm(): void {
    window.location.reload();
  }
}

