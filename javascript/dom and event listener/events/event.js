const box = document.getElementById("box");
const container = document.getElementById("container");

// console.log(box);

// function logMessage() {
//   console.log("Hi This is a log");
// }

// box.addEventListener('click',logMessage)
// OR
   /*     
let count = 1 ;
 const logMessage = (event) => {
 console.log("Clicked" , count++);

 }

box.addEventListener('click',logMessage);*/

// logMessage();


const coordinates = document.createElement("p");
document.body.append(coordinates);

const logMessage = (event) => {
    // console.log(event);
    coordinates.innerHTML = `${event.offsetX} ${event.offsetY}`;
  box.style.left = `${event.offsetX}px`;
  box.style.top = `${event.offsetY}px`;
}



// const onPageScroll = (event) => {
//     console.log(event);

// }

// document.addEventListener('scroll', onPageScroll)

// box.addEventListener('mousemove' , logMessage);
container.addEventListener('mousemove' , logMessage);

// box.addEventListener('offline', logMessage);*/

// bubbling


// const grandparent = document.querySelector('#grandparent')
// const parent = document.querySelector('#parent')
// const child = document.querySelector('#child')
// // const container = document.querySelector('parent')

// child.addEventListener('click', () => {
//     console.log('child clicked');
//     child.classList.toggle('round');
// })

// parent.addEventListener('click', () => {
//     console.log('parent clicked');
// })

// grandparent.addEventListener('click', () => {
//     console.log('grandparent clicked');
// })


