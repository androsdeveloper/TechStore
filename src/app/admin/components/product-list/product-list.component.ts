import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../core/services/products/products.service';
import { Product } from './../../../core/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productdService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productdService.getAllProducts()
    .subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: string){
    this.productdService.deleteProduct(id)
    .subscribe(rta => {
      this.products = this.products.filter(product => product.id !== id);
    });
  }

}
