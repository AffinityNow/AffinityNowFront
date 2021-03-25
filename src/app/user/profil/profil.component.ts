import {Component, Input, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})

export class ProfilComponent implements OnInit {
  @Input() info;

  commonTopics: any[]
  cols: any[];
  constructor() {
  }

  ngOnInit() {
    console.log('match result',this.info);
    this.cols =
      [
        {field: 'likedknowledges', header: 'Liked Topics'},
        {field: 'level', header: 'Rating'},
      ];
  }
}
