import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-match-res',
  templateUrl: './matchRes.component.html',
  styleUrls: ['./matchRes.component.css']
})
//child
export class MatchResComponent implements OnInit {
  @Input() dataSource;

  commonTopics: any[]
  cols: any[];
  constructor() {
  }

  ngOnInit() {
    console.log('match result',this.dataSource);
    this.cols =
      [
      {field: 'pseudo', header: 'Pseudo'},
      {field: 'quality', header: 'Quality'},
      {field: 'commonTopics', header: 'CommonTopics'},
    ];
  }
}
