import random

# Function to get computer's choice
def get_computer_choice():
    choices = ['rock', 'paper', 'scissors']
    return random.choice(choices)

# Function to determine the winner of the game 
def determine_winner(player_choice, computer_choice):
    if player_choice == computer_choice:
        return 'It\'s a tie!'
    elif (
        (player_choice == 'rock' and computer_choice == 'scissors') or
        (player_choice == 'paper' and computer_choice == 'rock') or
        (player_choice == 'scissors' and computer_choice == 'paper')
    ):
        return 'You won!'
    else:
        return 'You lose!'

# Function to play the game
def play_game():
    player_choice = input('Enter your choice (rock, paper, or scissors): ').lower()
    if player_choice not in ['rock', 'paper', 'scissors']:
        print("Invalid choice. Please enter rock, paper, or scissors.")
        return
    
    computer_choice = get_computer_choice()
    print(f'You chose: {player_choice}')
    print(f'The computer chose: {computer_choice}')
    
    result = determine_winner(player_choice, computer_choice)
    print(result)

# Start the game
play_game()