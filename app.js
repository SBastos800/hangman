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
            $('.lives').text(`You have ${maxTries} live(s) left`);

        }
    }


    const winnerOrLooser = () => {
        
        const underscoresContent = document.querySelectorAll('.underscore');
    
        for (let i = 0; i < underscoresContent.length; i++) {
            if (underscoresContent[i].innerHTML === "_") {
                console.log("no win")
                if (maxTries === 0) {
                    $('.lives').text(`You have ${maxTries} live(s), you LOST the game! `);
                    $('.letter-button').off();
                 }
                return;
                
            }
        }
        // Here everything for a win goes here
        console.log("win");
        // if (maxTries > 0 && JSON.stringify(inputArrayOfLettersClicked)==JSON.stringify(arrayOfLettersTypedByCreator)) {
        //     console.log("winner");
            $('.lives').text(`You Won the game with ${maxTries} live(s) left`);
            $('.letter-button').off();
        // }
        
        
    }
   



    $('#btnsubmit').one('click', function () {
        lettersTypedByWordCreator = input.value;
        // console.log(lettersTypedByWordCreator);
        arrayOfLettersTypedByCreator = lettersTypedByWordCreator.split("");
        // console.log(arrayOflettersTypedByCreator);
        // console.log(arrayOflettersTypedByCreator.length);
        generateUnderscore();


        const content = alphabet.map(letter => `<button type="button" class="letter-button" value="${letter}">${letter}</button>`);
        const div = document.getElementById('buttonGroup');
        // const output = document.getElementById('output');
        div.innerHTML += content;


        $('.letter-button').on("click", function () {
            giveLetterAColor($(this));
            winnerOrLooser();
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