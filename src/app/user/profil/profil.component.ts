import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../shared/model/user.model';
import {UserService} from '../../shared/service/user.service';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  title = 'AffinityNowFront';
  dataSource = new UserDataSource(this.userService);
  displayedColums = ['pseudo'];
  constructor(private userService: UserService ) { }

  ngOnInit(): void {}

}


export class UserDataSource extends DataSource<any>{
  constructor(private userService: UserService) {
    super();

  }
  connect(): Observable<User[]> {
    return this.userService.getUser();
  }
  disconnect() { }

}
