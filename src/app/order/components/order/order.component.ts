import { Component, OnInit } from '@angular/core';
import { Product } from './../../../core/models/product.model';
import { CartService } from './../../../core/services/cart/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  displayedColumns: string[] = ['id', 'image', 'title', 'quantity', 'price', 'description'];

  products$: Observable<Product[]>;

  constructor(
    private cartService: CartService
  ) {
   this.products$ = this.cartService.cart$;
  }

  ngOnInit(): void {
  }

  removeCart(id: string){
    this.cartService.removeCart(id);
    // this.productClicked.emit(this.product.id);
}
}
