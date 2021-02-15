import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatchServiceService} from '../../shared/service/match-service.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Observable} from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import {Utilisateur} from '../../shared/model/utilisateur.model';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-liste-match',
  templateUrl: './listeMatch.component.html',
  styleUrls: ['./listeMatch.component.css']
})
export class ListeMatchComponent implements AfterViewInit{
  dataSource = new UserDataSource(this.listeMatchService);
  displayedColums = ['pseudo', 'quality'];
   constructor(private listeMatchService: MatchServiceService) {

  }
  title = 'AffinityNowFront';
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    // this.dataSource.value.sort(this.MatSort);
    // this.dataSource.value.sort(this.MatPaginator);
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
