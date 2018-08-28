const products = [
  {
    id: 1,
    name1: 'Samsung Galaxy',
    price: 25000,
    isAvailable: true
  },
  {
    id: 2,
    name1: 'Moto X',
    price: 30000,
    isAvailable: true
  }
];

for(let i=0; i<products.length; i++) {
  const {id, name1, price} = products[i];

  console.log('product id:', id)
  console.log('  name1:', name1);
  console.log('  price:', price);
  
}
