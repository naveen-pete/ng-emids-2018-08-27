// Static methods
class Plane {
  enginesActive: boolean;

  constructor(public name: string, public numEngines: number) {
    this.numEngines = numEngines;
    this.enginesActive = false;
  }

  startEngines() {
    console.log(`starting engines for plane ${this.name}` );
    this.enginesActive = true;
  }

 static badWeather(...planes) {
    for (let plane of planes) {
      console.log(`stopping engines for plane ${plane.name}...`);
      plane.enginesActive = false;
    }
  }
}

const plane1 = new Plane('boeing', 2);
plane1.startEngines();

const plane2 = new Plane('airbus', 4);
plane2.startEngines();

Plane.badWeather(plane1, plane2);
