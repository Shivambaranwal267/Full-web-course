/*const words = ["hello", "hi", 23, true]; //recommended

// new form of array written as
//const words = new Array(4,3,4,'true',4);

console.log(words.length); // define the length of the class
console.log(words);*/
//               0          1         2        3

/*
   const words = ['Shivam', 'karn', 'arjun', 'Krishna'];
   words[4] = 'monu';
//  words[5] = 'menu';
//  words[6] = 'minu';

 console.log(words[4]);
 console.log(words);*/

// null is also a value

/*const words = ['Shivam', 'karn', 'arjun', 'Krishna' ];
// words.push('Kumar');
// words[0]='mavihs';  //  for array element repacement 

//   words.pop();       //to delete the last elment of an Array.


console.log(words);
console.log(words.length); */


const words = ['Shivam', 'Kartik', 'Vishal', 'Burnol', 'Zebra' ];
console.log(words);
words.sort(); 
console.log(words);

 for(let i in words) {
     console.log('hello', words[i]);
 }    

/*
const words = ["Shivam", "Kartik", "Vishal", "Burnol"];
// const isPresent = words.includes("Shivam");

const index = words.indexOf("Kartik");
console.log(index);
// console.log(isPresent);
*/

/*
 const words = ['Shivam', 'Kartik', 'Vishal', 'Burnol' ];

//  words.splice(2 , 0 ,'Anuj')
 words.splice(1 , 2 ,'Ghan','Ramesh'  , 'Suresh' );
 console.log(words);
 */

/*
 let a = [10, 4, 23,'hi'];

 a.forEach( (element,index) =>  {

 console.log( index,'hello',element);
 })

// or

// index,element,array use also in foreach function

const myFunction = (element) => {
    console.log('printing',element);
}

a.forEach(myFunction) */

// let a = [10, 5, 23];

// a.sort((n1, n2) => {
//   // return n1 - n2;
//   if (n1 > n2) return 1;
//   if (n1 < n2) return -1;
//   return 0; // the algo can replace-able is
//   // return n1 - n2;
// });
// // a.sort();

// console.log(a);
