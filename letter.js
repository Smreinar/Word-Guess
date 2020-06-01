function Letters(character) {
    this.character = character;
    this.guessed = false;

    this.returnChar = function(userGuess){ 
       
        if(userGuess === this.character){
            return this.charactr;
    
        }
        else{
             console.log(this.character,userGuess);
            return "_"
        }
      
    }
    this.checkLetter = function(letter){
        if(letter === character){
            this.guessed = true;
    
        }
    }

}


module.exports = Letters;