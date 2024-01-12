let playerScore = 0
let computerScore = 0

const choices = ["rock", "paper", "scissors"]

const buttons = document.querySelectorAll(".button");
const player = document.querySelector("#player-score");
const computer = document.querySelector("#computer-score");
const outcome = document.querySelector("#outcome");
player.textContent = `Player Score: ${playerScore}`;
computer.textContent = `Computer Score: ${computerScore}`;
outcome.textContent = "Hope you win!";

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        outcome.textContent = "Tie, try again";

    } else if (
        (playerSelection === "rock" && computerSelection ==="scissors") ||
        (playerSelection === "paper" && computerSelection ==="rock") ||
        (playerSelection === "scissors" && computerSelection ==="paper") 
    ) {
        playerScore++
        outcome.textContent = `You Win! You chose ${playerSelection} and the computer chose ${computerSelection}`
    } else {
        computerScore++
        outcome.textContent =  `You Lose! You chose ${playerSelection} and the computer chose ${computerSelection}`
    }
    updateScore()
    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }
}


function updateScore() {
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;
}

function endGame() {
    console.log(`Game Over. Final Score - You: ${playerScore}, Computer: ${computerScore}`);
    
    // Optionally reset scores for a new game
    playerScore = 0;
    computerScore = 0;
}

buttons.forEach((button) => {button.addEventListener("click", () => {
    const playerChoice = button.id;
    const computerChoice = getComputerChoice();
    console.log(playerChoice);
    console.log(computerChoice);
    playRound(playerChoice, computerChoice);
})})

function playGame() {
    playRound();
}
// function game() {
//     const scoreBoard = document.querySelector(".scoreboard");
//     scoreBoard.textContent = `You: ${playerScore}, Computer: ${computerScore}`
//     const buttonIds = ["rock", "paper", "scissors"];
//     buttonIds.forEach(function(buttonId) {
//         const button = document.querySelector(`#${buttonId}`);
//         button.addEventListener("click", function() {
//             const playerSelection = button.id;
//             const computerSelection = getComputerChoice();
//             playRound(playerSelection, computerSelection);
           
    
//         })
//     })

 

//     // console.log(playRound(playerSelection, computerSelection))
    
//     // playerScore > computerScore ? console.log(`Congrats You Won with a score ${playerScore}-${computerScore}`) : console.log(`Computer Wins. Score: ${playerScore}-${computerScore}`)

// }

