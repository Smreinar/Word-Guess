const Letters = require("./letter.js");

function Words(word,display) {
    this.guessed;
    this.letters = [];
    this.display = display;
    for(i in word){
        this.letters.push(new Letters(word[i]))
    }
    this.displayWord = function(userGuess){
       
        let checkLetterGuess = false;


        for (var i = 0; i < word.length; i++){
                    if(word[i]=== userGuess){
                        this.display[i] =  userGuess;
                        checkLetterGuess = true
                    }
                      
        }
      
         console.log(display.join("  "));
         
    }

}
module.exports = Words;