let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

/* The purpose of this function is to be called at the start of each new round in order to generate the new secret target number */
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

// The purpose of this function is to be called each round to determine which guess is closest to the target number
const compareGuesses = (userGuess, computerGuess, secretTarget) => {

    /*const userGuess = Math.abs(secretTarget - user);
    const computerGuess = Math.abs(secretTarget - computer);
    // return computerGuess >= userGuess;
    return computerGuess >= userGuess ? true : false;*/
    if (Math.abs(secretTarget - userGuess) <= (Math.abs(secretTarget - computerGuess))) {
        return true;
    } else {
        return false;
    }

}

// The purpose of this function is to be used to correctly increase the winner's score after each round
function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

// The purpose of this function is to be used to update the round after each round
function advanceRound() {
    currentRoundNumber += 1;
}

console.log(advanceRound());
console.log(updateScore());