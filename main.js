let buttons = document.querySelectorAll(".circle");
let scoredisplay = document.getElementById("score");
let overlay = document.getElementById("result");
let gameover = document.getElementById("endScore");
let score = 0;
let close = document.getElementById("close");
let active = 0;
let speed = 1200;

let clickSound;
let mistakeSound;
let opener;
let theme;

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function () {
    this.sound.play();
  };
  this.stop = function () {
    this.sound.pause();
  };
}

function playTheme() {
  theme = new sound("guerrillaRadio.mp3");
  theme.play();
}

document.getElementById("stop").classList.add("invisible");

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
    //getting the click sound:
    clickSound.play();
    score++;
    scoredisplay.textContent = score;
    speed *= 0.9;
  } else {
    mistakeSound.play();
    console.log("Missed!");
    endGame();
  }
};

const startGame = () => {
  //changing the visible button:
  document.getElementById("start").classList.add("invisible");

  document.getElementById("stop").classList.remove("invisible");

  //making circles clickable:
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.add("clickMe");
  }

  //constructing sound:
  clickSound = new sound("ballBlib.wav");
  mistakeSound = new sound("mistake.wav");

  console.log("game started");
  // openingSound.play();
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
  if (score < 2) {
    gameover.textContent = "Pathetic! Your score: " + score;
  } else if (score < 4) {
    gameover.textContent = "Your score: " + score + " You can do better.";
  } else if (score < 6) {
    gameover.textContent = "Your score: " + score + ", not bad at all!";
  } else if (score < 9) {
    gameover.textContent = "Awesome! You got " + score + " points!";
  } else {
    gameover.textContent =
      "H-How did you that?!?!?! You got ridiculous score of " + score + "!!!";
  }
};

// close.addEventListener("click", reloadGame);
const reloadGame = () => {
  console.log("reload happened");
  window.location.reload();
};
