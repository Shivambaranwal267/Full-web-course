const a = [1, 2, 3, 4, 5, 6];

// function filterNumber() {
const filterNumber = (conditionFunction) => {
  const b = [];
  for (let i = 0; i < a.length; i++) {
    // if (a[i] % 2 == 0) { // logic for checking number
    if ((conditionFunction(a[i]), arr, element)) {
      b.push(a[i]);
    }
  }
  return b;
}


const IsEven = (number) => {
  console.log(number + ' called');
  return number % 2 == 0;
};

const IsOdd = (number) => {
  return number % 2 !== 0;
};

let evenNumber = filterNumber(IsEven);
let OddNumber = filterNumber(IsOdd);

// let evenNumber = filterNumber((number) => { // u also pass anonymous function
//   return number % 3 == 0;
// });

console.log(evenNumber);
console.log(OddNumber);
