
const weaponArr = ['rock', 'scissors', 'paper'];
const playerSelection = playerPlay();
const computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    return weaponArr[Math.floor(Math.random() * weaponArr.length)];
}

function playerPlay() {
    let weaponChoice = prompt("Choose: rock, paper or scissors").toLowerCase();
    for(const i of weaponArr) {
        if(weaponChoice === i) {
            return weaponChoice;
        }
    }
    return console.log("not match")
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection !== computerSelection) {
        switch(playerSelection) {
            case 'rock':
                if(computerSelection === weaponArr[1]) {
                    return `WIN player: ${playerSelection}, computer: ${computerSelection}`;
                }else {
                    return `LOSE player: ${playerSelection}, computer: ${computerSelection}`; 
                }
            case 'paper':
                if(computerSelection === weaponArr[0]) {
                    return `WIN player: ${playerSelection}, computer: ${computerSelection}`;
                }else {
                    return `LOSE player: ${playerSelection}, computer: ${computerSelection}`; 
                }
            case 'scissors':
                if(computerSelection === weaponArr[2]) {
                    return `WIN player: ${playerSelection}, computer: ${computerSelection}`;
                }else {
                    return `LOSE player: ${playerSelection}, computer: ${computerSelection}`; 
                }
        }
        return `NOT TIE player: ${playerSelection}, computer: ${computerSelection}`;
    }
    return `TIE player: ${playerSelection}, computer: ${computerSelection}`;      
}

function game() {
    for(let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
    }
}

