/*
const orderPizza = () => {
  //   setTimeout(() => {
  //     let pizza = "🍕";
  //   }, 2000);

 

  return new Promise(function (resolve, reject) {
    // ap kuch bhi likh skte hai resolve ya reject ke badle
    setTimeout(() => {
      const isAvailable = false;
      if (isAvailable) {
        let pizza = "🍕";
        resolve(pizza);
      } else {
        reject("we do not have pizza");
      }
      // reject(pizza);
    }, 2000);
  });
};

const PizzaPromise = orderPizza();

PizzaPromise.then((pizza, error) => {
  // resolve called resove
  console.log("my Pizza", pizza);
  console.log(error);
}).catch((error) => {
  // reject call catch
  console.log("error Occured", error); //  error occured
});
*/


// railway ticket

// select seats
// enter name/details
// payment method


bookRailwayTicket();

function bookRailwayTicket() {
  const seats = "A3;";
  const name = "shivam";
  const payment = "870";
  selectSeats(seats)
    .then((seats) => {
      enterDetails(name, seats);
    })
    .then((details) => {
      submitpayment(name, seats, payment);
    });
}

function selectSeats(seat) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("seats confirmed", seat);
      resolve(`confirmed ${seat}`);
    }, 2000);
  });
}


function enterDetails(name, seat) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("name binded", name, "with", seat);
      resolve(`confirmed ${name} ${seat}`);
    }, 2000);
  });
}

function submitpayment(name, seat, payment) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("payment confirmed", name, "with", payment);
      resolve(`confirmed ${name} ${seat} ${payment}`);
    }, 2000);
  });
}

