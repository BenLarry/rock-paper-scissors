
let weaponArr = ['rock', 'paper', 'scissors'];
const playerSelection = 'rock';
const computerSelection = computerPlay();

function computerPlay() {
    return weaponArr[Math.floor(Math.random() * weaponArr.length)];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection !== computerSelection) {
        return `NOT TIE player: ${playerSelection}, computer: ${computerSelection}`;
    }else {
        return `TIE player: ${playerSelection}, computer: ${computerSelection}`;
    }       
}

function game() {
    for(let i = 0; i < 5; i++) {
        console.log(i + playRound(playerSelection, computerSelection));
    }
}

