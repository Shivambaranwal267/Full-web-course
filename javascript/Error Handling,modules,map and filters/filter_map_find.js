/*
//  filter
// important note: it does not change the original array
// it give so only boolean value
// it is higher order function
const a = [11, 22, 31, 44, 57, 68, 72, 81];

const iseven = (num) => {
  return num % 2 == 0;
};

const isodd = (num) => {
  return num % 2 !== 0;
};

// let count = 1;

// const result = a.filter((element, index, arr) => {
//   console.log(element, index, arr,  count++);
//   return true;
// });

const result = a.filter((element) => {    // if boolean value true then its return
  return element % 3 == 0;
});

console.log(result);

const result1 = a.filter(iseven);
const result2 = a.filter(isodd);

console.log(result1 + " even");
console.log(result2 + " odd");

console.log(a);

*/

/*
// map
// its return all type of value

const a = [11, 22, 31, 44, 57, 68, 72, 81];

const iseven = (num) => {
  return num % 2 == 0;
};

const isodd = (num) => {
  return num % 2 !== 0;
};

function square(num) {
  return num * num;
}

function negative(num) {
  return -num;
}

// // javascript also gives in decimal value also

// const result1 = a.map((num) => num / 2);
// const result1 = a.map((num) => "my num is " + num) // string passes
// const result1 = a.map(square);
// const result2 = a.filter(negative); // in map its gives only negative number but in filter its same number
// const result2 = a.map(iseven) // its gives boolean value


// console.log(result1);
console.log(result2);
*/

// find
// when u use only only single element will show

/*
const a = [1, 2, 3, 4, 5, 6, 7];

const found = a.find((element) => element % 2 == 0);

console.log(found);
*/

const students = [
  {
    name: "Shivam",
    marks: 33,
  },
  {
    name: "Anuj",
    marks: 76,
  },
  {
    name: "suraj",
    marks: 67,
  },
  {
    name: "Salman",
    marks: 99,
  },
];

const grades = students.map((element) => {
  if (element.marks > 50) {
    element.isPassed = true;
  } else {
    element.isPassed = false;
  }
  return element;
});

const found = students.find((element) => {
  return element.marks > 50;
});

// only give one value

console.log(found);
console.log(grades);
