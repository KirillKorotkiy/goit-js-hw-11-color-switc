const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

let max = colors.length - 1;
let min = 0;
let intervalId = null;

refs.startBtn.addEventListener("click", () => {
  startChangeColor();
});

refs.stopBtn.addEventListener("click", () => {
  stopChangeColor();
});

function changeColor() {
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const randomColor = colors[randomIntegerFromInterval(min, max)];
  document.body.setAttribute("style", `background-color: ${randomColor}`);
}

function startChangeColor() {
  intervalId = setInterval(() => {
    changeColor();
  }, 1000);
  refs.startBtn.disabled = true;
}

function stopChangeColor() {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
}
