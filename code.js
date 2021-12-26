function computerPlay () {
    let items = ['ROCK', 'PAPER', 'SCISSORS'];
    let item = items[Math.floor(Math.random()*items.length)];
    return item
}

function playRound () {
    const computerSelection = computerPlay()
    let pcScore = 0;
    let playerScore = 0;

    if (playerSelection === 'ROCK') {
        if (computerSelection === 'ROCK') {
            return 'TIE'
        } else if (computerSelection === 'PAPER') {
            return 'YOU LOST'
        } else if (computerSelection === 'SCISSORS') {
            return 'YOU WON'
        }
    }

    if (playerSelection === 'PAPER') {
        if (computerSelection === 'ROCK') {
            return 'YOU WON'
        } else if (computerSelection === 'PAPER') {
            return 'TIE'
        } else if (computerSelection === 'SCISSORS') {
            return 'YOU LOST'
        }
    }

    if (playerSelection === 'SCISSORS') {
        if (computerSelection === 'ROCK') {
            return 'YOU LOST'
        } else if (computerSelection === 'PAPER') {
            return 'YOU WON'
        } else if (computerSelection === 'SCISSORS') {
            return 'TIE'
        }
    }
}

const result = document.querySelector('#result');

const btnR = document.querySelector('#btnR');
btnR.addEventListener('click', () => {
    playerSelection = 'ROCK';
    result.textContent = playRound();
})

const btnP = document.querySelector('#btnP');
btnP.addEventListener('click', () => {
    playerSelection = 'PAPER';
    result.textContent = playRound();
})

const btnS = document.querySelector('#btnS');
btnS.addEventListener('click', () => {
    playerSelection = 'SCISSORS';
    result.textContent = playRound();
})
