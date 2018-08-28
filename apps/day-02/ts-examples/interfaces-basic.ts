interface RectangleOptions {
  length: number;
  width: number;
}

const drawRectangle = (rectOptions: RectangleOptions ) => {
  // logic to draw the rectangle

  console.log('length:', rectOptions.length);
  console.log('width:', rectOptions.width);
}

let o = {
  length: 5,
  width: 10
}

drawRectangle(o);

o = {
  length: 3,
  width: 6
}

drawRectangle(o);

const c = {
  name: 'hari',
  age: 25,
  length: 10,
  width: 20
}

drawRectangle(c);
