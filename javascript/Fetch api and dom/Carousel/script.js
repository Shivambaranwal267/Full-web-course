// unsplash

const images = [
  "https://plus.unsplash.com/premium_photo-1680742508463-acb8c21af3bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "https://plus.unsplash.com/premium_photo-1675718983349-b19fe1c4c9bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1475154404624-07909433bbfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80",
];

const n = images.length;
const flexContainer = document.getElementById("flex-container");
const leftButton = document.getElementById("left-btn");
const rightButton = document.getElementById("right-btn");

const containerWidth = 80;
const flexContainerWidth = n * containerWidth;
flexContainer.style.width = flexContainerWidth;

for (let i = 0; i < n; i++) {
  const newImg = document.createElement("img");
  newImg.src = images[i];
  newImg.classList.add("img-style");
  flexContainer.appendChild(newImg);
}

let currentPosition = 0;
leftButton.addEventListener("click", () => {
  if (currentPosition > 0) {
    currentPosition--;
  } else {
    currentPosition = n - 1;
  }
  showImg();
});

rightButton.addEventListener("click", () => {
  if (currentPosition < n - 1) {
    currentPosition++;
  } else {
    currentPosition = 0;
  }
  showImg();
});

function showImg() {
  const translateXDistance = -currentPosition * containerWidth;
  flexContainer.style.transform = `translateX(${translateXDistance}vw)`;
}
