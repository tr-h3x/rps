
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('error')
    }
}


const getComputerChoice = () => {
   const randomNumber = Math.floor(Math.random() * 3);
   switch (randomNumber) {
    case 0:
        return 'rock';
    case 1:
        return 'paper';
    case 2:
        return 'scissors';
   }
};


const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'tie!';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Comp wins!';
        } else {
            return 'you win!';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'comp wins';
        } else {
            return 'you won!';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'comp won :(';
        } else {
            return 'you win!';
        }
    }

    if (userChoice === 'bomb') {
      return 'Way to go, you destroyed everything';
    }
};

const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
};


playGame();



















