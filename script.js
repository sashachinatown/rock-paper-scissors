document.addEventListener('DOMContentLoaded', () => {
    const computerChoiceDisplay = document.getElementById('computer-choice');
    const userChoiceDisplay = document.getElementById('user-choice');
    const resultDisplay = document.getElementById('result');
    const possibleChoices = document.querySelectorAll('button');
    let userChoice, computerChoice;
    const computerChoices = ['rock', 'paper', 'scissors'];
  
   
    possibleChoices.forEach(choice => choice.addEventListener('click', (e) => {
       userChoice = e.target.id;
       userChoiceDisplay.textContent = ` ${userChoice}`;
       generateComputerChoice();
       getResult();
    }));

    function generateComputerChoice() {
        const randomNumber = Math.floor(Math.random() * possibleChoices.length);
        console.log(randomNumber);
        computerChoice = computerChoices[randomNumber];
        computerChoiceDisplay.textContent = ` ${computerChoice}`;
    }

    function getResult() {
        if (computerChoice === userChoice) {
            resultDisplay.textContent = ' draw!';
        }
        if (computerChoice === 'rock' && userChoice === 'paper') {
            resultDisplay.textContent = ' you won!';
        }
        if (computerChoice === 'rock' && userChoice === 'scissors') {
            resultDisplay.textContent = ' you lost!';
        }
        if (computerChoice === 'paper' && userChoice === 'scissors') {
            resultDisplay.textContent = ' you won!';
        }
        if (computerChoice === 'paper' && userChoice === 'rock') {
            resultDisplay.textContent = ' you lost!';
        }
        if (computerChoice === 'scissors' && userChoice === 'paper') {
            resultDisplay.textContent = ' you lost!';
        }
        if (computerChoice === 'scissors' && userChoice === 'rock') {
            resultDisplay.textContent = ' you won!';
        }
    }
});

