import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AgGridModule} from 'ag-grid-angular';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
    declarations: [],
    exports: [
    ],
    imports: [
        CommonModule,
        AgGridModule,
        MatTableModule,
        MatPaginatorModule
    ]
})
export class UserModule { }
