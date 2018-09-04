
// Assume my balance is Rs. 10,000
// 1. Withdraw money - Rs. 5,000
// 2. Update passbook 
//    Should reflect withdraw operation of Rs. 5,000
// 3. Apply for a loan

function withdraw(amt) {
  let p = new Promise((resolve, reject) => {
    console.log('Start withdraw operation');
    setTimeout(() => {
      // actual operation happens here 

      resolve(amt);
      // reject({ message: 'You do not have sufficient balance' });

      // console.log('Your operation is successful, amount withdrawn: Rs.', amt);
      // console.log('End withdraw operation');
    }, 5000);
  });

  return p;
}

let amount = 5000;

console.log('Start banking operations');

let p = withdraw(amount);
p.then((a) => {
  console.log('Your withdraw operation is successful');
  console.log('Print passbook, you withdrew: Rs.', a);
});
p.catch((e) => {
  console.log('Your withdraw operation is failed. Please contact the manager.');
  console.log('Reason:', e.message);
});

console.log('Apply loan');
console.log('End banking operations');
