import { Component, OnInit } from '@angular/core';
import {ListeMatchService} from '../../shared/service/listeMatch.service';

@Component({
  selector: 'app-liste-match',
  templateUrl: './listeMatch.component.html',
  styleUrls: ['./listeMatch.component.css']
})
export class ListeMatchComponent implements OnInit {
  liste$;
  title = 'AffinityNowFront';
  constructor(private listeMatchService: ListeMatchService) { }
  fetchlisteMatch() {
    this.liste$ = this.listeMatchService.fetchListeMatch();
  }

  ngOnInit(): void {
  }
}

