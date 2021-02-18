import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-liste-match',
  templateUrl: './listeMatch.component.html',
  styleUrls: ['./listeMatch.component.css']
})
//child
export class ListeMatchComponent implements AfterViewInit {
  @Input() dataSource;
  displayedColums = ['pseudo', 'quality'];

  constructor() {
  }

  title = 'AffinityNowFront';
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    // this.dataSource.value.sort(this.MatSort);
    // this.dataSource.value.sort(this.MatPaginator);
  }
}

