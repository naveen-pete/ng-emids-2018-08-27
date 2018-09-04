import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product = new Product();
  id: number;

  constructor(
    private service: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.service.getProduct(this.id).subscribe(
        (product) => {
          console.log('Get product successful.');
          this.product = product;
        },
        (e) => {
          console.log('Get product failed.');
          console.log('Error:', e);
        }
      );

    });
  }

  onDelete() {
    if (confirm('Are you sure?')) {
      this.service.deleteProduct(this.id).subscribe(
        () => {
          console.log('Delete product successful.');
          this.router.navigate(['/products']);
        },
        (e) => {
          console.log('Delete product failed.');
          console.log('Error:', e.message);
        }
      );
    }
  }
}
