const $onload = () => {

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const maxTies = 10;  //maximum number of times to guess
    let guessedLetters = [];  // Stores the letters the user guessed
    let guessingWord = [];    // This will be the word we actually build to match the current word
    let remainingGuesses = 10; // How many tries the player has left (10 or empty??)

    let lettersTypedByWordCreator = ""; //Stores the letters typed by word creator

    let input = document.getElementById('word');
    let arrayOflettersTypedByCreator = [];
    let letterTyped = "";

   

    document.getElementById('btnsubmit').onclick = function () {
        lettersTypedByWordCreator = input.value;
        // console.log(lettersTypedByWordCreator);
        arrayOflettersTypedByCreator = lettersTypedByWordCreator.split("");
        // console.log(arrayOflettersTypedByCreator);
        // console.log(arrayOflettersTypedByCreator.length);
        generateUnderscore();

        
        const content = alphabet.map(letter => `<button type="button" class="letter-button" value="${letter}">${letter}</button>`);
        const div = document.getElementById('buttonGroup');
        const output = document.getElementById('output');
        div.innerHTML += content;

        Array.from(document.getElementsByClassName("letter-button"))
            .forEach((e) => e.addEventListener('click', () => {
                output.innerHTML += e.value;
                letterTyped = e.value;
                arrayOflettersTypedByCreator.forEach(keyboardAction)
                // console.log(arrayOflettersTypedByCreator);
                
            }));

            

            const keyboardAction = (item, index, arrayOflettersTypedByCreator) => {
                for (let i = 0; i < arrayOflettersTypedByCreator.length; i++ ){
              
                    if (letterTyped === arrayOflettersTypedByCreator[i]){
                        console.log(letterTyped + " exits");

                    }
                }
               
                // console.log(item);
                // console.log(index);
                // console.log(arrayOflettersTypedByCreator);
            }
    };

   

    let generateUnderscore = () => {
        for (let i = 0; i < arrayOflettersTypedByCreator.length; i++) {
            $('.underscores').append('_ ');
            // console.log(arrayOflettersTypedByCreator.length);
        }
    }


}
$onload();