// selectors

const input = document.getElementById("input");
const form = document.getElementById("form");
const result = document.getElementById("result");
const allGuesses = document.getElementById("allGuess")
const submit = document.getElementById("submit")
const startGameBtn = document.getElementById("reset")

const allGuessesArray = []
const randomNum = Math.round(Math.random ()*10);

// startGameBtn.disabled = true;

form.addEventListener("submit" , (e) => {
    e.preventDefault()
    const userInput = parseInt(input.value)
    if( userInput < randomNum ) {
        result.innerText = "Too low!!"

    }
     else if (userInput > randomNum) {
        result.innerText = "Too High!!"
        
    }

    else if (userInput === randomNum) {
        result.innerText = "Congrats !! You Won 🎉🎊"
        startGameBtn.disabled = false
        submit.disabled = true

    }
    
    allGuessesArray.push(userInput)
    allGuesses.innerText = allGuessesArray.join(', ')
    

    });

    startGameBtn.addEventListener("click" , () => {
        result.innerText = ''
        allGuesses.innerText =''
        result.innerText = ''
        startGameBtn.disabled = true
        submit.disabled = false
    })

   
