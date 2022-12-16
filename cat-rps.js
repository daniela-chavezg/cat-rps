
/*
gets user choice
*/
function playerChoice(){
    let playerChoice = prompt("Choose: rock, paper, or scissors?");
    playerChoice = playerChoice.toLowerCase()
    return playerChoice;
}

/*
gets computer choice
 */
function computerChoice(){
    const choices = ["rock", "paper", "scissors"];  
    let randomIdx = Math.floor(Math.random() * choices.length);
    return choices[randomIdx];

}

/* 
plays one round
*/
function playRound(playerChoice, computerChoice){
    let outcome = 0
    if (playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "scissors" && computerChoice === "paper"
    || playerChoice === "paper" && computerChoice === "rock"){
        console.log(`${playerChoice} beats ${computerChoice}`);
        outcome = 0;
    }
    else if (playerChoice === computerChoice){
        console.log("It's a tie!'");
        outcome = 2;
    }
    else{
        console.log(`${computerChoice} beats ${playerChoice}`);
        outcome = 1;
    }
    return outcome;
    
}

/*
*/
function game(){
    let playerScore = 0;
    let computerScore = 0;
    let result = "";
    for (i = 0; i < 5; i++){
        roundScore = playRound(playerChoice(), computerChoice());
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
        result = "COMPUTER WINS!";
    }
    else if (playerScore > computerScore){
        result = "PLAYER WINS!";
    }
    else{
        result = "IT'S A FINAL TIE";
    }

    return result;

}

console.log(game());