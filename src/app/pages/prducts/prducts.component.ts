import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ShopingCartService } from 'src/app/shared/services/shoping-cart.service';
import { ProductsService } from '../products/services/products.service';
import { Product } from './interfaces/product.interface';

@Component({
  selector: 'app-prducts',
  template: `
  <section class="products">
    <app-product (addToCartClick)="addToCart($event)"
    [product]="product" *ngFor="let product of products"></app-product>
  </section>
  `,
  styleUrls: ['./prducts.component.scss']
})
export class PrductsComponent implements OnInit {
  products!: Product[];

  constructor(private productSvc: ProductsService, private shopingCartSvc: ShopingCartService) { }

  ngOnInit(): void {
    this.productSvc.getProducts()
    .pipe(
      tap( (products: Product[]) => this.products = products)
    )
    .subscribe();
  }

  addToCart(product: Product): void {
    console.log('add to cart', product);
    this.shopingCartSvc.updateCart(product);
  }
}
