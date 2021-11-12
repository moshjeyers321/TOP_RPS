let playerScore = 0;
let computerScore = 0;

const scoreBoard = document.querySelector('#scoreBoard');
const scoreStatement = document.querySelector('#scoreStatement');
scoreBoard.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        let result = playRound(playerSelection, computerPlay());
        displayScore(result);
        checkWin();

    })
});


function computerPlay() {
    let choice = Math.floor((Math.random() * 3));

    switch (choice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
};

function playRound(playerSelection, computerSelection) {
    const lossStatement = `You Lose! ${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()}`
    const winStatement = `You Win! ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}`
    const tieStatement = "It's a tie!"

    switch (playerSelection.toLowerCase()) {
        case 'rock':
            switch (computerSelection) {
                case 'rock': return ['tie',tieStatement]; break;
                case 'paper': return ['loss',lossStatement]; break;
                case 'scissors': return ['win',winStatement]; break;
            };
            break;
        case 'paper':
            switch (computerSelection) {
                case 'rock': return ['win',winStatement]; break;
                case 'paper': return ['tie',tieStatement]; break;
                case 'scissors': return ['loss',lossStatement]; break;
            };
            break;
        case 'scissors':
            switch (computerSelection) {
                case 'rock': return ['loss',lossStatement]; break;
                case 'paper': return ['win',winStatement]; break;
                case 'scissors': return ['tie',tieStatement]; break;
            };
            break;
    }
};

function displayScore(result) {
    switch (result[0]){
        case 'win':
            playerScore++;
            scoreBoard.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
            scoreStatement.textContent = `${result[1]}`;
            break;
        case 'loss':
            computerScore++;
            scoreBoard.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
            scoreStatement.textContent = `${result[1]}`;
            break;
        case 'tie':
            scoreBoard.textContent = `Player Score: ${playerScore} Computer  Score: ${computerScore}`;
            scoreStatement.textContent = `${result[1]}`;
            break;
    }
};


function checkWin() {
    if (playerScore == 3 || computerScore == 3) {
        if (playerScore == 3) {
            scoreStatement.textContent = "CONGRATULATIONS YOU WIN";
        } else {
            scoreStatement.textContent = "SUCKS TO SUCK DO BETTER NEXT TIME";
        }
    }
};