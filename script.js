function getComputerChoice() {
    let result = "";
    const randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum == 1) {
        return result = "rock";
    } else if (randomNum == 2) {
        return result = "paper";
    } else if (randomNum == 3) {
        return result = "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    console.log("The computer played " + computerSelection + ".");
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats scissors.";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        return "You lose! Paper beats rock!";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        return "You win! Paper beats rock!";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors beats paper!";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats paper!";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        return "You lose! Rock beats scissors!";
    } else if (playerSelection.toLowerCase() == computerSelection) {
        return "It's a tie!";
    }
}

function game() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let input = prompt("Rock, Paper, or Scissors?");
        let winOrLose = playRound(input, getComputerChoice());
        if (winOrLose.startsWith("You win")) {
            humanScore += 1;
        } else if  (winOrLose.startsWith("You lose")) {
            computerScore += 1;
        }
        console.log("Your score: " + humanScore);
        console.log("Opponent's score: " + computerScore);
    }
    if (humanScore > computerScore) {
        console.log("You won with " + humanScore + "! Your opponent only got " + computerScore + ".");
    } else if (humanScore < computerScore) {
        console.log("You lost! You only got " + humanScore + ", but your opponent got " + computerScore + ".");
    } 
    else if (humanScore == computerScore) {
        console.log("It's a tie! You and your opponent both got " + humanScore + ".");
    }
}

console.log(game());