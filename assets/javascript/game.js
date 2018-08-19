var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];
var correctLetter = randomLetter();

// document.onkeyup = function ...
// First, detect a key change (or a guess)
// add that guess to the guesses so far
// validate a guess 
// if correct increment a win and reset game
// else decrement guessesLeft 
// if guessesLeft = 0 mark a lose reset game

document.onkeyup = function (event) {

    var letter = event.key.toLowerCase();
    guessesSoFar.push(letter)

    if (letter === correctLetter) {
        wins++;
        resetGame()
    }

    else {
        guessesLeft--
        if (guessesLeft === 0) {
            losses++
            resetGame()
        }
    }

    updateText()
}

function randomLetter() {
    var letters = "abcdefghjiklmnopqrstuvwxyz"
    var index = Math.floor(Math.random() * letters.length)
    var letter = letters.charAt(index);
    return letter;
}

function resetGame() {
    guessesLeft = 10
    guessesSoFar = []
    correctLetter = randomLetter()
}

function updateText() {
    document.getElementById("wins").innerHTML = wins
    document.getElementById("losses").innerHTML = losses
    document.getElementById("guessesLeft").innerHTML = guessesLeft
    document.getElementById("guessesSoFar").innerHTML = guessesSoFar

}



document.onreadystatechange = function() {
    if (document.readyState === 'complete') updateText()
}
