import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-match-res',
  templateUrl: './matchRes.component.html',
  styleUrls: ['./matchRes.component.css']
})
//child
export class MatchResComponent implements AfterViewInit {
  @Input() dataSource;
  displayedColums = ['pseudo', 'quality', 'shared Topics'];


  constructor() {
  }

  title = 'AffinityNowFront';
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  commonTopics: any;

  ngAfterViewInit() {
    // this.dataSource.value.sort(this.MatSort);
    // this.dataSource.value.sort(this.MatPaginator);
  }
}

