import { addition, substraction } from "./utility.js";
// import { addition as add, substraction } from "./utility.js";
                // nameChange


import multiply from "./utility.js"; // BY Default export
const a = 5;
const b = 3;

const result1 = addition(a,b);
// const result1 = add(a, b);
const result2 = substraction(a, b);
const result3 = multiply(a, b);  // default //  you can use random name also for  default

console.log(result1);
console.log(result2);
console.log(result3);  // default output
