             //creating computer choice through an array
             var letters=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "Z"];

             // creating varibles
                     var wins = 0;
                     var losses = 0;
                     var attempts = 12;
                     var compLetter;
                     var letterGuess = null;
                     var usedLetters = [];

            //human's keypress and log event
                document.onkeyup = function(event) {
                    attempts--;
                    var usedLetter = event.key.toLowerCase();

                    usedLetters.push(usedLetter);
                    document.querySelector("#attempts").innerHTML=attempts;
                    document.querySelector("#usedLetters").innerHTML = usedLetters;
                    
                    if (usedLetter === letterGuess){
                        alert("You Win!");
                        wins++;
                        document.querySelector("#wins").innerHTML = wins;
                        reset();

                    }

                    if (attempts === 0){
                        console.log("game over")
                        losses++;
                        document.querySelector("#losses").innerHTML = losses;
                        alert("You Lost!"+"\n"+"Starting another game!");
                        reset();

                    }
                };

                function reset(){
                    console.log ("reset")
                        attempts=12;
                        usedLetters = [];
                        compLetter();
                }
 
             
            
            // function for computer to make a choice
                    function compLetter(){
                      letterGuess=letters[Math.floor(Math.random()*letters.length)];
                        console.log(letterGuess)
                            
                }



            