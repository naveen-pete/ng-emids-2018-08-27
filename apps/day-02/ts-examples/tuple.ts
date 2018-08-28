// Declare a tuple type
let x: [string, number, boolean];
// Initialize it
x = ["hello", 10, false]; // OK

// Initialize it incorrectly
// x = [10, "hello"]; // Error

x[2] = true; // Error, 'boolean' isn't 'string | number'

console.log('x:', x);
