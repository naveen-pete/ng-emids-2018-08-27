import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  productName: string = 'Dell Inspiron Laptop';

  onSave(e) {
    console.log('Save button clicked.');
    console.log('e:', e);
  }
}
