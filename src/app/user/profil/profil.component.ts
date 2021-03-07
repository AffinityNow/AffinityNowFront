import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {User} from '../../shared/model/user.model';
import {UserService} from '../../shared/service/user.service';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import{MatTableDataSource} from '@angular/material/table';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})

export class ProfilComponent implements OnInit {
  title = 'AffinityNowFront';
  dataSource = new UserDataSource(this.userService);
 // dataSource = new MatTableDataSource(this.userService);
  displayedColums = ['pseudo', 'friend'];
  filteredOptions: Observable<User[]>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private userService: UserService ,private http: HttpClient) { }
 /* applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }*/
  ngOnInit(): void {}
  readonly rootUrl = 'http://localhost:8080/user';
  getFriend(): Observable<any>{
    return this.http.get<any>(this.rootUrl + '/jean/friend');
  }
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
