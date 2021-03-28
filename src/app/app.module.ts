import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {HomeComponent} from './shared/home/home.component';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {FooterComponent} from './shared/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './shared/header/header.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {SignupComponent} from './user/signup/signup.component';
import {OrderListModule} from 'primeng/orderlist';
import {TopicService} from './shared/service/TopicService';
import {UserService} from './shared/service/user.service';
import {GridModule, RowFilterModule} from '@progress/kendo-angular-grid';
import {DropDownsModule} from '@progress/kendo-angular-dropdowns';
import {InputsModule} from '@progress/kendo-angular-inputs';
import {DropdownModule} from 'primeng/dropdown';
import {LabelModule} from '@progress/kendo-angular-label';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatchOptionComponent} from './user/matchOption/matchOption.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {MatSortModule} from '@angular/material/sort';
import {MatchResComponent} from './user/matchRes/matchRes.component';
import {CarouselModule} from 'primeng/carousel';
// import { CarouselModule } from 'ngx-owl-carousel-o';
import {ButtonModule} from 'primeng/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MultiSelectModule} from 'primeng/multiselect';
import {SelectButtonModule} from 'primeng/selectbutton';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ProfilComponent} from './user/profil/profil.component';
import {UserprofilComponent} from './user/userprofil/userprofil.component';
import {MailComponent} from './user/mail/mail.component';
import {ConnectionComponent} from './user/connection/connection.component';
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'connect',
    component: ConnectionComponent
  },
  {
    path: 'matchOption',
    component: MatchOptionComponent
  },
  {
    path: 'profil',
    component: ProfilComponent
  },
  {
    path: 'mail',
    component: MailComponent
  },
  ];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ConnectionComponent,
    SignupComponent,
    MatchOptionComponent,
    MatchResComponent,
    ProfilComponent,
    UserprofilComponent,
    MailComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    OrderListModule,
    BrowserAnimationsModule,
    OrderListModule,
    HttpClientModule,
    GridModule,
    DropDownsModule,
    RowFilterModule,
    InputsModule,
    DropdownModule,
    NgSelectModule,
    LabelModule,
    SlickCarouselModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSortModule,
    CarouselModule,
    ButtonModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonToggleModule,
    MatButtonModule,
    MultiSelectModule,
    SelectButtonModule,
    ButtonModule,
    BrowserModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [HttpClient, TopicService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
