import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilComponent } from './profil/profil.component';
import {GridModule} from '@progress/kendo-angular-grid';
import {GridModule} from '@syncfusion/ej2-ng-grids';
import {AgGridModule} from 'ag-grid-angular';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [ ProfilComponent],
  imports: [
    CommonModule,
    GridModule,
    GridModule,
    AgGridModule,
    GridModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class UserModule { }
