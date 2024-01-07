// this is synchronize code bcuse it lie in a straight maanner/line of code
// const a = 23;

// const b = 12;

// const c = a + b;   // it takes nanosec to run

// console.log("Ordering burger");
// for (let i = 0; i < 5000000000; i++) {
//   let n = i * 987897000000000;
// }
// console.log("burger eaten");

// const d = 12;

// function greet(obj) {
//   console.log("Hello " + obj.name);
// }

// console.log("before greet");

// anonymous function
// setTimeout(() => {
//   greet("Shivam");
// }, 2000);

// const greetTimeout =  setTimeout(() => {
//     greet({
//         name: "Shivam"
//     })
// }, 2000)

// const timeoutId = setTimeout(() => {
//   greet("Shivam");
// }, 2000);

// const goodNightTimeoutId = setTimeout(() => {
//     console.log('Good Night');
// }, 4000)

// clearTimeout(timeoutId); // clear a setTimeout

// time takes in millisecond(ms) i.e: 1s = 1000ms
// setTimeout(greet("Shivam"), 5000 ); // it direct executes
//setTimeout(greet, 5000, "Shivam" );

// console.log("this is written after greet");

// greet();

/// setInterval

// frequently repeating function

 const intervalId = setInterval(increaseCount, 1000);

let count = 0;
function increaseCount() {
  count++;
  console.log(count);
//   if (count == 5) {
//     clearInterval(intervalId);
//   }
}
