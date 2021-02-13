import {Component, OnInit, ViewChild} from '@angular/core';
import {MatchServiceService} from '../../shared/service/match-service.service';
import {MatPaginator} from '@angular/material/paginator';
import {UserService} from '../../shared/service/user.service';
import {Observable} from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import {User} from '../../shared/model/user.model';
import {Utilisateur} from '../../shared/model/utilisateur.model';

@Component({
  selector: 'app-liste-match',
  templateUrl: './listeMatch.component.html',
  styleUrls: ['./listeMatch.component.css']
})
export class ListeMatchComponent implements OnInit {
  dataSource = new UserDataSource(this.listeMatchService);
  displayedColums = ['pseudo'];
  constructor(private listeMatchService: MatchServiceService ) { }
  liste;
  title = 'AffinityNowFront';
  @ViewChild(MatPaginator) paginator: MatPaginator;
   fetchlisteMatch() {
    this.liste = this.listeMatchService.fetchListeMatch();
  }
  ngOnInit(): void {
    // this.liste.paginator = this.paginator;
   }
}

export class UserDataSource extends DataSource<any>{
  constructor(private listeMatchService: MatchServiceService) {
    super();
  }
  connect(): Observable<Utilisateur[]> {
    return this.listeMatchService.getUser();
  }
  disconnect() { }
}
