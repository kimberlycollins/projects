let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    let num = Math.floor(Math.random()*10);
    return num;
};

const compareGuesses = (humanGuess, computerGuess, target) => {
    let humanDiff = Math.abs(humanGuess - target);
    let computerDiff = Math.abs(computerGuess - target);
    if (humanDiff < computerDiff) {
        return true
    } else {
        return false
    }
};

const updateScore = (winner) => {
    if (winner == 'human') {
        humanScore += 1
    } else if (winner == 'computer') {
        computerScore += 1
    }
};

const advanceRound = () => {
    return currentRoundNumber += 1;
};