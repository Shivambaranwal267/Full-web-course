/*
// object
const y = {
  name: "Shivam",
  age: 26,
  hobbies: ["fitness", "eating", "traveling"],
  foods: {
    sunday: "poha",
    monday: "moong dal",
    tuesday: {

    },
  },
};



y.foods.sunday = 'oats';

console.log(y);
console.log(y['hobbies']);   // bracket notation

y.name = "Anuj";   // dot notation
y.isHuman = 'true';

console.log(y);

const foodskey = "foods";
console.log(y[foodskey]);

console.log(y.hobbies[1]);   // only print for array

for(let key in y) {            // for in loop
    console.log(y[key]);
    // console.log(key);
}
*/


/*
// this function  that returns an object called factory function  
const getVehicle = () => {  
    return {
        type: 'Car',
        wheels: 4
    }
}

console.log(getVehicle());

const myVehicle1 = getVehicle();
const myVehicle2 = getVehicle();

myVehicle2.wheels = 3;

console.log(myVehicle2);
console.log(myVehicle1);

console.log(typeof myVehicle1);   //  object
console.log(typeof getVehicle);   //  function

*/

/*
// object Destructing in ES6

const y = {       
    name: 'Shivam',
    age:26,
    hobbies: ['fitness', 'eating','traveling'],
    foods : {
        sunday: 'poha',
        monday: 'moong dal',
        tuesday: {

        }
    }
}

console.log(y);
// const {age: myAge, name: myName} = y;  // OR 
// const age = y.age;
   //  OR
const {age, name} = y; 


// console.log(myAge,myName);
    // OR
console.log(age,name);

*/


// object methods

/*
const myObj = {
    name: 'Shivam',
    age:26,
    hobbies: ['fitness', 'eating','traveling'],
    // foods : {
    //     sunday: 'poha',
    //     monday: 'moong dal',
    //     tuesday: {

    //     }
    // }
    // walk:() => {
    //     console.log('person is Walking');
    // }
}

console.log(myObj);

myObj.walk = function() {
    console.log('person is Walking');
}

myObj.walk();
console.log(myObj.walk);*/


talking(() => {
    console.log("I am shouting");
})

function talking(shouting) {
    console.log("I am talking");
    shouting();
}
