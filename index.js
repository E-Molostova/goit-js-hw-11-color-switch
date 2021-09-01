const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const min = 0;
const max = colors.length - 1;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');

btnStart.addEventListener("click", onStart);
btnStop.addEventListener("click", onStop);

let id;

function onStart() {
  btnStart.disabled = true;
  id = setInterval(() => {
    document.body.style.backgroundColor =
      colors[randomIntegerFromInterval(min, max)];
  }, 1000);
}

function onStop() {
  clearInterval(id);
  btnStart.disabled = false;
}
