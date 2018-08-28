// JS syntax
// function add(a, b) {
//   const c = a + b;
//   return c;
// }

// TS syntax
// function add(a: number, b: number): number {
//   const c = a + b;
//   return c;
// }

// function expression syntax
// const add = function (a: number, b: number): number {
//   const c = a + b;
//   return c;
// };

// arrow function syntax
// #1
// const add = (a, b) => {
//   const c = a + b;
//   return c;
// };

// arrow function syntax
// #2
const add = (a, b) => a + b;

// arrow function syntax
// #3
const square = x => x * x;

const sayHello = () => {
  console.log('hello typescript');
}


console.log('10 + 20:', add(10, 20));
console.log('30 + 40:', add(30, 40));

console.log("square(5):", square(5));

sayHello();