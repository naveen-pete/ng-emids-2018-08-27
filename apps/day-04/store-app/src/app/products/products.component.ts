import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';
import { LoggerService } from '../services/logger.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private ls: LoggerService, private ps: ProductsService) {}

  ngOnInit() {
    this.products = this.ps.getProducts();
  }

  // onProductCreated(product: Product) {
  //   this.products.unshift(product);

  //   this.ls.log('New product added to the array.');
  // }
}
