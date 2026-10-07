// Guess the Number Game

const actualNumber = Math.floor(Math.random()*100);

let guessedNumber = Number(prompt("Guess the number:"));

while (guessedNumber !== actualNumber) {
    if (guessedNumber < actualNumber) {
        console.log("Your guessed number is smaller than the actual number.");
    } else {
        console.log("Your guessed number is greater than the actual number.");
    }

    guessedNumber = Number(prompt("Guess again:"));
}

console.log("Congratulations! You guessed the correct number.");