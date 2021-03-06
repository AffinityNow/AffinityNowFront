import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilComponent } from './profil/profil.component';
import {GridModule} from '@progress/kendo-angular-grid';
import {GridModule} from '@syncfusion/ej2-ng-grids';
import {AgGridModule} from 'ag-grid-angular';


@NgModule({
  declarations: [ ProfilComponent],
  imports: [
    CommonModule,
    GridModule,
    GridModule,
    AgGridModule,
    GridModule
  ]
})
export class UserModule { }
