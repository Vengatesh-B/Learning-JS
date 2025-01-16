// Rock,paper and Scissors game using fuctions

let userConfirmation = confirm("Shall we play the Rock,Paper and Scissors game?");
if (userConfirmation === true) {
  //alert("welcome to the Game");

  let playerChoice = prompt("Choose: Rock or Paper or Scisscors");

  if (playerChoice) {
    let player = playerChoice.toLowerCase().trim();
    if (player === "rock" || player === "paper" || player === "scissors") {

      let rock = 1;
      let paper = 2;
      let scisscors = 3;
      let computer = Math.ceil(Math.random() * 3);
      const rpsArray = ["rock", "paper", "scissors"];
      computer = rpsArray[computer];

      const result = player === computer ? "game tie!"
        : player === "rock" && computer === "paper" ? "Computer select paper! You Wins!"
          : player === "paper" && computer === "scissors" ? "Computer select Scissors! you lose.."
            : player === "scissors" && computer === "rock" ? "Computer select rock! you lose.." : "computer wins";
      alert(result);
      let playagain = confirm("Play again?");
      playagain ? location.reload() : alert("Ok, thanks for playing.");
    }
    else {
      let reload = confirm("You didn't enter rock, paper or scissors.");
      reload ? location.reload() : alert("thanks.");
    }
  }
  else {
    alert("Okay!! you didn't enter your choice, try next time");
  }
}
else {
  alert("Okay, Maybe next time..");
}
