class Product {
  name: string;
  price: number;

  constructor(name: string, price: number = 10000) {
    this.name = name;
    this.price = price;
  }

  showDetails() {
    console.log('  name:', this.name );
    console.log('  price:', this.price );
  }
}

let p1: Product = new Product('Samsung Galaxy', 25000);
// p1.name = 'Samsung Galaxy';
// p1.price = 25000;

p1.showDetails();

const p2: Product = new Product('Moto X');
// p2.name = 'Moto X';
// p2.price = 30000;

p2.showDetails();
