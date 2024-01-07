
// const orderPizza = (callback) => {
//   // koi bhi argument pass kar skte ho
//   setTimeout(() => {
//     let Pizza = "🍕";
//     callback(Pizza); // ap kuch bhi likh skte ho callback ke badle but wo callback hi pass karega

//     return Pizza;
//   }, 2000);
// };


// callback hell
const orderPizza = (myFunction) => {  // my function is a callback function
  getCheese((cheese) => {
    makeDough(cheese, (dough) => {
      bakePizza(dough, (pizza) => {
        myFunction(pizza);
      });
    });
  });
};

const getCheese = (callback) => {
  setTimeout(() => {
    let cheese = "🧀";
    console.log(`Sending the ${cheese}`);
    callback(cheese);
  }, 2000);
};

function makeDough(cheese, callback) {
  setTimeout(() => {
    let dough = cheese + "🍩";
    console.log(`Sending the ${dough}`);
    callback(dough);
  }, 2000);
}

function bakePizza(dough, callback) {
  setTimeout(() => {
    let pizza = dough + "🍕";
    console.log(`Sending the ${pizza}`);
    callback(pizza);
  }, 2000);
}


function notifyMeOrSuccess(pizza) {
  console.log("Here is my notification for", pizza);
}

// orderPizza((pizza) => {
//   console.log("here is my", pizza);
// });

orderPizza(notifyMeOrSuccess);

console.log("visited");

console.log("rest");

// console.log(Pizza);
