import { Component } from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  products: Product[] = [
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

  onProductCreated(product: Product) {
    console.log('productCreated event handler called, product:', product);
    this.products.unshift(product);
  }
}
