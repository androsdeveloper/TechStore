import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

import * as Sentry from '@sentry/browser';

interface User {
  email: string;
  gender: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(){
    return this.http.get<Product[]>(`${ environment.url_Api }/${ environment.url_products }`);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${ environment.url_Api }/${ environment.url_products }/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post(`${ environment.url_Api }/${ environment.url_products }`, product);
  }

  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put(`${ environment.url_Api }/${ environment.url_products}/${id}`, changes);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${ environment.url_Api }/${ environment.url_products}/${id}`);
  }

  getRandomUsers(): Observable<User[]> {
    return this.http.get('https://randomuser.me/api/?results=2')
    .pipe(
      retry(3),
      catchError(this.handleError),
      map((response: any) => response.results as User[])
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    Sentry.captureException(error);
    return throwError('Ups algo salió mal');
  }
}
