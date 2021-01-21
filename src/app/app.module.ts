import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {HomeComponent} from './shared/home/home.component';
import {AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {FooterComponent} from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import {HttpClient} from '@angular/common/http';
import {LoginComponent} from './user/login/login.component';
import {SigninComponent} from './user/signin/signin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
