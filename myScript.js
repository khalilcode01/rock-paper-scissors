
let list = ['rock' , 'paper' , 'scissors'];
function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * list.length);        
    return list[randomIndex];
}
let playerCount = 0, computerCount = 0;
function playRound(playerSelection,computerSelection) {
    if (playerSelection === "paper" && computerSelection === "rock"){
        divs.textContent = "You win! Paper beats Rock";
        container.appendChild(divs);
    playerCount++;    
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        divs.textContent = "You lose! Rock beats Paper";
        container.appendChild(divs);
        computerCount++;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        divs.textContent = "You win! Scissors beats Paper";
        container.appendChild(divs);
        playerCount++;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        divs.textContent = "You lose! Scissors beats Paper";
        container.appendChild(divs);
        computerCount++;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        divs.textContent = "You win! Rock beats Scissors";
        container.appendChild(divs);
        playerCount++;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        divs.textContent = "You lose! Rock beats Scissors";
        container.appendChild(divs);
        computerCount++;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        divs.textContent = "You win! Scissors beats paper";
        container.appendChild(divs);
        playerCount++;
    }
    else if (playerSelection === computerSelection){
        divs.textContent = "Draw!";
        container.appendChild(divs);
    }

}
let playerChoice;
let counter = 1;
function game (){
    playerChoice.toLowerCase;
    playRound(playerChoice,getComputerChoice());    
    if(counter <= 5) {
        alert.textContent = counter;
        container.appendChild(alert);
        counter++;
    }
    else {
        if (playerCount > computerCount){
            divs.textContent = 'you won!';
            container.appendChild(divs);
            computerCount = 0;
            playerCount = 0;
        }
        else if (computerCount > playerCount){
            divs.textContent = 'you lost';
            container.appendChild(divs);
            computerCount = 0;
            playerCount = 0;
        }
        counter = 1;
    }
}
const container = document.querySelector('#container');
const btnRock = container.querySelector('.rock');
const btnPaper = container.querySelector('.paper');
const btnScissors = container.querySelector('.scissors');
btnRock.addEventListener('click', () => {
    playerChoice = 'rock';
    game ();
});
btnPaper.addEventListener('click', () => {
    playerChoice = 'paper';
    game ();
});
btnScissors.addEventListener('click', () => {
    playerChoice = 'scissors';
    game ();
});
let divs = document.createElement('div');
divs.setAttribute('id', 'result');
let alert = document.createElement('h3');
alert.setAttribute('class', 'announce');
