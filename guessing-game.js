function guessingGame() {
  const answer = Math.floor(Math.random() * 100);
  let guessCount = 0;
  let done = false;
  return function(guess) {
    guessCount++;
    if (done === true) {
      return("The game is over, you already won!");
    } else if (guess < answer) {
      return `${guess} is too low!`;
    } else if (guess > answer) {
      return `${guess} is too high!`;
    } else {
      done = true;
      return `You win! You found ${answer} in ${guessCount} guesses.`
    }
  
  }
}

module.exports = { guessingGame };
