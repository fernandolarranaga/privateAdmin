import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//modulos exportados angular material
import { MatButtonModule} from "@angular/material/button";
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], 
  exports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }