import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/service/user.service';
import {Knowledge, User, UserProfil} from '../../shared/model/user.model';
import {ToastrService} from 'ngx-toastr';
import {Route, Router} from '@angular/router';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})

export class ProfilComponent implements OnInit {
  user: UserProfil;
  users: User[];
  selectedUser: User;
  commonTopics: any[];
  cols: any[];
  selectedFriend: User;
  friends: User[];


  constructor(private userservice: UserService, private toastr: ToastrService, private router : Router) {
  }

  ngOnInit() {
    this.user = this.userservice.getConnectedUser();
    console.log('user connected : ', this.user);
    this.userservice.getMyFriends(this.user.pseudo).subscribe((friends) => {
      this.friends = friends;
      console.log('friends : ', this.friends);
    });
    this.userservice.getAllUsers().subscribe((users) => {
      this.users = users;
      console.log('users : ', this.users);
    });

    // this.cols =
    //   [
    //     {field: 'likedknowledges', header: 'Liked Topics'},
    //     {field: 'level', header: 'Rating'},
    //   ];
  }

  addFriend() {
    this.userservice.addFriend(this.user.pseudo, this.selectedUser).subscribe((newfriend) => {
      console.log('newfriend : ', newfriend);
      this.toastr.success('friend added', 'info', {positionClass: 'toast-top-center', timeOut: 9500});
    }, error => {
      this.toastr.error('your can not add yourself!', 'Error', {
        positionClass: 'toast-top-center',
      });
    });
  }

  removeFriend() {
    this.userservice.deleteFriend(this.user.pseudo, this.selectedFriend.pseudo).subscribe((notFriend) => {
      console.log('friend: ', notFriend);
      this.toastr.success('friend removed', 'info', {positionClass: 'toast-top-center', timeOut: 9500});
    }, error => {
      this.toastr.error('something went wrong', 'Error', {
        positionClass: 'toast-top-center',
      });
    });

  }

  refresh() {
    this.router.navigate(['./connect']);
  }

  getAllLikedKnowledges(): Knowledge[] {
    let cu = this.userservice.getConnectedUser();
    let likedKnowLedges = cu.likedKnowledges;
    return Object.entries(likedKnowLedges).map(item => item[1]);
  }

  getAllSeekedKnowledges(): Knowledge[] {
    let cu = this.userservice.getConnectedUser();
    let seekedKnowledges = cu.seekedKnowledges;
    return Object.entries(seekedKnowledges).map(item => item[1]);
  }
}
