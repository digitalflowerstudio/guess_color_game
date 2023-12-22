let colorOutput = document.querySelector(".randomColor");
let result = document.querySelector(".outputText");
let reset = document.querySelector(".reset");
let boxes = document.querySelectorAll(".box");
let colors;

const generateRandomColor = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return "rgb(" + r + ", " + g + ", " + b + ")";
};

let winColor;

const winningColor = () => {
  const numberBoxes = boxes.length;
  const winningColorIndex = Math.floor(Math.random() * numberBoxes);
  winColor = colors[winningColorIndex];
};

const changeBoxColors = () => {
  colors = [];
  result.textContent = "";
  for (let i = 0; i < boxes.length; i++) {
    let randomColor = generateRandomColor();
    boxes[i].style.backgroundColor = randomColor;
    colors.push(randomColor);
  }
  winningColor();
};

const boxListen = () => {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function () {
      if (this.style.backgroundColor === winColor) youWon();
      else {
        result.textContent =
          "Wrong! 😭😭😭😭 Press the button to give it another shot!";
      }
    });
  }
};

const youWon = () => {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = winColor;
    result.textContent = "Yay! Correct! 🤑🤑🤑🤑";
  }
};

const setup = () => {
  changeBoxColors();
  boxListen();
  colorOutput.textContent = generateRandomColor();
  winningColor();
};

reset.addEventListener("click", setup);

setup();
