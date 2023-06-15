"use strict";

const computerBtns = document.querySelector(".computer-btns");
const playerBtns = document.querySelector(".player-btns");
const computer = document.querySelector(".computer");
const player = document.querySelector(".player");
const pScore = document.querySelector(".player-score");
const cScore = document.querySelector(".computer-score");
const inactiveContainer = document.querySelector(".inactive");
const inactiveButtons = inactiveContainer.querySelectorAll("button");
const displayResults = document.querySelector(".display-result");
const playAgain = document.querySelector(".play-again");

let playerMove, computerMove;
let playerScore = 0;
let computerScore = 0;
const maxScore = 5;

const switchPlayer = function () {
  player.classList.toggle("inactive");
  computer.classList.toggle("inactive");

  computer
    .querySelectorAll("button")
    .forEach((btn) => (btn.textContent = "Play"));

  makeInactive();
};
const makeInactive = function () {
  if (player.classList.contains("inactive")) {
    player
      .querySelectorAll("button")
      .forEach((btn) => (btn.style.cursor = "not-allowed"));
  } else {
    player
      .querySelectorAll("button")
      .forEach((btn) => (btn.style.cursor = "default"));
  }
  if (computer.classList.contains("inactive")) {
    computer
      .querySelectorAll("button")
      .forEach((btn) => (btn.style.cursor = "not-allowed"));
  } else {
    computer
      .querySelectorAll("button")
      .forEach((btn) => (btn.style.cursor = "default"));
  }
};
const init = function () {
  playerMove = computerMove = "";
  playerScore = computerScore = 0;
  document.querySelector("main").classList.remove("filter");
  document.querySelector(".winner").classList.add("hidden");
  makeInactive();
  document.querySelector(".show-winner").textContent = ``;
  pScore.textContent = `0`;
  cScore.textContent = `0`;
  displayResults.textContent = `Who's NEXT ???`;
};
init();

playerBtns.addEventListener("click", function (e) {
  if (e.target.tagName !== "BUTTON" || player.classList.contains("inactive"))
    return;

  playerMove = e.target.textContent.toLowerCase();
  console.log(playerMove);
  displayResults.textContent = `Play the move!👍`;
  switchPlayer();
});

computerBtns.addEventListener("click", function (e) {
  if (e.target.tagName !== "BUTTON" || computer.classList.contains("inactive"))
    return;

  computerMove = generateRan();
  // console.log(computerMove);
  // console.log(e.target);
  e.target.textContent = computerMove;
  gameLogic(playerMove, computerMove.toLowerCase());

  setTimeout(switchPlayer, 500);
});

playAgain.addEventListener("click", function (e) {
  init();
});
