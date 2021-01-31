import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import {ListeMatchComponent} from './listeMatch/listeMatch.component';



@NgModule({
  declarations: [LoginComponent, LoginComponent, SigninComponent, ListeMatchComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
