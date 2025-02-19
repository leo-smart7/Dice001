// Dice1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImage = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImage);

// Dice2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

// Conditionals
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player one wins! 🚩"
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player two wins! 🚩"
}
else {
    document.querySelector("h1").innerHTML = "Draw!"
}