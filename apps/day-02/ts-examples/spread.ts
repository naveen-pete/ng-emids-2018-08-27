// Spread syntax
const defaultColors = ['red', 'green', 'blue'];
const myColors = ['white', 'black'];

const allColors1 = [ defaultColors, myColors ];
const allColors2 = [ 'purple', ...defaultColors, 'yellow', ...myColors, 'brown' ];

console.log('allColors1:', allColors1, 
' length:', allColors1.length);
console.log('allColors2:', allColors2, 
' length:', allColors2.length);
