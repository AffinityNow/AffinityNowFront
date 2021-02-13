import { Component, OnInit } from '@angular/core';
import {MatchServiceService} from '../../shared/service/match-service.service';

@Component({
  selector: 'app-liste-match',
  templateUrl: './listeMatch.component.html',
  styleUrls: ['./listeMatch.component.css']
})
export class ListeMatchComponent implements OnInit {
  constructor(private listeMatchService: MatchServiceService ) { }
  liste;
  title = 'AffinityNowFront';
slideConfig = {"slideToShow": 1, "slideToScroll": 1};
  fetchlisteMatch() {
    this.liste = this.listeMatchService.fetchListeMatch();
  }
  ngOnInit(): void {
  }
}

