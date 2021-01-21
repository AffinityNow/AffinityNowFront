import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SignInComponentComponent } from './sign-in-component/sign-in-component.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';



@NgModule({
  declarations: [LoginComponentComponent, SignInComponentComponent, SignInComponent, LoginComponent, SigninComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
