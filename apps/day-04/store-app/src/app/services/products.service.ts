import { Injectable } from '@angular/core';

import { Product } from '../models/product';
import { LoggerService } from './logger.service';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'product 1',
      description: 'product 1 desc',
      price: 1000,
      isAvailable: true
    },
    {
      id: 2,
      name: 'product 2',
      description: 'product 2 desc',
      price: 2000,
      isAvailable: false
    },
    {
      id: 3,
      name: 'product 3',
      description: 'product 3 desc',
      price: 3000,
      isAvailable: true
    }
  ];

  constructor(private ls: LoggerService) {}

  // ProductsComponent
  getProducts() {
    this.ls.log('ProductsService.getProducts() called');
    return this.products;
  }

  // ProductFormComponent
  addProduct(product: Product) {
    this.products.unshift(product);
    this.ls.log('ProductsService.addProduct() called');
  }
}
