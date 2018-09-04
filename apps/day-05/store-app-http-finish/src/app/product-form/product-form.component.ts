import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  id: number;
  product: Product;
  addNew: boolean;
  @ViewChild('f') productForm: NgForm;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductsService
  ) {
    this.product = new Product();
    this.addNew = true;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(map => {
      if (map.get('id')) {
        this.id = +map.get('id');

        this.service.getProduct(this.id).subscribe(
          (product) => {
            console.log('Get product successful.');
            this.product = product;
            this.addNew = false;
          },
          (e) => {
            console.log('Get product failed.');
            console.log('Error:', e);
          }
        );
      }
    });
  }

  onSubmit() {
    this.product.name = this.productForm.value.name;
    this.product.description = this.productForm.value.description;
    this.product.price = +this.productForm.value.price;
    this.product.isAvailable = this.productForm.value.isAvailable
      ? this.productForm.value.isAvailable
      : false;

    if (this.addNew) {
      this.service.addProduct(this.product).subscribe(
        (product) => {
          console.log('New product saved successfully.');
          console.log('product:', product);
          this.router.navigate(['/products']);
        },
        (e) => {
          console.log('Add product failed.');
          console.log('Error:', e);
        }
      );
    } else {
      this.service.updateProduct(this.id, this.product).subscribe(
        (product) => {
          console.log('Product updated successfully.');
          console.log('product:', product);
          this.router.navigate(['/products']);
        },
        (e) => {
          console.log('Update product failed.');
          console.log('Error:', e);
        }
      );
    }
  }
}
