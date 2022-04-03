import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Product } from "src/app/pages/prducts/interfaces/product.interface";

@Injectable({
    providedIn: 'root'
})

export class ShopingCartService {
    products: Product[] = [];

    private cartSubject = new Subject<Product[]>();
    private totalSubject = new Subject<number>();
    private quantitySubject = new Subject<number>();

    // Por nomenclatura para definir observables se añade $ al final de la variable

    get totalAction$(): Observable<number> {
        return this.totalSubject.asObservable();
    }

    get quantityAction$(): Observable<number> {
        return this.quantitySubject.asObservable();
    }

    get cartAction$(): Observable<Product[]> {
        return this.cartSubject.asObservable();
    }

    updateCart(product: Product): void {
        this.addCart(product);
        this.quantityProducts();
        this.calcTotal();
    }

    private addCart(product: Product): void {
        this.products.push(product);
        this.cartSubject.next(this.products);
    }

    private quantityProducts(): void {
        const quantity = this.products.length;
        this.quantitySubject.next(quantity);
    }

    private calcTotal(): void {
        const total = this.products.reduce((acc,prod) => acc += prod.price, 0);
        this.totalSubject.next(total);
    }
    
}