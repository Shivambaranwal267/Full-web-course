/*

// console.log(document);

const body = document.body;
// console.log(body);

// const childern = body.children;
// const childern = body.children[1].children;
// how to change with using navigator
const childern = (body.children[1].children[1].innerHTML = "Changed");

const list = document.getElementById("list");

console.log(list.parentElement.children);
// console.log(list.parentElement);
console.log((list.firstElementChild.innerHTML = "first"));
console.log((list.lastElementChild.innerHTML = "last"));
console.log(list.parentElement);

const numberInput = document.getElementById("number-input");
numberInput.value = 'sURAH';

const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", (event) => {
    event.preventDefault() // when u remove default behaviour of buttON
  console.log(numberInput.value);
});

console.log(childern);
*/

const counterText = document.getElementById("counter");
const posBtn = document.getElementById("pos-btn");
const negBtn = document.getElementById("neg-btn");

let count = 0;

posBtn.addEventListener("click", () => {
  count++;
  updateCount();
});

negBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateCount();
  }
});

function updateCount() {
  counterText.innerHTML = count;
}
