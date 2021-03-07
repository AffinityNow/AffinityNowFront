import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {User} from '../../shared/model/user.model';
import {UserService} from '../../shared/service/user.service';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  title = 'AffinityNowFront';
  dataSource = new UserDataSource(this.userService);
  displayedColums = ['pseudo'];
  filteredOptions: Observable<User[]>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
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
