const orderpizza = (callback, errorcallback) => {
  bakepizza((pizza) => {
    callback(pizza);
  });
};

const makeDough = (callback) => {
  setTimeout(() => {
    const dough = "🍩";
    console.log("baked the dough", dough);
    callback(dough);
  }, 2000);
};

function bakepizza(callback) {
  makeDough((dough) => {
    setTimeout(() => {
      let pizza = dough + "🍕";
      console.log("baked the", pizza);
      callback(pizza);
    }, 2000);
  });
}

let notifyMeOrSuccess = (pizza) => {
  console.log("Here is my notification for", pizza);
};

orderpizza(notifyMeOrSuccess);
