// Optional params
const getTotalAmount1 = (amount: number, interest?: number): number => {
  let totalAmount;

  if(interest) {
    totalAmount = amount + (amount * interest / 100);
  } else {
    totalAmount = amount + (amount * 8 / 100);
  }
    
  return totalAmount;
};

console.log('total amount (100, 10):', getTotalAmount1(100, 10));
console.log('total amount (200):', getTotalAmount1(200));
// console.log('total amount (200, 10, 20):', getTotalAmount(200, 10, 20));
