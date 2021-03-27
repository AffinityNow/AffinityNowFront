import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../shared/service/user.service';
import {User} from '../../shared/model/user.model';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})

export class ProfilComponent implements OnInit {
  @Input() info;

  users: User[];
  selectedUser: User;
  commonTopics: any[];
  cols: any[];
  selectedFriend: User;
  friends: User[];


  constructor(private userservice: UserService) {
  }

  ngOnInit() {
    this.userservice.getMyFriends('jean').subscribe((friends) => {
      this.friends = friends;
      console.log('friends : ', this.friends);
    });
    this.userservice.getAllUsers().subscribe((users) => {
      this.users = users;
      console.log('users : ', this.users);
    });
    console.log('match result', this.info);
    this.cols =
      [
        {field: 'likedknowledges', header: 'Liked Topics'},
        {field: 'level', header: 'Rating'},
      ];
  }

  addFriend() {
    this.userservice.addFriend("jean", this.selectedUser).subscribe((newfriend) => {
        console.log('newfriend : ', newfriend);
      }
    );
  }


  removeFriend() {
    this.userservice.deleteFriend("jean",this.selectedFriend.pseudo).subscribe((notFriend) => {
        console.log('friends : ', notFriend);
      }
    );
  }
}
