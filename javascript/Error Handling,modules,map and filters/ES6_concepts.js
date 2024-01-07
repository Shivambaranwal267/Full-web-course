/*
// destructing

const obj = {
  name: "Shivam",
  age: 26,
};

const { name, age: myAge } = obj;

// console.log(obj);

// default parameter

function greet(name = "What is your name") { // passing default parameter
  console.log("hello " + name);
}

greet(); // calling default parameter
greet("Shivam");
*/

// Rest/spread operator

function greet(...args) {
  console.log("hello", args[0]);
}

// greet();
greet("shivam", "anuj", 12);

const a = [1, 2, 3];
const b = [...a, 4, 5, 6];

console.log(b);

const animal = {
  name: "Simba",
  age: 23,
};

const fullinformation = {
  ...animal,
  address: "pahad",
  legs: 4,
};

console.log(fullinformation);
