import { Component } from "@angular/core";
import { ShopingCartService } from  'src/app/shared/services/shoping-cart.service'

@Component({
    selector: 'app-cart',
    template: `
    <ng-container *ngIf="{ total: total$ | async, quantity: quantity$ | async } as dataCart">
        <ng-container *ngIf="dataCart.total">
        <mat-icon>add_shopping_cart</mat-icon>
        {{dataCart.total | currency}}
        ({{dataCart.quantity}})
        </ng-container>
    </ng-container>
    `
})

export class CartComponent {

    quantity$ = this.shopingCartSvc.quantityAction$;
    total$ = this.shopingCartSvc.totalAction$;
    cart$ = this.shopingCartSvc.cartAction$;

    constructor(private shopingCartSvc: ShopingCartService){}
  
}