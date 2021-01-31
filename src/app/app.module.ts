import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {HomeComponent} from './shared/home/home.component';
import {AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {FooterComponent} from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';

import {LoginComponent} from './user/login/login.component';
import {SigninComponent} from './user/signin/signin.component';
import {ListeMatchComponent } from './user/listeMatch/listeMatch.component';
import {MatchServiceService} from './shared/service/match-service.service';


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
  {
    path: 'list',
    component: ListeMatchComponent
  },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    RouterModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [HttpClient, MatchServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
