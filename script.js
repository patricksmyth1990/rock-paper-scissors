let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

// This function generates a random number between 1-3 and returns
// rock, paper, or scissors as the computer's play
function getComputerChoice() {
    //let result;
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

function uiGame() {
    scores = "Your score: " + humanScore + "<br>" + "Computer score: " + computerScore;
    document.getElementById("newline").innerHTML = scores;
    //if (roundCount == 6) {
    //    div.removeChild(gameResult);
    //    roundCount = 0;
    //};
    for (let i = 0; i < 5; i++) {
        if (roundCount == 5 && humanScore > computerScore) {
            gameResult.textContent = "You won with " + humanScore + "! Your opponent got " + computerScore + ".";
            roundCount = 0;
            humanScore = 0;
            computerScore = 0;
            //console.log("You won with " + humanScore + "! Your opponent only got " + computerScore + ".");
        } else if (roundCount == 5 && humanScore < computerScore) {
            gameResult.textContent = "You lost! You got " + humanScore + ", but your opponent got " + computerScore + ".";
            roundCount = 0;
            humanScore = 0;
            computerScore = 0;
            //console.log("You lost! You only got " + humanScore + ", but your opponent got " + computerScore + ".");
        } else if (roundCount == 5 && humanScore == computerScore) {
            gameResult.textContent = "It's a tie! You and your opponent both got " + humanScore + ".";
            roundCount = 0;
            humanScore = 0;
            computerScore = 0;
            //console.log("It's a tie! You and your opponent both got " + humanScore + ".");
        } 
    }
    return;
    //if (roundCount == 1) {
    //    div.removeChild(gameResult);
    //};
};
 
// This function goes through five rounds of the game, keeping score and
// declaring the winner and points at the end.
//function game() {
    //for (let i = 0; i < 5; i++) {
        //let input = prompt("Rock, Paper, or Scissors?");
        //let winOrLose = playRound(input, getComputerChoice());
        
        
        //console.log("Your score: " + humanScore);
        //console.log("Opponent's score: " + computerScore);
    //}
    
//}

// console.log(game());

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

let scores = "Your score: " + humanScore + "<br>" + "Computer score: " + computerScore;
document.getElementById("newline").innerHTML = scores;

const rock = document.querySelector('#rock-button');
rock.addEventListener('click', () => { 
    if (gameResult.textContent != "" ) {
        gameResult.textContent = "";
    }
    //div.removeChild(gameResult);
    roundResult.textContent = playRound('rock', getComputerChoice());
    //roundCount += 1;
    //if (roundResult.textContent.startsWith("You win")) {
    //    humanScore += 1;
    //} else if  (roundResult.textContent.startsWith("You lose")) {
    //    computerScore += 1;
    //}
    uiGame();
});

const paper = document.querySelector('#paper-button');
paper.addEventListener('click', () => { 
    if (gameResult.textContent != "" ) {
        gameResult.textContent = "";
    }
    //div.removeChild(gameResult);
    roundResult.textContent = playRound('paper', getComputerChoice());
    //roundCount += 1;
    //if (roundResult.textContent.startsWith("You win")) {
    //    humanScore += 1;
    //} else if  (roundResult.textContent.startsWith("You lose")) {
    //    computerScore += 1;
    //}
    uiGame();
});

const scissors = document.querySelector('#scissors-button');
scissors.addEventListener('click', () => { 
    if (gameResult.textContent != "" ) {
        gameResult.textContent = "";
    }
    //div.removeChild(gameResult);
    roundResult.textContent = playRound('scissors', getComputerChoice());
    //roundCount += 1;
    //if (roundResult.textContent.startsWith("You win")) {
    //    humanScore += 1;
    //} else if  (roundResult.textContent.startsWith("You lose")) {
    //    computerScore += 1;
    //}
    uiGame();
});



/* if (roundCount == 5 && humanScore > computerScore) {
    gameResult.textContent = "You won with " + humanScore + "! Your opponent only got " + computerScore + ".";
    roundCount = 0;
    //console.log("You won with " + humanScore + "! Your opponent only got " + computerScore + ".");
} else if (roundCount == 5 && humanScore < computerScore) {
    gameResult.textContent = "You lost! You only got " + humanScore + ", but your opponent got " + computerScore + ".";
    roundCount = 0;
    //console.log("You lost! You only got " + humanScore + ", but your opponent got " + computerScore + ".");
} else if (roundCount == 5 && humanScore == computerScore) {
    gameResult.textContent = "It's a tie! You and your opponent both got " + humanScore + ".";
    roundCount = 0;
    //console.log("It's a tie! You and your opponent both got " + humanScore + ".");
}; */