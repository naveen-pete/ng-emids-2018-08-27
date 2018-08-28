class Customer {
  id: number;
  name: string;
}

function reverse<T>(items: T[]): T[] {
  let toReturn: T[] = [];
  for (let i = items.length - 1; i >= 0; i--) {
      toReturn.push(items[i]);
  }
  return toReturn;
};

// const reverseStrings = (items: string[]): string[] => {
//   let toReturn: string[] = [];
//   for (let i = items.length - 1; i >= 0; i--) {
//       toReturn.push(items[i]);
//   }
//   return toReturn;
// };

const numbers = [1, 2, 3, 4, 5];
let result: any = reverse<number>(numbers);

console.log('numbers:', numbers);
console.log('result:', result);

const cities = ['Thrissur', 'Kochi', 'Thiruvananthapuram', 'Kozhikode'];
result = reverse<string>(cities);

console.log('cities:', cities);
console.log('result:', result);

const customers: Customer[] = [
  { id: 1, name: 'hari' },
  { id: 2, name: 'krish' },
  { id: 3, name: 'ram' }
];
result = reverse<Customer>(customers);

console.log('customers:', customers);
console.log('result:', result);
