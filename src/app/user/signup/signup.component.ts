import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../../shared/model/user.model';
import { ToastrService } from 'ngx-toastr'
import {Topic} from '../../shared/model/topic.model';
import {TopicService} from '../../shared/service/TopicService';
import {PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-signin',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user: { UserName: string };
  topics: Topic[];

  constructor(private topicService: TopicService, private primengConfig: PrimeNGConfig, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.resetForm();
    this.topicService.getTopics().then(topic => this.topics = topic);
    this.primengConfig.ripple = true;
  }

  resetForm(form?: NgForm): void {
    if (form != null) {
      form.reset();
    }
    this.user = {
      UserName: '',
    };
  }

  // OnSubmit(form: NgForm): void {
  //   this.userService.registerUser(form.value)
  //     .subscribe((data: any) => {
  //       if (data.Succeeded == true) {
  //         this.resetForm(form);
  //         this.toastr.success('User registration successful');
  //       } else
  //         this.toastr.error(data.Errors[0]);
  //     });
  // }

}
