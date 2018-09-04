import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { Product } from '../models/product';

// Http Methods
// 1. GET
// 2. POST
// 3. PUT / PATCH
// 4. DELETE

@Injectable()
export class ProductsService {
  private apiUrl = 'http://localhost:3000/products';

  constructor(private httpClient: HttpClient) {}

  getProducts() {
    const headers = new HttpHeaders().set('AUTH', 'abc123');
    return this.httpClient
      .get<Product[]>(this.apiUrl, {headers: headers})
      .pipe(
        // How to use map operator??
        // map((products) => {
        //   const newProducts = products.map(
        //     product => ({ id: product.id, name: product.name })
        //   );
        //   return newProducts;
        // }),
        catchError((error) => {
          console.log('Logging actual error:', error);
          return throwError(new Error('Something went wrong, please contact administrator'));
        })
      );
  }

  getProduct(id: number) {
    return this.httpClient.get<Product>(`${this.apiUrl}/${id}`);
  }

  addProduct(product: Product) {
    return this.httpClient.post<Product>(this.apiUrl, product);
  }

  updateProduct(id: number, product: Product) {
    return this.httpClient.patch<Product>(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: number) {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
}
