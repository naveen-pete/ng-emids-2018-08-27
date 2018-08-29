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

// In JavaScript, functions are first-class citizens

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
const add = (a: number, b: number): number => a + b;
// const subtract = (a, b) => a - b; // return a - b;

// arrow function syntax
// #3
const square = (x: number): number => x * x;

// const sayHello = () => {
//   console.log('hello typescript');
// }


console.log('10 + 20:', add(10, 20));
// console.log('40 - 30:', subtract(40, 30));

console.log("square(5):", square(5));

// sayHello();
