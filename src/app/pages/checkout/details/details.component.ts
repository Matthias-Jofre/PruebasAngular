import { Component, OnInit } from '@angular/core';
import { ShopingCartService } from 'src/app/shared/services/shoping-cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  total$ = this.shoppingCartSvc.totalAction$;
  cart$ = this.shoppingCartSvc.cartAction$;

  constructor(private shoppingCartSvc: ShopingCartService) { }

  ngOnInit(): void {
  }

}
