function getPlayerChoice(){
    let playerChoice = prompt("Choose: rock, paper, or scissors?", "type here");
    playerChoice = playerChoice.toLowerCase()
    return playerChoice;
}

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];  
    let randomIdx = Math.floor(Math.random() * choices.length);
    return choices[randomIdx];

}

function playRound(playerChoice, computerChoice){
    let result;
    let computer = 1;
    let player = 0;
    let tie = 2;

    if (playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "scissors" && computerChoice === "paper"
    || playerChoice === "paper" && computerChoice === "rock"){
        console.log(`${playerChoice} beats ${computerChoice}`);
        result = player;
    }
    else if (playerChoice === computerChoice){
        console.log("It's a tie!'");
        result = tie;
    }
    else{
        console.log(`${computerChoice} beats ${playerChoice}`);
        result = computer;
    }
    return result;
    
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let finalResult;
    for (i = 0; i < 5; i++){
        roundScore = playRound(getPlayerChoice(), getComputerChoice());
        if (roundScore === 0){
            playerScore++;
        }
        else if (roundScore === 1){
            computerScore++;
        }
        console.log(playerScore);
        console.log(computerScore);
    }

    if (computerScore > playerScore){
        finalResult = "COMPUTER WINS!";
    }
    else if (playerScore > computerScore){
        finalResult = "PLAYER WINS!";
    }
    else{
        finalResult = "IT'S A FINAL TIE";
    }

    return finalResult;

}

console.log(game());