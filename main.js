const player = document.querySelector("#player");
const computer = document.querySelector("#computer");  
const result=document.querySelector("#result");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;
  
function playGame(playerMove) {
    const computerMove = pickComputerMove();
    player.textContent = `You picked ${playerMove}`;
    computer.textContent = `Computer picked ${computerMove}`; 

    if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
        result.textContent = 'You lose.';
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
      } else if (computerMove === 'paper') {
        result.textContent = 'You win.';
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
      } else if (computerMove === 'scissors') {
        result.textContent = 'Tie.';
      }

    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
        result.textContent = 'You win.';
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
      } else if (computerMove === 'paper') {
        result.textContent = 'Tie.';
      } else if (computerMove === 'scissors') {
        result.textContent = 'You lose.';
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
      }
      
    } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
        result.textContent = 'Tie.';
      } else if (computerMove === 'paper') {
        result.textContent = 'You lose.';
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
      } else if (computerMove === 'scissors') {
        result.textContent = 'You win.';
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
      }
    }
}
     

  function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'scissors';
    }

    return computerMove;
  }