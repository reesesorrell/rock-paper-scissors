let computerScore = 0;
let playerScore = 0;

function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return 'rock';
    }
    if (choice == 1) {
        return 'paper';
    }
    if (choice == 2) {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    let lowerPlayerSelection = playerSelection.toLowerCase();
    let playerWinMessage = `You win! ${playerSelection} beats ${computerSelection}`;
    let computerWinMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
    if (lowerPlayerSelection === computerSelection) {
        return "It's a tie!";
    }
    if (lowerPlayerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore += 1;
            return computerWinMessage;
        }
        if (computerSelection === 'scissors') {
            playerScore += 1;
            return playerWinMessage;
        }
    }
    if (lowerPlayerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            computerScore += 1;
            return computerWinMessage;
        }
        if (computerSelection === 'rock') {
            playerScore += 1;
            return playerWinMessage;
        }
    }
    if (lowerPlayerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore += 1;
            return computerWinMessage;
        }
        if (computerSelection === 'paper') {
            playerScore += 1;
            return playerWinMessage;
        }
    }
}

function breakButtons() {
    buttons.forEach(element => {
        element.removeEventListener('click', readChoice);
    });
}

function checkWinner() {
    const results = document.querySelector('.results');
    if (computerScore === 5) {
        results.textContent = 'gg, computer is just better.';
        breakButtons();
    }
    else if (playerScore === 5) {
        results.textContent = 'good job, you beat a dumb computer.'
        breakButtons();
    }
}

function updateScore() {
    const playerScoreText = document.querySelector('.player-score');
    playerScoreText.textContent = `Player: ${playerScore}`;
    const computerScoreText = document.querySelector('.computer-score');
    computerScoreText.textContent = `Computer: ${computerScore}`;
}

function displayResults(message) {
    const results = document.querySelector('.results');
    results.textContent = message;
    updateScore();
    checkWinner();
}

function readChoice() {
    displayResults(playRound(this.id, computerPlay()));
}
//takes the id of the button and puts it into the playRound function

const buttons = Array.from(document.querySelectorAll('.choice'));
//finds all choice buttons

buttons.forEach(element => {
    element.addEventListener('click', readChoice);
}); // adds listener to every button

updateScore();