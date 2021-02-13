import {Component, OnInit} from '@angular/core';
import {User} from '../../shared/model/user.model';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-match-option',
  templateUrl: './matchOption.component.html',
  styleUrls: ['./matchOption.component.css']
})
export class MatchOptionComponent implements OnInit {
  user: User = new User();

  constructor() {
  }

  ngOnInit(): void {
  }

  selectedMethods = [3];
  matchMethods = [
    {id: 1, name: 'Match mehode 1'},
    {id: 2, name: 'Match mehode 2', disabled: true},
    {id: 3, name: 'Match mehode 3'},
    {id: 4, name: 'Match mehode 4'},
  ];


  public form: FormGroup = new FormGroup({
    username: new FormControl(),
  });

  check = 'red';
  colors = ['red', 'yellow', 'green'];

  login(form) {
    console.log(form);
  }

  public clearForm(): void {
    this.form.reset();
  }
}


