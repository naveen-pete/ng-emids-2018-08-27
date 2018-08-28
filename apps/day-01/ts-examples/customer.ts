class Customer {
  protected name: string;
  public id: number;
  protected address: string;

  constructor() {

  }
}

interface B {

}

class A extends Customer implements B {

  get Name() {
    return this.name;
  }

  set Name(v) {
    this.name = v;
  }

}