
// const sum = (numbers: number[]): number => {
//   let s = 0;
//   for(let i=0; i < numbers.length; i++) {
//     s = s + numbers[i];
//   }
//   return s;
// };

// console.log('2 numbers:', sum([1, 2]));
// console.log('5 numbers:', sum([10, 20, 30, 40, 50]));

// rest parameter syntax
const sum = (...numbers): number => {
  let s = 0;
  for(let i=0; i < numbers.length; i++) {
    s = s + numbers[i];
  }
  return s;
};

console.log('rest 2 numbers:', sum(1, 2));
console.log('rest 5 numbers:', sum(10, 20, 30, 40, 50));

