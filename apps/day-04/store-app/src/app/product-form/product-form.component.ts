import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Product } from '../models/product';
import { LoggerService } from '../services/logger.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  // @Output() productCreated = new EventEmitter<Product>();
  product: Product = new Product();
  showMessage: boolean = false;

  constructor(private ls: LoggerService, private ps: ProductsService) { }

  ngOnInit() { }

  onSubmit() {
    this.ls.log('Emitting new product object from product form.');

    // this.productCreated.emit(this.product);
    this.ps.addProduct(this.product);
    this.product = new Product();
    this.showMessage = true;

    setTimeout(() => {
      this.showMessage = false;
    }, 4000);
  }
}
