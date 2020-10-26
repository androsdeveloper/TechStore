import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  DoCheck,
  OnDestroy
} from '@angular/core';


import { CartService } from './../../../core/services/cart/cart.service';

import {Product} from './../../../core/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {

  public inputQuantity = 1;

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter<any>();

  today = new Date();

  constructor(
      private cartService: CartService
  ){
      console.log('1. constructor');
  }

  // ngOnChanges(changes: SimpleChanges) {
  //     console.log('2. ngOnChanges');
  //     console.log(changes);
  // }

  ngOnInit() {
      console.log('3. ngOnInit');
  }

  // Es igual que ngOnChange, sólo que ngDoCheck es custom

  ngDoCheck() {
      console.log('4. ngDoCheck');
  }

  ngOnDestroy() {
      console.log('5. ngOnDestroy');
  }

  addCart(){
      console.log('Añadir al carrito', this.product);
      this.product.quantity = this.inputQuantity;
      this.product.price = 67;
      this.cartService.addCart(this.product);
      // this.productClicked.emit(this.product.id);
  }
}
