import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: ``, redirectTo: `/products`, pathMatch: `full`},
  { path: 'products', loadChildren: () => import('./pages/prducts/prducts.module').then(m => m.PrductsModule) },
  { path: 'checkout', loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule) },
  {path: `**`, redirectTo: ``, pathMatch: `full`},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
