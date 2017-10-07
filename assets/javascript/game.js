// Set default score and guess values:

var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var guessedLetters = [];
var letterToGuess = null;

// This array holds the letters A-Z that the computer will randomly choose from.
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Computer "picks" a letter randomly.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);

// User has 10 guesses.
var updateGuessesLeft = function () {
    // Grab HTML elements to update guessesLeft.
    document.querySelector('#guessesLeft').innerHTML = "Number of guesses left: " + guessesLeft;
};

var updateLetterToGuess = function () {
    // Computer repeatedly guesses
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

var updateGuessedLetters = function () {
    // Display user's guesses.
    document.querySelector('#guessedLetters').innerHTML = "Your guesses: " + guessedLetters;

};

// Reset function
var reset = function () {
    totalGuesses = 10;
    guessesLeft = 10;
    guessedLetters = [];

    updateGuessesLeft();
    updateGuessedLetters();
    updateLetterToGuess();
}

updateLetterToGuess();
// updateGuessesLeft;

// Displays image of the alamo when user wins. 
function displayWinPsychic() {
    var alamo = document.createElement("IMG");
    alamo.setAttribute("src", "assets/images/alamo.jpg");
    alamo.setAttribute("width", "304");
    alamo.setAttribute("height", "228");
    alamo.setAttribute("alt", "Alamo");
    document.body.appendChild(alamo);
}

// Displays image of Large Marge when user loses. 
function displayLosePsychic() {
    var margegif = document.createElement("IMG");
    margegif.setAttribute("src", "assets/images/marge.gif");
    margegif.setAttribute("width", "304");
    margegif.setAttribute("height", "228");
    margegif.setAttribute("alt", "Large Marge");
    document.body.appendChild(margegif);
}

// When the user presses a key, this grabs his or her keystrokes
// How do I create an alert to notify the user that he or she hit a non-alpha key?

document.onkeyup = function () {
    guessesLeft--;
    // Takes user's guess and converts it to lower case
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


    guessedLetters.push(userGuess);
    updateGuessedLetters();
    updateGuessesLeft();

    if (guessesLeft > 0) {
        // User guesses correctly
        if (userGuess === computerGuess) {
            wins++, reset();
            alert("Perhaps I should be paying YOU to read MY fortune?");
            document.querySelector('#wins').innerHTML = "Wins: " + wins;
            displayWinPsychic();


        }


    } else if (guessesLeft == 0) {
        // Lose and update the loss 
        losses++, reset();
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
        alert("Were you born in the basement of the Alamo? The letter was " + letterToGuess + ".");
        displayLosePsychic();
    }



};