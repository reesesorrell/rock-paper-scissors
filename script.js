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
            return computerWinMessage;
        }
        if (computerSelection === 'scissors') {
            return playerWinMessage;
        }
    }
    if (lowerPlayerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return computerWinMessage;
        }
        if (computerSelection === 'rock') {
            return playerWinMessage;
        }
    }
    if (lowerPlayerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return computerWinMessage;
        }
        if (computerSelection === 'paper') {
            return playerWinMessage;
        }
    }
}

function game() {
    for (let i=0; i<5; i++) {
        let playerSelection = prompt('Choose rock, paper, or scissors: ');
        console.log(playRound(playerSelection, computerPlay()));
    }
}

game();