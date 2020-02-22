const getEqualLettersIndexes = (item, inputtedWord) => {
    let indexOfEqualLetters = [];
    for (let i = 0; i < inputtedWord.length; i++) {
        if (item.html() === inputtedWord[i]) {
            indexOfEqualLetters.push(i)
        }
    }
    return indexOfEqualLetters;
}

const handleLetterSelection = (letterButton, inputtedWord, triesLeft) => {
    if (inputtedWord.includes(letterButton.html())) {
        letterButton.addClass('success');
        //replace the underscores by letters chosen
        const indexes = getEqualLettersIndexes(letterButton, inputtedWord); 
        // console.log(indexes);
        const divs = $('.underscore');
        divs.each((indexOfDiv) => {
            if(indexes.includes(indexOfDiv)){
                divs[indexOfDiv].innerHTML = letterButton.html();
            }
        })
        // console.log(divs);
    } else {
        letterButton.addClass('error');
        triesLeft--;
        $('.lives').text(`You have ${triesLeft} live(s) left`);
    }
}

const winnerOrLooser = (triesLeft) => {
    const underscoresContent = document.querySelectorAll('.underscore');
    for (let i = 0; i < underscoresContent.length; i++) {
        if (underscoresContent[i].innerHTML === "_") {
            console.log("no win")
            if (triesLeft === 0) {
                $('.lives').text(`You have ${triesLeft} live(s), you LOST the game! `);
                $('.letter-button').off();
            }
            return;
        }
    }
    // Here everything for a win goes here
    console.log("win");
    //     console.log("winner");
    $('.lives').text(`You Won the game with ${triesLeft} live(s) left`);
    $('.letter-button').off();
    // }


}



const $onload = () => {

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let triesLeft = 10;  //number of tries left for the user to guess

    let inputtedWord = ""; //Stores the string typed by word creator

    let input = document.getElementById('word');


   

   


    




    $('#btnsubmit').one('click', function () {
        inputtedWord = input.value;
        generateUnderscore();


        const content = alphabet.map(letter => `<button type="button" class="letter-button" value="${letter}">${letter}</button>`);
        const div = document.getElementById('buttonGroup');
        // const output = document.getElementById('output');
        div.innerHTML += content.join('');


        $('.letter-button').on("click", function () {
            handleLetterSelection($(this), inputtedWord, triesLeft);
            winnerOrLooser(triesLeft);
        })

    })



    // When a letter is clicked,
    // Check if the letter that was clicked is in arrayOfLettersTypedByCreator
    // If it is in the array, 
    // turn the letter green and add it to the dashes on the page
    // Else 
    // Turn the letter red and add one to the number of incorrect moves



    let generateUnderscore = () => {
        for (let i = 0; i < inputtedWord.length; i++) {
            $('.underscores').append(`<div class="underscore">_</div>`);

            // console.log(arrayOflettersTypedByCreator.length);
        }
    }

    // const resetBoard = () => {
    //     maxTries = 10;
    //     arrayOfLettersTypedByCreator = [];
    //     console.log(maxTries, arrayOfLettersTypedByCreator);
    //     $('.underscore').empty();
    //     $('.underscores').empty();
    //     $('#word').val("");
    //     $('.lives').text(`You have ${maxTries} lives left`);
    //     $('.letter-button').removeClass('success');
    //     $('.letter-button').removeClass('error');


    // }


    $('#reset').click(function () {
        // resetBoard();
        location.reload(true);


    })

}
$onload();