// Function to get computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
// Function to determine the winner of the game 
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'Its a tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You won!';
    } else {
        return 'You lose!';
    }
}

// Function to play game
function playGame() {
    const playerChoice = prompt('Enter your choice (rock, paper, or scissors):').toLowerCase();
    if (!['rock', 'paper', 'scissors'].includes(playerChoice)) {
        alert("Invalid choice. Please enter rock, paper, or scissors.");    
        return;
    }
    const computerChoice = getComputerChoice();
    alert(`You chose: ${playerChoice}`);
    alert(`The computer chose: ${computerChoice}`);
    
    const result = determineWinner(playerChoice, computerChoice);
    alert(result);
}
// Start the game
playGame();

