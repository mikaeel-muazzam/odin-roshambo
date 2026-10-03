console.log("Use 'playGame()' to start the game!");
// get computer choice
function getComputerChoice() {
    const rand = Math.floor(Math.random()*3); //generate a random integer from 0-2 (both inclusive)
    let choice;
    switch(rand) { //select choice based on value of rand
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors"
    }
    return choice;
}

//get human choice
function getHumanChoice() {
    let choice;
    choice = prompt("Choose rock, paper, or scissors"); //prompts the user to type in their choice
    return choice;
}

//play an entire game
function playGame() {
    // score declarations
    let humanScore = 0;
    let computerScore = 0;

    //play a single round
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase(); //normalize to lowercase so humanChoice is case insensitive

        let winner;
        //find the winner
        if(humanChoice === computerChoice) {
            winner = "tie";
        } else if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                winner = "human";
            } else {
                winner = "computer";
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                winner = "human";
            } else {
                winner = "computer"
            }
        } else { //here, human choice is guaranteed to be scissors
            if (computerChoice === "paper") {
                winner = "human";
            } else {
                winner = "computer";
            }
        }     
        //print a win message based on winner
        let message;
        if (winner === "tie") {
            message = `It's a tie! ${humanChoice} ties with ${computerChoice}`;
        } else if (winner === "human") {
            message = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        } else {
            message = `You lose! ${humanChoice} gets beaten by ${computerChoice}`
            computerScore++;
        }
        console.log(message);
    }

    //game loop
    for(let i = 1; i <= 5; i++) {        
        //get choices
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        //play a round
        playRound(humanChoice, computerChoice)
    }

    //find final winner
    let winner;
    if (humanScore === computerScore) {
        winner = "tie"
    } else if (humanScore > computerScore) {
        winner = "human";
    } else {
        winner = "computer";
    }

    //final message
    console.log("\nFINAL VERDICT");
    
    let message;
    if (winner === "tie") {
        message = "It's a tie.";
    } else if (winner === "human") {
        message = "You win.";
    } else {
        message = "Computer wins.";
    }
    console.log(message);
}