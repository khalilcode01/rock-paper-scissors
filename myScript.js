let list = ['rock' , 'paper' , 'scissors'];
let computerChoice = function getComputerChoice(){
    let randomIndex = Math.floor(Math.random() * list.length);        
    return list[randomIndex];
};
console.log(computerChoice());
let player = prompt("Your turn!");
let 