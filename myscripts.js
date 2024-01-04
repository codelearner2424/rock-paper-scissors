const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    console.log(playerSelection)
    console.log(computerSelection)
    if (playerSelection === computerSelection) {
        console.log("Tie, try again")
        const playerSelection = prompt("Rock Paper Scissors").toLowerCase()
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
    } else if (
        (playerSelection === "rock" && computerSelection ==="scissors") ||
        (playerSelection === "paper" && computerSelection ==="rock") ||
        (playerSelection === "scissors" && computerSelection ==="paper") 
    ) {
        playerScore++
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else {
        computerScore++
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
    

}

let winner = ''
let playerScore = 0
let computerScore = 0

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock Paper Scissors").toLowerCase()
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
    }
    playerScore > computerScore ? console.log(`Congrats You Won with a score ${playerScore}-${computerScore}`) : console.log(`Computer Wins. Score: ${playerScore}-${computerScore}`)

}

game()