/*
const headingEl = document.getElementsByClassName("heading");

console.log(headingEl[1].innerHTML = "changed");



console.log(headingEl); 
// const headingEl = document.querySelector("#heading"); 
*/

 const containerDiv = document.getElementById("container");

 let count = 123;
 containerDiv.innerHTML = `<h1> ${count} This is inside the conatiner </h1> <p>This is also there</p>`;

 containerDiv.style.border = '2px solid black';
 containerDiv.style.padding = '20px';
 containerDiv.style.color = 'rgba(0,0,0,.5)';

 containerDiv.classList.add('funky');

 console.log(containerDiv.classList);
 
 

 const img = document.getElementById('dummy-img');
 img.src = "https://via.placeholder.com/200";
 console.log(img);

 const newEl = document.createElement('h1');

 newEl.innerHTML = `this is new H1`;

 containerDiv.appendChild(newEl);

 

//  append means jo pahela tha remaing rah enedo aur fir isko dal do