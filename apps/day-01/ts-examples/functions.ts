function sayHi() {
  console.log('Hi');
}

function sayHi1(name: string): string {
  console.log('Hi', name);
  return 'Hi ' + name;
}

var a = 10;

function scopeDemo() {
  var b = 20;

  console.log('a:', a);
  console.log('b:', b);

  {
    let c = 30;
    console.log('within block c:', c);
  }

  console.log('outside block c:', c);
}

// console.log('outside function c:', c);

scopeDemo();
