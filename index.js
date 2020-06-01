//Require
const Words = require("./word.js");
const inquirer = require("inquirer");
const Letters = require("./letter.js")

// storing an array of strings
var animalArr = [
    "zebra", "lion", "weasels", "marmot", "chinchilla", "panthera", "sealions", "solenodon", "tamarin", "bison",
    "paca", "paradoxurus", "bilbies", "howlermonkey", "spider monkey", "dolphin", "manatee", "hare",
    "pikas", "camels", "marten", "bears", "giraffe"
];
//global vars declared
var guessesLeft = 9;
var currentWordString = "";
var currentWord = ""
var wordGuess = false
let display = [];

var newCurrentWord = function(){
    currentWordString = animalArr[Math.floor(Math.random()*animalArr.length)];
    // console.log(currentWordString);

    
    for(var i = 0; i < currentWordString.length; i++){
        display.push("_");
    }

    currentWord = new Words(currentWordString,display);
    currentWord.displayWord("")
    // console.log(currentWord);
}

// wordGuessedChecker();
function wordGuessedChecker(){



    currentWord.displayWord();
    // function isGuessed(letter){
    //     return(letter.guessed === true);
    // };
    // var array = currentWord.letters();
    // var test = array.every(isGuessed)
    // console.log(test);
    // if(test === true){
    //     wordGuess = true;
    // }

}

function reset(){
    inquirer
    .prompt([
        {
            type: "list",
            name: "continue",
            message: "Would you like to play Agian?",
            choices: ["Yes","No"]
        }
    ]).then(function(answer){
        if(answer.continue === "Yes"){
            guessesLeft = 9;
            display=[];
            wordGuess = false;
            newCurrentWord();
            askLetter();
        }else if(answer.continue === "No"){
            console.log("Thanks For Playing!")
        }
    })
}

var askLetter = function() {
 
    // console.log(guessesLeft, wordGuess)
    if (guessesLeft <= 0 && wordGuess === false){
        console.log("Oh No! You're Out Of Guesses!")
        reset();
    } else if (display.indexOf("_")=== -1){
        console.log("Congrats! You Guesed The Word!")
        reset();
    } else   if(guessesLeft > 0 && wordGuess === false){
        inquirer
        .prompt([
            {
                name: "guess",
                message: "Try To Guess A Letter!",
               
            }
        ]).then(function(input) {
            //if user guess is correct 
                //  console.log(currentWordString)
            if(currentWordString.indexOf(input.guess)> -1){

                console.log("Correct!", "Guesses Remaining:", guessesLeft);
                console.log();
                currentWord.displayWord(input.guess);
                
                askLetter();
                
            }else if (currentWordString.indexOf(input.guess) === -1){
                guessesLeft--;
                
                console.log("Incorrect!", "Guesses Remaining:", guessesLeft);
                currentWord.displayWord(input.guess);
                
                askLetter();

            }

         
        })
        }
        
    
}


function start() {
    console.log("Hello And Welcome To The 'Word Guess Game'!");
    console.log("Today's Word Genre will be: Mammals!");
    newCurrentWord();
    askLetter();
    
    
}

start();