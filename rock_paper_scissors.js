// Function to get computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Function to determine the winner of the game
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'tie';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

// Variables to keep track of scores and rounds
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

// Function to handle the game logic
function playGame(playerChoice) {
    if (roundsPlayed >= 5) {
        document.getElementById('result').innerText = "Game over! Refresh the page to play again.";
        return;
    }

    const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);

    if (winner === 'player') {
        playerScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }

    roundsPlayed++;

    // Update the score and result
    document.getElementById('score').innerText = `Player: ${playerScore} | Computer: ${computerScore}`;
    document.getElementById('result').innerHTML = `
        Round ${roundsPlayed}:<br>
        You chose: ${playerChoice}<br>
        The computer chose: ${computerChoice}<br>
        ${winner === 'tie' ? "It's a tie!" : winner === 'player' ? "You won this round!" : "Computer won this round!"}
    `;

    // Check if the game is over
    if (roundsPlayed === 5) {
        const finalResult = playerScore > computerScore
            ? "Congratulations! You won the game!"
            : playerScore < computerScore
            ? "You lost the game. Better luck next time!"
            : "It's a tie game!";
        document.getElementById('result').innerHTML += `<br><strong>${finalResult}</strong>`;
    }
}

// Add event listeners to buttons
document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));