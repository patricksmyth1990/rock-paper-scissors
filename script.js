let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

// This function generates a random number between 1-3 and returns
// rock, paper, or scissors as the computer's play
function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum == 1) {
        return result = "rock";
    } else if (randomNum == 2) {
        return result = "paper";
    } else if (randomNum == 3) {
        return result = "scissors";
    }
}

// This function plays one round of the game, comparing the player's 
// choice and the computer's play and returning a string with the result.
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        humanScore++;
        roundCount++;
        return "You win! Rock beats scissors.";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        computerScore++;
        roundCount++;
        return "You lose! Paper beats rock!";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        humanScore++;
        roundCount++;
        return "You win! Paper beats rock!";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        computerScore++;
        roundCount++;
        return "You lose! Scissors beats paper!";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        humanScore++;
        roundCount++;
        return "You win! Scissors beats paper!";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        computerScore++;
        roundCount++;
        return "You lose! Rock beats scissors!";
    } else if (playerSelection.toLowerCase() == computerSelection) {
        roundCount++;
        return "It's a tie!";
    }
}

// This function tracks and displays the players' scores and ensures 
// that they're reset to zero after five rounds.
function uiGame() {
    scores = "Your score: " + humanScore + "<br>" + "Computer score: " + computerScore;
    document.getElementById("newline").innerHTML = scores;
    for (let i = 0; i < 5; i++) {
        if (roundCount == 5 && humanScore > computerScore) {
            gameResult.textContent = "You won the game with " + humanScore + "! Your opponent got " + computerScore + ".";
            roundCount = 0;
            humanScore = 0;
            computerScore = 0;
        } else if (roundCount == 5 && humanScore < computerScore) {
            gameResult.textContent = "You lost the game! You got " + humanScore + ", but your opponent got " + computerScore + ".";
            roundCount = 0;
            humanScore = 0;
            computerScore = 0;
        } else if (roundCount == 5 && humanScore == computerScore) {
            gameResult.textContent = "The game is a tie! You and your opponent both got " + humanScore + ".";
            roundCount = 0;
            humanScore = 0;
            computerScore = 0;
        } 
    }
    return;
};

// Here I create the new DOM elements I'll need for the UI, and append them to the document.
const body = document.querySelector('body');
const div = document.createElement('div');
const newLine = document.createElement('p');
const roundResult = document.createElement('p');
const gameResult = document.createElement('p');
body.appendChild(div);
newLine.setAttribute('id', 'newline');
div.appendChild(newLine);
// I didn't need to use insertBefore() here, but it gives me a chance to
// practice using it.
div.insertBefore(roundResult, newLine);
div.appendChild(gameResult);

// Because I wanted to put a line break between the human score and the computer
// score, I had to change the HTML of the newLine element, not just change its text content.
let scores = "Your score: " + humanScore + "<br>" + "Computer score: " + computerScore;
document.getElementById("newline").innerHTML = scores;

// Here I added click event listeners to each of the three buttons.
// Each function first checks if the gameResult is not empty; if it
// isn't empty, it means the player has finished five rounds, and the function
// then resets the gameResult to an empty string.
// Then it plays one round and tracks the scores with uiGame().
const rock = document.querySelector('#rock-button');
rock.addEventListener('click', () => { 
    if (gameResult.textContent != "" ) {
        gameResult.textContent = "";
    }
    roundResult.textContent = playRound('rock', getComputerChoice());
    uiGame();
});

const paper = document.querySelector('#paper-button');
paper.addEventListener('click', () => { 
    if (gameResult.textContent != "" ) {
        gameResult.textContent = "";
    }
    roundResult.textContent = playRound('paper', getComputerChoice());
    uiGame();
});

const scissors = document.querySelector('#scissors-button');
scissors.addEventListener('click', () => { 
    if (gameResult.textContent != "" ) {
        gameResult.textContent = "";
    }
    roundResult.textContent = playRound('scissors', getComputerChoice());
    uiGame();
});