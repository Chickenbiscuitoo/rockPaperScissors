function computerPlay () {
    let items = ['ROCK', 'PAPER', 'SCISSORS'];
    let item = items[Math.floor(Math.random()*items.length)];
    return item
}

function playRound () {
    const playerSelection  = window.prompt('Select Rock, Paper or Scissors.');
    const computerSelection = computerPlay()

    if (playerSelection.toUpperCase() === 'ROCK') {
        if (computerSelection === 'ROCK') {
            console.log('draw')
        } else if (computerSelection === 'PAPER') {
            console.log('you lost')
        } else if (computerSelection === 'SCISSORS') {
            console.log('you won')
        }
    }

    if (playerSelection.toUpperCase() === 'PAPER') {
        if (computerSelection === 'ROCK') {
            console.log('you won')
        } else if (computerSelection === 'PAPER') {
            console.log('draw')
        } else if (computerSelection === 'SCISSORS') {
            console.log('you lost')
        }
    }

    if (playerSelection.toUpperCase() === 'SCISSORS') {
        if (computerSelection === 'ROCK') {
            console.log('you lost')
        } else if (computerSelection === 'PAPER') {
            console.log('you won')
        } else if (computerSelection === 'SCISSORS') {
            console.log('draw')
        }
    }
}

function game () {
    r = window.prompt('How many rounds?')
    for (let c = 0; c < r; c++) {
        playRound()
    }
}

game()