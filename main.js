let buttons = document.querySelectorAll(".circle");
let scoredisplay = document.getElementById("score");
let overlay = document.getElementById("result");
let gameover = document.getElementById("endScore");
let score = 0;
let close = document.getElementById("close");
let active = 0;
let speed = 1200;

buttons[0].onclick = function () {
  clicked(0);
};
buttons[1].onclick = function () {
  clicked(1);
};
buttons[2].onclick = function () {
  clicked(2);
};
buttons[3].onclick = function () {
  clicked(3);
};

const clicked = (i) => {
  console.log("clicked:", i);
  if (i === active) {
    score++;
    scoredisplay.textContent = score;
    speed *= 0.9;
  } else {
    console.log("Missed!");
    endGame();
  }
};

const startGame = () => {
  console.log("game started");
  let nextActive = pickNew(active);

  buttons[nextActive].classList.toggle("active");
  buttons[active].classList.remove("active");

  active = nextActive;

  console.log("Current active: " + active);

  timer = setTimeout(startGame, speed);

  function pickNew(active) {
    let nextActive = getRandom(0, 3);
    if (nextActive != active) {
      return nextActive;
    } else {
      return pickNew(active);
    }
  }
};

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const endGame = () => {
  clearTimeout(timer);
  console.log("game over! Your score is " + score);
  overlay.style.visibility = "visible";
  gameover.textContent = "Your score: " + score;
};

// close.addEventListener("click", reloadGame);
const reloadGame = () => {
  console.log("reload happened");
  window.location.reload();
};
