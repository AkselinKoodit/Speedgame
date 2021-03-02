let score = 0;
let start = document.getElementById("start");
let overlay = document.getElementById("result");
let active = 0;

document.getElementById("score").innerHTML = score;
let zero = document.getElementById("zero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");

zero.addEventListener("click", addScore);
one.addEventListener("click", addScore);
two.addEventListener("click", addScore);
three.addEventListener("click", addScore);

function addScore() {
  score++;
  console.log(score);
  document.getElementById("score").innerHTML = score;
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRandom(0, 3));

start.addEventListener("click", () => {
  let gameOn = setInterval(game, 500);
  let stop = document.getElementById("stop").addEventListener("click", () => {
    clearInterval(gameOn);
    zero.classList.add("zeroActive");
  });
});

function game() {
  let chosen = getRandom(0, 4);
  console.log(chosen);
  zero.classList.remove("zeroActive");
  one.classList.remove("oneActive");
  two.classList.remove("twoActive");
  three.classList.remove("threeActive");
  if (chosen === 0) {
    if (zero.classList.conta) zero.classList.add("zeroActive");
  } else if (chosen === 1) {
    one.classList.add("oneActive");
  } else if (chosen === 2) {
    two.classList.add("twoActive");
  } else if (chosen === 3) {
    three.classList.add("threeActive");
  }
}
