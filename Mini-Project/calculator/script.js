const buttons = document.querySelectorAll(".button");
const inputField = document.querySelector("#number-input");
const infoPara = document.querySelector("#info");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (event) => {
    infoPara.style.display = "none";
    let inputText = "";
    switch (event.target.innerHTML) {
      case "C":
        break;
      case "=":
        try {
          inputText = eval(inputField.value);
        } catch (err) {
          inputText = "";
          infoPara.style.display = "block";
          infoPara.innerHTML = "Invalid Operation";
        }
        break;
      case "←":
        inputText = inputField.value.slice(0, inputField.value.length - 1);
        break;
      default:
        inputText = `${inputField.value}${event.target.innerHTML}`;
    }

    inputField.value = inputText;
  });
}
