const getEqualLettersIndexes = (item, inputtedWord) => {
    let indexOfEqualLetters = [];
    for (let i = 0; i < inputtedWord.length; i++) {
        if (item.html() === inputtedWord[i]) {
            indexOfEqualLetters.push(i)
        }
    }
    return indexOfEqualLetters;
}

const handleLetterSelectionAndRecalculateTriesLeft = (letterButton, inputtedWord, triesLeft) => {
    if (inputtedWord.includes(letterButton.html())) {
        letterButton.addClass('success');
        //replace the underscores by letters chosen
        const indexes = getEqualLettersIndexes(letterButton, inputtedWord);
        // console.log(indexes);
        const divs = $('.underscore');
        divs.each((indexOfDiv) => {
            if (indexes.includes(indexOfDiv)) {
                divs[indexOfDiv].innerHTML = letterButton.html();
            }
        })
        // console.log(divs);
    } else {
        letterButton.addClass('error');
        triesLeft--;
        $('.lives').text(`You have ${triesLeft} live(s) left`);
    }
    return triesLeft;
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

    console.log("win");
    $('.lives').text(`You Won the game with ${triesLeft} live(s) left`);
    $('.letter-button').off();
}

let generateUnderscore = (inputtedWord) => {
    for (let i = 0; i < inputtedWord.length; i++) {
        $('.underscores').append(`<div class="underscore">_</div>`);
    }
}

const createKeyboard = () => {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const content = alphabet.map(letter => `<button type="button" class="letter-button" value="${letter}">${letter}</button>`);
    const div = document.getElementById('buttonGroup');
    div.innerHTML += content.join('');
}

const $onload = () => {

    $('#word').on('keypress', function (event) {
        // console.log(event);
        if (event.key == 'Enter') { //key 13 is the enter key
            $('#btnsubmit').click()
        }
    });

    $('#btnsubmit').one('click', function () {
        $('#btnsubmit').hide();
        let triesLeft = 10;  //number of tries left for the user to guess
        let input = document.getElementById('word');
        let inputtedWord = input.value; //Stores the string typed by word creator
        generateUnderscore(inputtedWord);
        createKeyboard();

        $('.letter-button').on("click", function () {
            triesLeft = handleLetterSelectionAndRecalculateTriesLeft($(this), inputtedWord, triesLeft);
            winnerOrLooser(triesLeft);
        })

        $('#reset').click(function () {
            location.reload(true);
        })
    })



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

}
$onload();