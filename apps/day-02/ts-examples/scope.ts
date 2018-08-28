
var x = 10;

console.log('x:', x);

// if, for
function hello()
{
  {
    const y = 20;

    console.log('(inside block) y:', y);
  }

  console.log('(outside block before) y:', y);
  //y = 30;
  console.log('(outside block after) y:', y);
  
}

hello();
