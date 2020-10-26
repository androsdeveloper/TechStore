

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
// import * as FileSaver from 'file-saver';

//optimización
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

import { ProductsService } from './../../../core/services/products/products.service';

import { Product } from './../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  imageObject = [{
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
    title: 'Hummingbirds are amazing creatures'
}, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg'
}, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
    title: 'Example with title.'
},{
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
    title: 'Hummingbirds are amazing creatures'
}, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg'
}, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
    title: 'Example two with title.'
}];
  // product: Product;
  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  //para no usar dos suscribes
  ngOnInit(): void {

    this.product$ = this.route.params
    .pipe(
      switchMap((params: Params) => {
        return this.productsService.getProduct(params.id);
      })
    )
    // .subscribe((product) => {
    //    this.product = product;
    // });

    // this.route.params.subscribe((params: Params) => {
    //   const id = params.id;
    //   this.fetchProduct(id);
    // });
  }

  // fetchProduct(id: string) {
  //   this.productsService.getProduct(id).subscribe(product => {
  //     this.product = product;
  //   });
  // }

  createProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'nuevo desde angular',
      image: 'assets/images/banner-1.jpg',
      price: 3000,
      description: 'Nuevo producto',
      quantity: 1
    }
    this.productsService.createProduct(newProduct).subscribe(product => {
      console.log(product);
    });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      price: 55555,
      description: 'edicion titulo'
    };
    this.productsService.updateProduct('222', updateProduct).subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct() {
    this.productsService.deleteProduct('222').subscribe(product => {
      console.log(product);
    });
  }

  // getRandomUsers() {
  //   this.productsService.getRandomUsers()
  //   .subscribe(users => {
  //     console.log(users);
  //   });
  // }

  // getFile() {
  //   this.productsService.getFile()
  //   .subscribe(content => {
  //     console.log(content);
  //     const blob = new Blob([content], {type: 'text/plain;charset=utf-8'});
  //     FileSaver.saveAs(blob, 'hello world.txt');
  //   });
  // }
}
