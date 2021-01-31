import { Component, OnInit } from '@angular/core';
import {MatchServiceService} from '../../shared/service/match-service.service';

@Component({
  selector: 'app-liste-match',
  templateUrl: './listeMatch.component.html',
  styleUrls: ['./listeMatch.component.css']
})
export class ListeMatchComponent implements OnInit {
  liste;
  title = 'AffinityNowFront';
  constructor(private listeMatchService: MatchServiceService ) { }
  fetchlisteMatch() {
    this.liste = this.listeMatchService.fetchListeMatch();
  }

  ngOnInit(): void {
  }
}

