let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (hGuess,cGuess,sGuess) => {
  let hDiff = Math.abs(hGuess - sGuess)
  let cDiff = Math.abs(cGuess - sGuess)
  if (hDiff == cDiff || hDiff < cDiff) {return true} 
  else {return false}
};
  
const updateScore = winner => {
  if (winner === 'human') {humanScore++}
  else {computerScore++}
};

 const advanceRound = () => currentRoundNumber++;
