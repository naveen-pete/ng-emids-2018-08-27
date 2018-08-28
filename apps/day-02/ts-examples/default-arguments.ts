// Default function arguments
const getFullName = 
  (firstName: string, lastName: string = 'kumar'): string => `Full name is ${lastName}, ${firstName}`;

let fn = getFullName('ram', 'singh');
console.log('full name:', fn);

fn = getFullName('krish');
console.log('full name:', fn);

const getTotalAmount = (amount, interest = 8) => {
  const totalAmount = amount + (amount * interest / 100);
  return totalAmount;
};

console.log('total amount (100, 10):', getTotalAmount(100, 10));
console.log('total amount (200):', getTotalAmount(200));
// console.log('total amount (200, 10, 20):', getTotalAmount(200, 10, 20));
