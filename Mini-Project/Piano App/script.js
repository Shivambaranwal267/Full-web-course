const volumeSlider = document.querySelector("#volume");

const whiteKeys = document.querySelectorAll(".keys-white");
const blackKeys = document.querySelectorAll(".keys-black");

const whiteKeysArray = Array.from(whiteKeys);
const BlackKeysArray = Array.from(blackKeys);

whiteKeysArray.forEach((element) => {
  const audio = new Audio(`tunes/${element.id}.wav`);

  element.addEventListener("click", () => {
    audio.volume = volumeSlider.value / 100; // 0 to 1 range of volume
    audio.play();
  });
});

BlackKeysArray.forEach((element) => {
  const audio = new Audio(`tunes/${element.id}.wav`);

  element.addEventListener("click", () => {
    audio.volume = volumeSlider.value / 100;
    audio.play();
  });
});

document.addEventListener("keydown", (e) => {
  console.log(e.key);

  whiteKeysArray.forEach((element) => {
    if (element.id == e.key) {
      element.click();
      element.classList.add('active-white')
      setTimeout(() => {
        element.classList.remove('active-white')
      }, 100);
    }
  });

  BlackKeysArray.forEach((element) => {
    if (element.id == e.key) {
      element.click();
      element.classList.add('active-black')
      setTimeout(() => {
        element.classList.remove('active-black')
      }, 100);
    }
  });
});
