const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    const matchOutcome = document.querySelector(".match");
    playerSelection = playerSelection.toLowerCase()
    console.log(playerSelection)
    console.log(computerSelection)
    if (playerSelection === computerSelection) {
        matchOutcome.textContent = "Tie, try again";

    } else if (
        (playerSelection === "rock" && computerSelection ==="scissors") ||
        (playerSelection === "paper" && computerSelection ==="rock") ||
        (playerSelection === "scissors" && computerSelection ==="paper") 
    ) {
        playerScore++
        matchOutcome.textContent = `You Win! ${playerSelection} beats ${computerSelection}`
    } else {
        computerScore++
        matchOutcome.textContent =  `You Lose! ${computerSelection} beats ${playerSelection}`
    }
    updateScore()
    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }

    

}

let winner = ''
let playerScore = 0
let computerScore = 0

function updateScore() {
    const scoreBoard = document.querySelector(".scoreboard");
    scoreBoard.textContent = `You: ${playerScore}, Computer: ${computerScore}`;
}

function endGame() {
    console.log(`Game Over. Final Score - You: ${playerScore}, Computer: ${computerScore}`);
    
    // Optionally reset scores for a new game
    playerScore = 0;
    computerScore = 0;
}

function game() {
    const scoreBoard = document.querySelector(".scoreboard");
    scoreBoard.textContent = `You: ${playerScore}, Computer: ${computerScore}`
    const buttonIds = ["rock", "paper", "scissors"];
    buttonIds.forEach(function(buttonId) {
        const button = document.querySelector(`#${buttonId}`);
        button.addEventListener("click", function() {
            const playerSelection = button.id;
            const computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection);
           
    
        })
    })

 

    // console.log(playRound(playerSelection, computerSelection))
    
    // playerScore > computerScore ? console.log(`Congrats You Won with a score ${playerScore}-${computerScore}`) : console.log(`Computer Wins. Score: ${playerScore}-${computerScore}`)

}

game()