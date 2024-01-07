async function getcheese() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("cheese 🧀");
    }, 1000);
  });
}

function makeDough(cheese) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${cheese} dough 🍩`);
    }, 3000);
  });
}

function makePizza(dough) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${dough} pizza 🍕`);
    }, 4000);
  });
}

async function orderPizza() {
  try {
    const cheese = await getcheese();
    console.log("now we have", cheese);
    const dough = await makeDough(cheese);
    console.log("now we have", dough);
    const pizza = await makePizza(dough);
    console.log("now we have", pizza);
    return pizza;
  } catch (error) {
    console.log(error);
  }
}
orderPizza()
  .then((pizza) => {
    console.log(pizza);
  })
  .catch((e) => {});
