const userInput = document.querySelector('.user-input')
const form = document.querySelector('form')
let result = document.querySelector('.result')
const allGuess= document.querySelector('.your-guess')
const submitBtn = document.querySelector('.submit')
const startBtn = document.querySelector('.start-game')

const allGuessArray= []


let randomNumber = Math.round(Math.random() * 100)


form.addEventListener('submit',(e)=>{
    e.preventDefault()
     
    const userInputValue = parseInt(userInput.value)

    if (userInputValue < randomNumber ){
        result.innerText='too low!'
    }else if(userInputValue > randomNumber){
        result.innerText= 'too high!'
    }else{
        result.innerText= 'You got at congrates!'
        startBtn.disabled=false
        submitBtn.disabled= true
    }

    // userInput.value = ''
    form.reset()
    allGuessArray.push(userInputValue)
    allGuess.innerText= 'Your guesses ' + allGuessArray.join(', ')
    

})



startBtn.addEventListener('click', () =>{
    result.innerText=''
    allGuess.innerText=''
    
    startBtn.disabled= true
    submitBtn.disabled= false
    randomNumber = Math.round(Math.random() * 100)
   

})
