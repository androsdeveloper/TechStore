import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Product } from './../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable();
  constructor() { }

  addCart(product: Product) {
    const check = this.products.filter(prod => prod.id === product.id);
    if (check.length === 0) {
      this.products = [...this.products, product];
      this.cart.next(this.products);
    }
  }

  removeCart(id: string) {
    this.products = this.products.filter(prod => prod.id !== id);
    this.cart.next(this.products);
  }

}
