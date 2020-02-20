const $onload = () => {

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let maxTries = 10;  //maximum number of times to guess
    
    let lettersTypedByWordCreator = ""; //Stores the letters typed by word creator

    let input = document.getElementById('word');
    let arrayOfLettersTypedByCreator = [];

    
 
    

    const pushIndexOfLetters = (item) => {
        let indexOfEqualLetters = [];
        for (let i = 0; i < lettersTypedByWordCreator.length; i++) {

            if (item.html() === lettersTypedByWordCreator[i]) indexOfEqualLetters.push(i)

        }
        return indexOfEqualLetters;
    }

    const giveLetterAColor = (item) => {
        if (arrayOfLettersTypedByCreator.includes(item.html())) {
            item.addClass('success');
            const indexes = pushIndexOfLetters(item);
            console.log(indexes);
            const divs = $('.underscore');
            indexes.forEach(index => {
            (divs[index].innerHTML) = item.html();

            })
            console.log(divs);
        
            // select all .underscore divs
            // replace the .text with the letter at indexes
            // console.log(arrayOfLettersTypedByCreator.indexOf(item.html()));

            // add to word array
        } else {
            item.addClass('error');
            maxTries--;
            $('.lives').text(`You have ${maxTries} lives left`)
            if(maxTries === 0) {
            $('.lives').text(`You have ${maxTries} lives you LOST the game! `)    
        }

         
        }

        // const stop = () => {
        
        // }
    }
    
    $('#btnsubmit').one('click', function(){
        lettersTypedByWordCreator = input.value;
        // console.log(lettersTypedByWordCreator);
        arrayOfLettersTypedByCreator = lettersTypedByWordCreator.split("");
        // console.log(arrayOflettersTypedByCreator);
        // console.log(arrayOflettersTypedByCreator.length);
        generateUnderscore();


        const content = alphabet.map(letter => `<button type="button" class="letter-button" value="${letter}">${letter}</button>`);
        const div = document.getElementById('buttonGroup');
        const output = document.getElementById('output');
        div.innerHTML += content;

        $('.letter-button').click(function () {
           
            giveLetterAColor($(this));


        })
        
    })
    
        

        // When a letter is clicked,
        // Check if the letter that was clicked is in arrayOfLettersTypedByCreator
        // If it is in the array, 
        // turn the letter green and add it to the dashes on the page
        // Else 
        // Turn the letter red and add one to the number of incorrect moves

    

    let generateUnderscore = () => {
        for (let i = 0; i < arrayOfLettersTypedByCreator.length; i++) {
            $('.underscores').append(`<div class="underscore">_</div>`);

            //<div class="underscore">_</div>
            // console.log(arrayOflettersTypedByCreator.length);
        }
    }

    const resetBoard = () => {
        maxTries = 0;
        arrayOfLettersTypedByCreator = [];
        $('.underscore').empty();
        $('.underscores').empty();
        $('#word').empty();
    }
    

   

    $('#reset').click(function () {
        resetBoard();
    
    })

    

    

}
$onload();