import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {HomeComponent} from './shared/home/home.component';
import {AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {FooterComponent} from './shared/footer/footer.component';
import {HeaderComponent } from './shared/header/header.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './user/login/login.component';
import {MatchServiceService} from './shared/service/match-service.service';
import {SignupComponent} from './user/signup/signup.component';
import {FormsModule} from '@angular/forms';
import {OrderListModule} from 'primeng/orderlist';
import {TopicService} from './shared/service/TopicService';
import {UserService} from './shared/service/user.service';
import {GridModule, RowFilterModule} from '@progress/kendo-angular-grid';
import {DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import {DropdownModule} from 'primeng/dropdown';
import {LabelModule} from '@progress/kendo-angular-label';
import {ListeMatchComponent} from './user/listeMatch/listeMatch.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';




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
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'listeMatch',
    component: ListeMatchComponent
  },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    SignupComponent,
    ListeMatchComponent
    ],
  imports: [
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    BrowserModule,
    RouterModule,
    OrderListModule,
    BrowserAnimationsModule,
    OrderListModule,
    HttpClientModule,
    FormsModule,
    GridModule,
    DropDownsModule,
    RowFilterModule,
    InputsModule,
    DropdownModule,
    LabelModule,
    SlickCarouselModule,
    MatTableModule,
    MatPaginatorModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [HttpClient, TopicService, UserService, MatchServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
