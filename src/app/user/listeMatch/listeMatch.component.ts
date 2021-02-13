import {Component, OnInit, ViewChild} from '@angular/core';
import {MatchServiceService} from '../../shared/service/match-service.service';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-liste-match',
  templateUrl: './listeMatch.component.html',
  styleUrls: ['./listeMatch.component.css']
})
export class ListeMatchComponent implements OnInit {
  constructor(private listeMatchService: MatchServiceService ) { }
  liste;
  title = 'AffinityNowFront';
  @ViewChild(MatPaginator) paginator: MatPaginator;
 // slideConfig = {"slideToShow": 1, "slideToScroll": 1};
  fetchlisteMatch() {
    this.liste = this.listeMatchService.fetchListeMatch();
  }
  ngOnInit(): void {
    // this.liste.paginator = this.paginator;
   }
}

