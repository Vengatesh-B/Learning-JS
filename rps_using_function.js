// Rock,paper and Scissors game using fuctions
const initiateGame = () => {
  const startGame = confirm("Shall we play Rock,Paper,Scissors game?");
  startGame ? playGame() : alert("Okay, Maybe next time.");
};
// Game flow function
const playGame = () => {
  while (true) {
    let playerChoice = getPlayerChoice();
    playerChoice = formatPlayerChoice(playerChoice);
    if (playerChoice === "") {
      invalidChoice();
      continue;
    }
    if (!playerChoice) {
      decidedNotToPlay();
      break;
    }
    playerChoice = evaluatePlayerChoice(playerChoice);
    if (!playerChoice) {
      invalidChoice();
      continue;
    }
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(result);
    if (askToPlayAgain()) {
      continue;
    }
    else {
      thanksForPlaying();
      break;
    }
  }
};
const getPlayerChoice = () => {
  return (prompt("Choose Rock or Paper or Scissors"));
};
const formatPlayerChoice = (playerChoice) => {
  if (playerChoice || playerChoice === "") {
    return playerChoice.trim().toLowerCase();
  }
  else {
    return false;
  }
};
const invalidChoice = () => {
  alert("You didn't enter rock, paper or scissors.");
};
const decidedNotToPlay = () => {
  alert("I guess you changed your mind. Maybe next time");
};
const evaluatePlayerChoice = (playerChoice) => {
  if (playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors") {
    return playerChoice;
  }
  else {
    return false;
  }
};
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  const rpsArray = ["rock", "paper", "scissors"];
  return rpsArray[randomNumber];
};
const determineWinner = (player, computer) => {
  const winner = player === computer ? "game tie!"
    : player === "rock" && computer === "paper" ? "Computer select paper! You Wins!"
      : player === "paper" && computer === "scissors" ? "Computer select Scissors! you lose.."
        : player === "scissors" && computer === "rock" ? "Computer select rock! you lose.." : "computer wins";
  return winner;
};
const displayResult = (result) => {
  alert(result);
};
const askToPlayAgain = () => {
  return confirm("Play Again?");
};
const thanksForPlaying = () => {
  alert("Ok, thanks for playing.");
};
initiateGame();
