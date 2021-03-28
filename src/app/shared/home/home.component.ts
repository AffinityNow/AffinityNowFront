import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router)  { }

  ngOnInit(): void {
  }

  redirect1() {
    this.router.navigate(['./about']);
  }

  redirect2() {
    this.router.navigate(['./connect']);
  }

  redirect3() {
    this.router.navigate(['./signup']);
  }
}
