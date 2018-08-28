abstract class Animal { 
  // name: string;
  // private name: string;
  
  constructor(public name: string) {
    // this.name = name;
  }
  
  abstract speak();
}

class Dog extends Animal {
  constructor(name, private color) {
    super(name);
    // this.color = color;
  }

  showColor() {
    console.log(`${this.name} is ${this.color} in color.`);
  }
  
  speak() {
    console.log(this.name + ' barks.');
  }
}

class Lion extends Animal {
  constructor(name, private color = 'ochre') {
    super(name);
  }

  showDetails() {
    console.log('name:', this.name);
    console.log('color:', this.color);
  }

  speak() {
    console.log(this.name + ' roars.');
  }
}

class Cat extends Animal {
  speak() {
    console.log(this.name + ' meow.');
  }
}

// const a = new Animal('snowy');
// a.speak();

const d = new Dog('tomy', 'white');
d.speak();
d.showColor();

const l = new Lion('leo');
l.speak();
l.showDetails();

const k = new Cat('kitty');
k.speak();
