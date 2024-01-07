const box1 = document.getElementById("box-1");

const divs = document.getElementsByTagName("div");

const container = document.getElementsByClassName("container");

for (let i = 0; i < 7; i++) {
  const boxElement = document.createElement("div");
  boxElement.classList.add("box");

  container[0].append(boxElement);
}
