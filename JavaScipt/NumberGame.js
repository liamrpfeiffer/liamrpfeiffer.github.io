//create secretNumber
var secretNumber = 4
//ask user for guess
var stringGuess = prompt("Guess a number 1-10")
var guess = Number(stringGuess)
//check guess
if (guess === secretNumber) {
    alert("YOU GOT IT RIGHT!!");
}
//otherwise, you got it wrong
else if (guess > secretNumber) {
    alert("Too high. Guess again")
}
else {
    alert("Too low. Guess again");
}