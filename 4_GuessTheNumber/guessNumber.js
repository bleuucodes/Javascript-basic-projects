let randomNumber = parseInt(Math.random() * 10 + 1);

const userInput = document.querySelector("#guessField");
const submitButton = document.querySelector("#subt");
const prevGuesses = document.querySelector(".guesses");
const remainingGuess = document.querySelector(".lastResult");
const isLowOrHi = document.querySelector(".lowOrHi");
const messageParas = document.querySelector(".resultParas");

const p = document.createElement("p");

let guessArray = [];
let guessNum = 1;
let isPlayable = true;

if (isPlayable) {
    submitButton.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Enter a valid number");
    } else if (guess > 100) {
        alert("Enter a number less than or equal to 100");
    } else if (guess < 1) {
        alert("Enter a number greater than or equal to 1");
    } else {
        guessArray.push(guess);
        if (guessNum === 11) {
            displayGuess(guess);
            displayMessage(`Game Over! Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`Yay! You've guessed it right.`);
        endGame();
    } else if (guess > randomNumber) {
        displayMessage(`Guess is too high!`);
    } else if (guess < randomNumber) {
        displayMessage(`Guess is too low!`);
    }
}

function displayGuess(guess) {
    userInput.value = "";
    prevGuesses.innerHTML += `${guess}, `;
    guessNum++;
    if (guessNum > 10) {
        remainingGuess.innerHTML = "0";
    } else {
        remainingGuess.innerHTML = `${11 - guessNum}`;
    }
}

function displayMessage(message) {
    isLowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h2 id="startNew">Start New Game</h2>`;
    messageParas.appendChild(p);
    isPlayable = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector("#startNew");
    newGameButton.addEventListener("click", function (e) {
        randomNumber = parseInt(Math.random() * 10 + 1);
        guessArray = [];
        guessNum = 1;
        prevGuesses.innerHTML = "";
        remainingGuess.innerHTML = `${11 - guessNum}`;
        userInput.removeAttribute("disabled");
        messageParas.removeChild(p);
        isPlayable = true;
        displayMessage(``);
    });
}
