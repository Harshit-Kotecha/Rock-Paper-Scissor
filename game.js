const displayWinner = function () {
  document.querySelector("main").classList.add("filter");
  document.querySelector(".winner").classList.remove("hidden");

  if (playerScore === maxScore) {
    document.querySelector(
      ".show-winner"
    ).textContent = `You Won the Game!😀😃`;
  } else {
    document.querySelector(".show-winner").textContent = `Computer Wins!😛`;
  }
};

const game = {
  rock: "paper",
  paper: "scissor",
  scissor: "rock",
};
const gameLogic = function (pMov, cMov) {
  //   console.log(game[cMov]);
  console.log("game logic", pMov, cMov);
  if (game[pMov] === cMov) {
    // Computer Wins
    displayResults.textContent = `Computer wins 😜`;
    computerScore++;
    cScore.textContent = `${computerScore}`;
  } else if (game[cMov] === pMov) {
    // Player wins
    displayResults.textContent = `You wins 😃`;
    playerScore++;
    pScore.textContent = `${playerScore}`;
  } else {
    // draw;
    displayResults.textContent = `Draw! 🤐`;
  }

  // Winner
  if (Math.max(computerScore, playerScore) === maxScore) {
    displayWinner();
  }
};

const generateRan = function () {
  const rockArr = ["Rock", "Paper", "Scissor"];
  const random = Math.trunc(Math.random() * 3);
  console.log(random);
  return rockArr[random];
};
