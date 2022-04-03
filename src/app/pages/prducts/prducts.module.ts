import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrductsRoutingModule } from './prducts-routing.module';
import { PrductsComponent } from './prducts.component';
import { ProductComponent } from './product/product.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    PrductsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    PrductsRoutingModule,
    MaterialModule
  ]
})
export class PrductsModule { }
