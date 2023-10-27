const ps = require('prompt-sync')
const prompt = ps()

const game = function () {
    console.log('Hello and welcome to the amazing game of Rock, Paper and Scissors!!!');

    let userChoice = prompt("Do you choose rock, paper or scissors?") 

    let computer = Math.random();
    if (computer < 0.2) {
        computer = 'paper';
    }else if (computer > 0.2 && computer < 0.70) {
        computer = 'rock';
    } else {
        computer = 'scissors'
    }

    let win = 0;
    let loss = 0

    if (computer === userChoice) {
        console.log('Draw');
    } else if (userChoice === 'rock' && computer === 'paper') {
        console.log('Win')
        win++;
    } else if (userChoice === 'rock' && computer === 'scissors') {
        console.log('Loss');
        loss++;
    } else if (userChoice === 'paper' && computer === 'scissors') {
        console.log('Loss');
        loss++;
    } else if (userChoice === 'paper' && computer === 'rock') {
        console.log('Win');
        win++;
    } else if (userChoice === 'scissors' && computer === 'rock') {
        console.log('Loss');
        loss++;
    } else if (userChoice === 'scissors' && computer === 'paper') {
        console.log('Win');
        win++;
    }
}
game();
let user = prompt("Would you like to play again?");
if (user === 'yes') {
    game()
} else {
    console.log('Bye!')
}





