
let weaponArr = ['rock', 'paper', 'scissors'];
const playerSelection = playerPlay();
const computerSelection = computerPlay();

function computerPlay() {
    return weaponArr[Math.floor(Math.random() * weaponArr.length)];
}

function playerPlay() {
    let weaponChoice = prompt("Choose: rock, paper or scissors");
    for(const i of weaponArr) {
        if(weaponChoice.toLowerCase() === i) {
            return weaponChoice;
        }
    }
    return console.log("not match")
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection !== computerSelection) {
        return `NOT TIE player: ${playerSelection}, computer: ${computerSelection}`;
    }
    return `TIE player: ${playerSelection}, computer: ${computerSelection}`;      
}

function game() {
    for(let i = 0; i < 5; i++) {
        console.log(i + playRound(playerSelection, computerSelection));
    }
}

