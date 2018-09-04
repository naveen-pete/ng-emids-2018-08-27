import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private service: ProductsService) {}

  ngOnInit() {
    this.service.getProducts().subscribe(
      (products) => {
        console.log('Get products successful.');
        console.log('products:', products);
        this.products = products;
      },
      (e) => {
        console.log('Get products failed.');
        console.log('Error:', e.message);
      }
    );
  }

  onDelete(productId) {
    if (confirm('Are you sure?')) {
      this.service.deleteProduct(productId).subscribe(
        () => {
          console.log('Delete product successful.');
          this.products = this.products.filter(product => product.id !== productId);
        },
        (e) => {
          console.log('Delete product failed.');
          console.log('Error:', e.message);
        }
      );
    }
  }
}
