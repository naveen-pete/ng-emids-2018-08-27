function withdraw(amount) {

  const p = new Promise((resolve, reject) => {
    console.log('withdrawal started');
    setTimeout(() => {
      console.log('withdrawal ended');
      // resolve(amount); // if successful
      reject({reason: 'insufficient balance'}); // if failed
    }, 5000);
  });

  return p;

}

const p = withdraw(5000);
p.then((amount) => {
  console.log('print passbook, amount withdrawn:', amount);
})
p.catch((e) => {
  console.log('withdraw failed, reason:', e.reason);
});

console.log('apply loan');
