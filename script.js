let div = document.querySelector(".div")

let buttonOne = document.querySelector(".button-one")

let buttonTwo = document.querySelector(".button-two")

let buttonThree = document.querySelector(".button-three")

let buttonFour = document.querySelector(".button-four")

let paragraphOne = document.querySelector(".paragraph-one")

let paragraphTwo = document.querySelector(".paragraph-two")

let paragraphThree = document.querySelector(".paragraph-three")

let paragraphFive = document.querySelector(".paragraph-five")

let paragraphSeven = document.querySelector(".paragraph-seven")

let computerChoiceDisplay = document.querySelector(".heading-two")

let userChoice;

let scoreYou = 0

let scoreBot = 0

let computerChoice = ["✊", "✋", "✌️"]

buttonOne.addEventListener("click", (e) => {
    if (e.target.classList.contains("rock")) {
        userChoice = "✊"
        paragraphOne.innerText = "✊"
        turnTwo()
        checkWin()
    }
})

buttonTwo.addEventListener("click", (e) => {
    if (e.target.classList.contains("paper")) {
        userChoice = "✋"
        paragraphOne.innerText = "✋"
        turnTwo()
        checkWin()
    }
})

buttonThree.addEventListener("click", (e) => {
    if (e.target.classList.contains("scissor")) {
        userChoice = "✌️"
        paragraphOne.innerText = "✌️"
        turnTwo()
        checkWin()
    }
})

buttonFour.addEventListener("click" , () =>{
    scoreYou = 0
    scoreBot = 0
    paragraphFive.innerText = scoreYou
    paragraphSeven.innerText = scoreBot
})

let computerChoosen

function turnTwo() {
    let randomNumber = Math.floor(Math.random() * 3)
    computerChoosen = computerChoice[randomNumber]
    computerChoiceDisplay.innerText = computerChoosen
    console.log(randomNumber)
}

function checkWin (){
    if (userChoice == computerChoosen) {
        paragraphThree.innerText = "draw"
        console.log("draw")
    }
    else if (userChoice == "✊" && computerChoosen == "✌️") {
        paragraphThree.innerText = "you win"
        scoreYou++
        paragraphFive.innerText = scoreYou
        console.log(scoreYou)
    }
    else if(userChoice == "✋" && computerChoosen == "✊"){
        paragraphThree.innerText = "you win"
        scoreYou++
        paragraphFive.innerText = scoreYou
    }
    else if(userChoice == "✌️" && computerChoosen == "✋"){
        paragraphThree.innerText = "you win"
        scoreYou++
        paragraphFive.innerText = scoreYou
    }
    else{
        paragraphThree.innerText = "you lose"
        scoreBot++
        paragraphSeven.innerText = scoreBot
    }
}

