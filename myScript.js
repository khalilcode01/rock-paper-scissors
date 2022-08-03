let list = ['rock' , 'paper' , 'scissors'];
let computerChoice = function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * list.length);        
    return list[randomIndex];
};
console.log(computerChoice());
let player = prompt("Your turn!").toLowerCase;
let playerCount = 0, computerCount = 0;
function playRound(playerSelection,computerSelection) {
    if (playerSelection === "paper" && computerSelection === "rock"){
    console.log("You win! P2aper beats Rock");
    playerCount++;    
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        console.log("You lose! Rock beats Paper");
        computerCount++;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        console.log("You win! Scissors beats Paper");
        playerCount++;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        console.log("You lose! Scissors beats Paper");
        computerCount++;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        console.log("You win! Rock beats Scissors");
        playerCount++;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        console.log("You lose! Rock beats Scissors");
        computerCount++;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        console.log("You win! Scissors beats paper");
        playerCount++;
    }
    else if (playerSelection === computerSelection){
        console.log("Draw!");
    }
    else {
        console.log("invalid value");
    }
}