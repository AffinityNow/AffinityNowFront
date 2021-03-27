import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilComponent } from './profil/profil.component';
import {GridModule} from '@syncfusion/ej2-ng-grids';
import {AgGridModule} from 'ag-grid-angular';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {UserprofilComponent } from './userprofil/userprofil.component';
import { MailComponent } from './mail/mail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EmailComponent } from './email/email.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [ ProfilComponent, UserprofilComponent, MailComponent, EmailComponent],
  imports: [
    CommonModule,
    GridModule,
    GridModule,
    AgGridModule,
    GridModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
