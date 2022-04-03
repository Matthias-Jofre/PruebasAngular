import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrductsComponent } from './prducts.component';

const routes: Routes = [{ path: '', component: PrductsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrductsRoutingModule { }
