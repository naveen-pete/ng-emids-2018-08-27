// Array destructuring
const companies = ['manappuram', 'tcs', 'wipro', 'bajaj'];

// const c1 = companies[0];
// const c2 = companies[1];

const [c1, c2, ...otherCompanies] = companies;

console.log('c1:', c1);
console.log('c2:', c2);
console.log('otherCompanies:', otherCompanies);

const product = {
  id: 1,
  name1: 'Samsung Galaxy',
  price: 25000,
  isAvailable: true
};

// const name1 = product.name1;
// const price = product.price;

const {name1, price} = product;

console.log('name1:', name1);
console.log('price:', price);

// const product2 = {
//   id: product.id,
//   name1: product.name1,
//   price: product.price,
//   isAvailable: product.isAvailable
// }

const product2 = {
  ...product
};

console.log('product:', product);
console.log('product2:', product2);