class Vehicle {
  constructor(name, wheels, isDeisel) {
    this.name = name;
    this.wheels = wheels;
    this.isDeisel = isDeisel;
  }

  drive() {
    console.log("you are driving");
  }
  break() {
    console.log("Break is applied");
  }
}

const car = new Vehicle("BMW", 4,true); 
const bike = new Vehicle("KTM", 2,false);

for (let key in car){
    console.log(car[key]);
}

for (let key in bike){
  console.log(bike[key]);
}


const jsonCar = JSON.stringify(car);
const jsonbike = JSON.stringify(bike);

console.log(jsonCar);
console.log(jsonbike);








/*class Vehicle {
  constructor(name, wheel, isdeisel) {
    this.name = name;
    this.wheels = wheel;
    this.isDeisel = isdeisel;
  }
  drive() {
    console.log("You are driving");
  }
  break() {
    console.log("Break is applied.");
  }
}

const car = new Vehicle("BMW", 4, true);
const bike = new Vehicle("Ninja H2R", 2, false);

for (const key in car) {
  console.log(car[key]);
}

const jsonCar = JSON.stringify(car);
const jsonBike = JSON.stringify(bike);

console.log(jsonCar);
console.log(jsonBike);



















/*class Vehical {
    constructor(name, wheel, isDeisel, sheet, isAbs) {
      this.name = name;
      this.wheel = wheel;
      this.isDeisel = isDeisel;
      this.sheet = sheet;
      this.isAbs = isAbs;
    }
  
    greet() {
      console.log(
        "Car name is: " +
          this.name +
          "\n" +
          "Wheel is: " +
          this.wheel +
          "\n" +
          "Is a diesel engine: " +
          "" +
          this.isDeisel +
          "\n" +
          "Car sheet size: " +
          this.sheet +
          "\n" +
          "is Abs available: " +
          this.isAbs
      );
    }
    driving = () => {
      console.log("You can drive");
    };
    Break = () => {
      console.log("Break Maro");
    };
  }
  
  // a.Make multiple objects of these class with different properties.
  
  let car1 = new Vehical("BMW", 4, false, "4x4", true);
  let car2 = new Vehical('Nano',4,true,'4x4',false,);
  let car3 = new Vehical('Tempu',3,true,'jitna man utna',false);
  // console.log(car.wheel);
  car1.greet();
  car2.greet();
  car3.greet();
  // car.driving();
  
  // c.Convert the objects to JSON Strings
  
  // const obj = JSON.stringify(car);
  // console.log(obj);
  
  // b. Iterate through the object using the for loops
  
  // for( const key in car) {
  //     console.log(car[key]);
  // }
  
  // console.log(typeof car.isDeisel)
  */
