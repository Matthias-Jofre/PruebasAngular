import { Component} from '@angular/core';
import { Router } from '@angular/router';

//El decorardor marca el comportamiento de la clase 
@Component({
  selector: 'app-header',
  //template inline
  template: `
  <mat-toolbar color="primary">
  <a [routerLink]= "['/']" ><span>My store</span></a>
  <span class="spacer"></span>
  <app-cart class="mouseHover" (click)="goToCheckout()"></app-cart>
  </mat-toolbar>
  `,
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent  {
  constructor(private router: Router){}

  goToCheckout(): void {
    this.router.navigate(['/checkout']);
  }
}
