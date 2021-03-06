import {Component, Input, OnInit} from '@angular/core';
import { DataManager, ODataV4Adaptor} from '@syncfusion/ej2-data';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent implements OnInit {
  @Input() dataSource;
  displayedColums = ['pseudo'];
  constructor() { }
  ngOnInit(): void {
  }
}
